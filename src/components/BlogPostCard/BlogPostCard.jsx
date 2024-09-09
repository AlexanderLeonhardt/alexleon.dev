import { M_PLUS_Code_Latin } from 'next/font/google';
import styles from './styles.module.css';

export default function BlogPostCard({ slug, title, date, description }) {
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }
  const dateString = date?.toLocaleDateString("en-US", options);
  return (
    <article className={`card ${styles.article}`}>
      <div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.date}>Posted on {dateString}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <a href={`/blog/${slug}`} className={styles.link}>Read more</a>
    </article>
  );
}