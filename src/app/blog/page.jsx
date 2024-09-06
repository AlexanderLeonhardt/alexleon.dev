import { getBlogPosts } from "@/lib/data";

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  if (!blogPosts || blogPosts.length <= 0) return <p>Couldn&apos;t fetch any posts</p>

  return (
    <main className={`main card`}>
      <h1>Blog Page</h1>
      {blogPosts.map((blogPost) =>
        <article key={blogPost.slug}>
          <a href={`/blog/${blogPost.slug}`}>
            <h1>{blogPost.title}</h1>
            <p>{blogPost.description}</p>
          </a>
        </article>
      )}
    </main>
  );
}