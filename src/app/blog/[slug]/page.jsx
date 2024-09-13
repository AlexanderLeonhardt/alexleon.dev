import styles from './styles.module.css';
import { getBlogPost } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogPost = await getBlogPost(slug);
  if (!blogPost) notFound();

  return {
    title: blogPost.title,
    description: blogPost.description,
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const blogPost = await getBlogPost(slug);
  if (!blogPost) notFound();

  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }
  const dateString = blogPost.createdAt.toLocaleDateString("en-US", options);
  const content = { __html: blogPost.content};

  return (
    <main className={`main card`}>
      <h1>{blogPost.title}</h1>
      <p className={styles.date}>{dateString}</p>
      <div dangerouslySetInnerHTML={content} />
    </main>
  );
}