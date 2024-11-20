import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";
import YearsSince from "@/components/YearsSince/YearsSince";
import { getBlogPosts } from "@/lib/data";
import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import ContactForm from "@/components/ContactForm/ContactForm";
import { projects, socials, tech } from "@/lib/const";

export default async function HomePage() {
  const blogPosts = await getBlogPosts();

  return (
    <>
    <div className={`roadmap-banner`}>
      <Link href={'/roadmap'}>THIS SITE IS CURRENTLY A WORK IN PROGRESS - Click here to view the roadmap</Link>
    </div>
    <main className={`main card ${styles.main}`}>
      <section className={`${styles.intro}`}>
        <div className={`${styles.textContainer}`}>
          <h1>I&apos;m Alex, a self taught <span>web developer</span></h1>
          <div className={`${styles.socials}`}>

            {socials.map(social => {
              const Icon = social.icon;
              return (
                <div key={social.link} className={`${styles.icon}`}>
                  <a target="_blank" href={social.link} aria-label={social.label}>
                    <Icon />
                  </a>
                </div>
              );
            })}

          </div>
        </div>
        <div className={`${styles.profileContainer}`}>
          <Image 
            src="/profilepic.png" 
            alt="Hand drawn picture of me" 
            title="Art commissioned by 5amDraws" 
            width={280} 
            height={280} 
            priority={true} 
            className={styles.profilepic}
          />
        </div>
      </section>
      <section className={`${styles.about}`}>
        <h2>Who am I?</h2>
        <p>Hey there, my name is Alexander Leonhardt. I&apos;m currently <strong><YearsSince date='1999/11/30'/></strong> and living in <strong>Florida</strong>.</p>
        <p>I started my journey in the tech world <strong><YearsSince date='2014/8/1'/></strong> years ago, back in the beginning of highschool. The first program I created was a tic-tac-toe game where you could play against an unbeatable computer. I had a blast making it and decided to pursue programming as a career. After that I learned JavaScript while creating Discord bots and that lead me down the web-dev rabbit hole. I have a ton of fun making things in the digital world.</p>
      </section>
      <section className={`${styles.techstack}`}>
        <h2>Technologies</h2>
        <div className={`${styles.toolList}`}>

          {Object.keys(tech).map(key => {
            const Logo = tech[key].icon;
            return <div key={key} className={`${styles.tool}`}>
              <div className={`${styles.toolLogo}`}>
                <Logo />
              </div>
              <p>{tech[key].name}</p>
            </div>
          })}

        </div>
      </section>
      <section className={`${styles.projects}`}>
        <h2>Projects</h2>
        <div className={`${styles.projectList}`}>

          {projects.map(project => {
            return (
              <div key={project.name} className={`${styles.projectCard}`}>
                <div className={`${styles.projectDesc}`}>
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.desc}</p>
                  </div>
                  <div className={`${styles.projectLinks}`}>
                    <a className={`button`} href={project.repositoryLink}>Repository</a>
                    <a className={`button`} href={project.demoLink}>Live Demo</a>
                  </div>
                </div>
                <div className={`${styles.projectImage}`}>
                  <Image 
                    alt={project.name}
                    src={project.image}
                    fill
                  />
                </div>
              </div>
            )
          })}

        </div>
      </section>
      <section className={`${styles.blogposts}`}>
        <h2>Recent Posts</h2>
        <div className={`${styles.postList}`}>
          {blogPosts.slice(0, 3).map((blogPost) =>
            <div className={styles.post} key={blogPost.slug}>
              <BlogPostCard
                slug={blogPost.slug}
                title={blogPost.title}
                date={blogPost.createdAt}
                description={blogPost.description}
              />
            </div>
          )}
        </div>
        <br/>
        <a className={`button`} href='/blog'>View all posts</a>
      </section>
      <section className={`${styles.contact}`}>
        <h2>Get in touch!</h2>
        <ContactForm />
      </section>
    </main>
    </>
  );
}
