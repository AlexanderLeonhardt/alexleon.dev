'use client';

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
          <button onClick={handleCreateNew}>Create New Post</button>
          <div className="blogPostList">
            {blogPosts.map((blogPost) => (
              <div key={blogPost.slug} className="blogPost">
                <div>
                  <p><a href={`/blog/${blogPost.slug}`}>{blogPost.title}</a></p>
                  <p>{new Date(blogPost.createdAt).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
                <div className="buttons">
                  <button onClick={() => deleteBlogPost(blogPost.slug)}>Delete</button>
                  <button onClick={() => handleEditClick(blogPost)}>Edit</button>
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