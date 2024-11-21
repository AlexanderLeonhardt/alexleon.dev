import { HTML5Icon, CSS3Icon, JavaScriptIcon, MongoDBIcon, ExpressIcon, ReactIcon, NodeJSIcon, NextJSIcon, TypeScriptIcon, TailwindIcon, LinkedInIcon, GitHubIcon, LeetCodeIcon } from '@/components/Icons/Icons';

const tech = {
  'html5': {
    'icon': HTML5Icon,
    'name': "HTML",
  },
  'css3': {
    'icon': CSS3Icon,
    'name': "CSS",
  },
  'javascript': {
    'icon': JavaScriptIcon,
    'name': "JavaScript",
  },
  'mongodb': {
    'icon': MongoDBIcon,
    'name': "MongoDB",
  },
  'express': {
    'icon': ExpressIcon,
    'name': "Express",
  },
  'react': {
    'icon': ReactIcon,
    'name': "React",
  },
  'nodejs': {
    'icon': NodeJSIcon,
    'name': "Node.js",
  },
  'nextjs': {
    'icon': NextJSIcon,
    'name': "Next.js",
  },
  'typescript': {
    'icon': TypeScriptIcon,
    'name': "TypeScript",
  },
  'tailwind': {
    'icon': TailwindIcon,
    'name': "Tailwind",
  },
}

const socials = [
  {
    'link': 'https://www.linkedin.com/in/alexander-leonhardt-7a8526286',
    'label': 'Visit my LinkedIn profile',
    'icon': LinkedInIcon
  },
  {
    'link': 'https://github.com/AlexanderLeonhardt',
    'label': 'Visit my GitHub profile',
    'icon': GitHubIcon
  },
  {
    'link': 'https://leetcode.com/u/alexpleonhardt',
    'label': 'Visit my LeetCode profile',
    'icon': LeetCodeIcon
  },
]

const projects = [
  {
    'name': "ProjectChess",
    'desc': "A full-stack chess application created for the purpose of learning express and socket.io",
    'image': "/projectthumbs/chess.png",
    'repositoryLink': "https://github.com/AlexanderLeonhardt/project-chess",
    'demoLink': "https://project-chess.onrender.com",
    'stack': [tech.express, tech.react, tech.nodejs],
  },
  {
    'name': "PawsitivelyPerfectGrooming",
    'desc': "I used this project to learn tailwind and practice typescript",
    'image': "/projectthumbs/pasitivelyperfectgrooming.png",
    'repositoryLink': "https://github.com/AlexanderLeonhardt/pawsitivelyperfect-project",
    'demoLink': "https://pawsitivelyperfect-project.vercel.app",
    'stack': [tech.nextjs, tech.typescript, tech.tailwind],
  },
]

export { tech, socials, projects }