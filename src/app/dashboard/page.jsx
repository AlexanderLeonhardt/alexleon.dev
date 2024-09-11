import styles from './page.module.css';
import Image from "next/image";
import { auth } from '@/auth';
import { SignInButton, SignOutButton } from '@/components/AuthButtons/AuthButtons';
import TipTap from '@/components/TipTap/TipTap';
import { getBlogPosts } from '@/lib/data';
import { DeleteBlogButton } from '@/components/DashButtons/DashButtons';

export const metadata = {
  title: "Dashboard",
  description: "alexleon.dev admin dashboard",
};

export default async function DashboardPage() {
  const session = await auth();
  if (!session) return <SignInButton/>
  const user = session.user;

  const blogPosts = await getBlogPosts();

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
      <div>
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
              <p><a href={`/blog/${slug}`}>{blogPost.title}</a></p>
              <p>{dateString}</p>
              <div className={styles.buttons}>
                <button>Edit</button>
                <DeleteBlogButton slug={slug} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}