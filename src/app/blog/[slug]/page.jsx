import { getBlogPost } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const blogPost = await getBlogPost(slug);
  
  if (!blogPost) notFound();
  const markup = { __html: blogPost.content};

  return (
    <main className={`main card`}>
      <h1>{blogPost.title}</h1>
      <p>{blogPost.description}</p>
      <div dangerouslySetInnerHTML={markup} />
    </main>
  );
}