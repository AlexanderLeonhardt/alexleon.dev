import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import { getBlogPosts } from "@/lib/data";

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  if (!blogPosts || blogPosts.length <= 0) return <p>Couldn&apos;t fetch any posts</p>

  return (
    <main className={`main card`}>
      <h1>Blog Page</h1>
      {blogPosts.map((blogPost) =>
        <BlogPostCard 
          key={blogPost.slug}
          slug={blogPost.slug}
          title={blogPost.title}
          date={blogPost.createdAt}
          description={blogPost.description}
        />
      )}
    </main>
  );
}