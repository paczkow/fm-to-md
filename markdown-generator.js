import Mustache from "mustache";
import fs from "fs/promises";

import { getCourseNotes } from "./json-data-provider.js";

const template = await fs.readFile("template.mst", "utf8");
const data = 
  await getCourseNotes(
    "https://frontendmasters.com/courses/javascript-hard-parts-v2",
    "data/course.json",
    "data/notes.json"
  )

const markdown = Mustache.render(
  template.toString(),
  data
);

await fs.writeFile('output.md', markdown, err => {
    if(err) {
        console.error(err);
    }
})