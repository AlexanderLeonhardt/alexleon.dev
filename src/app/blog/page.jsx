import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import { getBlogPosts } from "@/lib/data";
import styles from './page.module.css';

export default async function BlogPage() {
  const blogPosts = await getBlogPosts();

  if (!blogPosts || blogPosts.length <= 0) return <p>Couldn&apos;t fetch any posts</p>

  return (
    <main className={`main card`}>
      <h1>Blog Page</h1>
      <div className={`${styles.blogList}`}>
        {blogPosts.map((blogPost) =>
          <BlogPostCard 
          key={blogPost.slug}
          slug={blogPost.slug}
          title={blogPost.title}
          date={blogPost.createdAt}
          description={blogPost.description}
          />
        )}
      </div>
    </main>
  );
}