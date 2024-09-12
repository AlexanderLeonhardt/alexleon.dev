import styles from './page.module.css';
import Image from "next/image";
import { auth } from '@/auth';
import { SignInButton, SignOutButton } from '@/components/AuthButtons/AuthButtons';
import { getBlogPosts } from '@/lib/data';
import BlogPostEditor from '@/components/BlogPostEditor/BlogPostEditor';

export const metadata = {
  title: "Dashboard",
  description: "alexleon.dev admin dashboard",
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session) return <SignInButton/>
  const user = session.user;

  const blogPosts = (await getBlogPosts()).map((blogPost) => {
    return {
      slug: blogPost.slug,
      title: blogPost.title,
      description: blogPost.description,
      content: blogPost.content,
      createdAt: blogPost.createdAt
    }
  });

  return (
    <main className={`main card`}>
      <h1>Dashboard</h1>
      <div className={`${styles.user}`}>
        <p>Welcome, {user?.name}</p>
        <Image 
          src={user?.image} 
          alt={`${user?.name} GitHub profile picture`}
          width={40} 
          height={40} 
          priority={true} 
          className={styles.profilepic}
        />
        <SignOutButton />
      </div>
      <BlogPostEditor blogPosts={blogPosts} />
      {/* <div>
        <TipTap />
      </div>
      <div className={styles.blogPostList}>
        {blogPosts.map((blogPost) => {
          const slug = blogPost.slug;
          const options = {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }
          const dateString = blogPost.createdAt.toLocaleDateString("en-US", options);
          return (
            <div className={styles.blogPost} key={slug}>
              <div>
                <p><a href={`/blog/${slug}`}>{blogPost.title}</a></p>
                <p className={styles.date}>{dateString}</p>
              </div>
              <div className={styles.buttons}>
                <EditBlogButton slug={slug} />
                <DeleteBlogButton slug={slug} />
              </div>
            </div>
          );
        })}
      </div> */}
    </main>
  );
}