import fs from "fs/promises";

import { getCourseNotes } from "./json-data-provider.js";
import { createMarkdownFile } from "./markdown-generator.js";

export async function generateMarkdownFile({ link, course, notes, output }) {
  const [data, template] = await Promise.all([
    getCourseNotes({ link, course, notes }),
    fs.readFile("template.mst", "utf8"),
  ]);

  const markdown = createMarkdownFile({ data, template });

  await fs.writeFile(output, markdown, (err) => {
    if (err) {
      console.error(err);
    }
  });
}
