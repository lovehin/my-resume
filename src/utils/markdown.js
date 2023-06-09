import { marked } from "marked";

export const parse_md = (md) => {
  return marked.parse(md, {
    headerIds: false,
    mangle: false,
  });
};
