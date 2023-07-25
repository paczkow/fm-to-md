import Mustache from "mustache";

export function createMarkdownFile({ data, template }) {
  return Mustache.render(template.toString(), data);
}
