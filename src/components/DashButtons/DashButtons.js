'use client'

import styles from './styles.module.css';
import { deleteBlogPost } from '@/serveractions/blogPostActions';

export function DeleteBlogButton({ slug }) {
  return <button
    className={styles.delete}
    onClick={() => {
      console.log(slug);
      return deleteBlogPost(slug);
    }}
  >Delete</button>
}