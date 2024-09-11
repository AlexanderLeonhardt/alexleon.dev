'use client'

import styles from './styles.module.css';
import { deleteBlogPost } from '@/serveractions/blogPostActions';

export function DeleteBlogButton({ slug }) {
  return <button
    className={styles.delete}
    onClick={() => {
      return deleteBlogPost(slug);
    }}
  >Delete</button>
}

export function EditBlogButton({ slug }) {
  return <button
    className={styles.edit}
    onClick={() => {
      console.log("Editing " + slug);
    }}
  >Edit</button>
}