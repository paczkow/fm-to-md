import fs from "fs/promises";
import path from "path"
import groupBy from "lodash.groupby";

export async function getCourseNotes(
  link,
  courseJsonFilePath,
  notesJsonFilePath
) {
  const coursePromise = fs.readFile(courseJsonFilePath, { encoding: "utf-8" });
  const notesPromise = fs.readFile(notesJsonFilePath, { encoding: "utf-8" });

  const [courseData, notesData] = await Promise.all([
    coursePromise,
    notesPromise,
  ]);

  const { lessonData, lessonHashes } = JSON.parse(courseData);
  const { notes } = JSON.parse(notesData);

  const order = lessonHashes.map((hash) => lessonData[hash].title);
  const res = {
    title: "Lesson",
    description: "Great Source",
    link,
    author: "Wes Bos",
    notes: [],
  };

  const notesGroupedByLesson = groupBy(
    notes.map((note) => {
      const lessonMetadata = lessonData[note.lessonHash];
      const fullUrl = new URL(
        path.join(link, `${lessonMetadata.slug}/?t=${note.lessonSeconds}`),
      ).toString();

        console.log(fullUrl);

      return {
        body: note.body.replace(/[\r\n]/gm, ""),
        lessonId: lessonMetadata.hash,
        lesson: lessonMetadata.title,
        link: fullUrl,
        timestamp: note.lessonSeconds,
        createdAt: note.createdAt,
      };
    }),
    (note) => note.lesson
  );

  res.notes = order.reduce((acc, lesson) => {
    if (notesGroupedByLesson[lesson]) {
      acc.push({ lesson, lessonNotes: notesGroupedByLesson[lesson] });
    }
    return acc;
  }, []);


  return res;
}
