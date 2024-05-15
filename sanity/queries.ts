import groq from "groq";

export function getPosts(orderBy: "desc" | "asc" = "desc", start: number = 0) {
  const nrOfPosts = 10;
  const order =
    orderBy === "desc" ? "| order(_createdAt desc)" : "| order(_createdAt asc)";

  const limit = start + nrOfPosts;
  const slice = `[${start}...${limit}]`;

  const postQuery = groq`*[_type == "post"]${order}${slice}{
    title
  }`;
}
