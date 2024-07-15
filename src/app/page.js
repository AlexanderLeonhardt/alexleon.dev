import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className='main'>
      <div className='card'>
        <h1>Roadmap</h1>
        <p>Below is the roadmap I have planned for this site. Once something is completed, I will not return to it until all of the tasks have been completed. I will also not spend any longer than necessary on each task.</p>
        <p>The goal is to spend no more than a week on each section of the site.</p>



        <h2>What & where?</h2>
        <p>For the design process we will first figure out the content we need to show and then where it should go. Let&apos;s review all of the content that we wish to show:</p>
        <ul>
          <li>Introduction</li>
          <ul>
            <li>About me</li>
            <li>Picture / art of me</li>
            <li>Links to socials (GitHub, Linkedin, etc)</li>
          </ul>
          <li>Knowledge and tools</li>
          <ul>
            <li>Next</li>
            <li>React</li>
            <li>MongoDB</li>
            <li>Node</li>
            <li>TypeScript</li>
            <li>etc...</li>
          </ul>
          <li>Projects</li>
          <ul>
            <li>Around 5 projects to show off my skills</li>
          </ul>
          <li>Blog posts</li>
          <ul>
            <li>Dashboard page to create blog posts</li>
            <li><a target='_blank' href='https://authjs.dev/getting-started'>Authjs</a> - Authentication to protect dashboard page.</li>
            <li><a target="_blank" href='https://tiptap.dev/docs/editor/getting-started/install/nextjs'>TipTap</a> - Rich text editor for creating the posts.</li>
            <li><a target="_blank" href='https://www.mongodb.com/'>MongoDB</a> - Database to store the blog posts.</li>
          </ul>
          <li>Contact</li>
          <ul>
            <li>Links to socials</li>
            <li>A form to email me</li>
          </ul>
        </ul>
        <p>Now that we know what we need, let&apos;s figure out where everything should go. Most of the content we have can exist on 3-4 pages.</p>
        <ol>
          <li>Home</li>
          <li>Blog</li>
          <li>Projects?</li>
          <li>Contact</li>
        </ol>
        <p>The reason why I have a question mark for the projects page is becuase the projects could exist on the home page or on it&apos;s own seperate page. I&apos;ll decide on this more later when filling out the home page. Right now I think either way works perfectly fine.</p>
        <p>Now that I have the what and the where, it&apos;s time to get a little more specific. I&apos;ll start with the home page.</p>



        <h2>Home Page</h2>
        <p>This is the current page that we are on now. Since this is the first page people will see when going to <code>alexleon.dev</code> this page needs to breifly outline what this site is about and it must be very intuitive to navigate and understand.</p>
        <p>On the home page we can fit the <code>Introduction</code>, <code>Knowledge and tools</code>, either all of the <code>Projects</code> or a small section showcasing the top projects and then a button linking to a page, a section for the most recent blog posts with links to them, and a section to contact me that links to the contact page.</p>
        <p>In total, the home page will have 5 sections, the top most will be my introduction and knowledge/tools followed by my projects, recent blog posts, and contact information.</p>



        <h2>Blog Page</h2>
        <p>This page will effectively be a generated list of blog posts fetched from a database. The work that needs to be done on this page is actually fairly small, the page that will actually take a lot of time to create is the <code>Dashboard Page</code></p>
        <p>The dashboard page needs to require authentication to view since it will allow me to create blog posts through the site itself. No need to <a target="_blank" href='https://en.wikipedia.org/wiki/Hard_coding'>hard code</a> each blog post.</p> 
        <p>The entire process of creating the blog posts, saving them in a database, and then rendering them in their own pages is a bit daunting but I have already created tests covering each of these steps and even got a semi-working version before. I want to get this set up since I really like the idea of blogging about what I&apos;m working on or learning on my own portfolio.</p>



        <h2>Projects Page</h2>
        <p>Regardless of whether I decide on creating a projects section on the home page, putting all of the projects on their own page, or both, each project needs to contain three different things:</p>
        <ol>
          <li>Link to a live working version</li>
          <li>Link to the code&apos;s repository</li>
          <li>What and why section about the project</li>
        </ol>
        <p>Each project should be fully functional and imitate a real company&apos;s webpage and contain the functionality that you would expect. (Like adding items to a shopping cart)</p>


        <h2>Contact Page</h2>
        <p>Finally, the contact page. This page will be pretty simple, though I haven&apos;t looked too far into creating a page like this before. I fully understand the concept and I&apos;ve created tests before, so I&apos;m not too worried.</p>
      </div>
    </main>
  );
}
