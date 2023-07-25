import fs from "fs/promises";
import path from "path";

import groupBy from "lodash.groupby";

export async function getCourseNotes({
  link,
  course: pathToCourse,
  notes: pathToNotes,
}) {
  const coursePromise = fs.readFile(pathToCourse, { encoding: "utf-8" });
  const notesPromise = fs.readFile(pathToNotes, { encoding: "utf-8" });
  const [courseData, notesData] = await Promise.all([
    coursePromise,
    notesPromise,
  ]);

  const { title, description, instructors, lessonData, lessonHashes } =
    JSON.parse(courseData);
  const { notes } = JSON.parse(notesData);

  return {
    title,
    description,
    link,
    authors: instructors.map(({ name }) => name).join(" "),
    notes: getNotesGroupedByLesson(
      notes,
      { data: lessonData, hashes: lessonHashes },
      link
    ),
  };
}

function getNotesGroupedByLesson(notes, lessons, link) {
  const { data, hashes } = lessons;
  const lessonsInOrder = hashes.map((hash) => data[hash].title);

  const notesGroupedByLesson = groupBy(
    notes.map((note) => {
      const lessonMetadata = data[note.lessonHash];

      return {
        body: note.body.replace(/[\r\n]/gm, ""),
        lessonId: lessonMetadata.hash,
        lesson: lessonMetadata.title,
        link: new URL(
          path.join(link, `${lessonMetadata.slug}/?t=${note.lessonSeconds}`)
        ).toString(),
        timestamp: note.lessonSeconds,
        createdAt: note.createdAt,
      };
    }),
    (note) => note.lesson
  );

  return lessonsInOrder.reduce((acc, lesson) => {
    if (notesGroupedByLesson[lesson]) {
      acc.push({ lesson, lessonNotes: notesGroupedByLesson[lesson] });
    }
    return acc;
  }, []);
}
