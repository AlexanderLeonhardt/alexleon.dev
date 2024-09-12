'use client';

import styles from './styles.module.css';
import { useState } from 'react';
import TipTap from '@/components/TipTap/TipTap';
import { blogPostSubmit, deleteBlogPost, updateBlogPost } from '@/serveractions/blogPostActions';

export default function BlogPostEditor({ blogPosts }) {
  const [editingPost, setEditingPost] = useState(null);

  const handleCreateNew = () => {
    setEditingPost({title: '', description: '', content: null});
  };

  const handleEditClick = (post) => {
    setEditingPost({slug: post.slug, title: post.title, description: post.description, content: post.content});
  };

  const handleSave = async ({ title, description, content }) => {
    if (editingPost?.slug) {
      await updateBlogPost({
        slug: editingPost.slug, 
        description: description, 
        content: content,
      });
      setEditingPost(null);
    } else {
      await blogPostSubmit({ title, description, content });
      setEditingPost(null);
    }
  };

  return (
    <div>
      {!editingPost ? (
        <>
          <button className={styles.create} onClick={handleCreateNew}><p>Create Post</p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0001 10.9999L22.0002 10.9997L22.0002 12.9997L13.0001 12.9999L13.0001 21.9998L11.0001 21.9998L11.0001 12.9999L2.00004 13.0001L2 11.0001L11.0001 10.9999L11 2.00025L13 2.00024L13.0001 10.9999Z"></path></svg></button>
          <div className={styles.list}>
            {blogPosts.map((blogPost) => (
              <div key={blogPost.slug} className={styles.blogPost}>
                <div className={styles.content}>
                  <p><a href={`/blog/${blogPost.slug}`}>{blogPost.title}</a></p>
                  <p className={styles.date}>{new Date(blogPost.createdAt).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
                <div className={styles.buttons}>
                  <button onClick={() => handleEditClick(blogPost)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12.8995 6.85453L17.1421 11.0972L7.24264 20.9967H3V16.754L12.8995 6.85453ZM14.3137 5.44032L16.435 3.319C16.8256 2.92848 17.4587 2.92848 17.8492 3.319L20.6777 6.14743C21.0682 6.53795 21.0682 7.17112 20.6777 7.56164L18.5563 9.68296L14.3137 5.44032Z"></path></svg>
                  </button>
                  <button className={styles.delete} onClick={() => deleteBlogPost(blogPost.slug)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM9 11V17H11V11H9ZM13 11V17H15V11H13ZM9 4V6H15V4H9Z"></path></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <TipTap
          postTitle={editingPost.title}
          postDescription={editingPost.description}
          postContent={editingPost.content}
          onSave={handleSave}
          onCancel={() => setEditingPost(null)}
        />
      )}
    </div>
  );
}