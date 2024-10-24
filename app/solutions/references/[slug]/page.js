// app/references/[slug]/page.js
import { notFound } from "next/navigation";
import Image from "next/image";
import Header from "@/app/_components/Header";

const posts = {
  "first-post": { title: "First Blog Post", content: "This is the first post content." },
  "second-post": { title: "Second Blog Post", content: "This is the second post content." },
};

export default function PostPage({ params }) {
  console.log(params); // Debugging
  const { slug } = params; // Get the slug from URL params

  const post = posts[slug];
  console.log(params);

  // If the post is not found, return a 404 page
  if (!post) {
    return notFound();
  }

  return (
    <section>
      <Header />
      <h1>{post.title}</h1>
      <Image src="/references-item.jpeg" alt="Blog image" width={576} height={432} />
      <p>{post.content}</p>
      <a href="/blog">Back to Blog</a>
    </section>
  );
}
