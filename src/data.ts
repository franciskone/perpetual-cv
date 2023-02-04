import smartLogo from "@/assets/smart.webp"
import skyscannerLogo from "@/assets/skyscanner.svg"
import ovoLogo from "@/assets/ovo.svg"
import eurobetLogo from "@/assets/eurobet.svg"
import sisalLogo from "@/assets/sisal.svg"

type Client = {
  name: string
  logo: any
  url: string
}
type Project = {
  company: string
  description?: string
  role: string
  date: string
  url?: string
}

export type Data = {
  name: string
  title: string
  email?: string
  linkedin?: string
  github?: string
  description1: string
  description2: string
  clients: Client[]
  skills: string[]
  experience: Project[]
}

export const data: Data = {
  name: "Francesco Cappelli",
  title: "Tech Lead / Senior Front End Engineer",
  github: "franciskone",
  linkedin: 'https://www.linkedin.com/in/francesco-cappelli/',
  description1: "I am a passionate Software engineer always looking for improving my own skills to build innovative products using new technologies.",
  description2:
    "Based in London. Open to both remote and central London contracting gigs.",
  clients: [
    {
      name: "Skyscanner",
      logo: skyscannerLogo,
      url: "https://skyscanner.net/",
    },
    {
      name: "Smart",
      logo: smartLogo,
      url: "https://smart.co",
    },
    {
      name: "OVO energy",
      logo: ovoLogo,
      url: "https://www.ovoenergy.com/",
    },
    {
      name: "Eurobet",
      logo: eurobetLogo,
      url: 'https://www.eurobet.it/it/'
    },
    {
      name: "Sisal",
      logo: sisalLogo,
      url: 'https://www.sisal.it/'
    }
  ],
  skills: [
    "Javascript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Sass",
    "Less",
    "React",
    "React Native",
    "Redux",
    "Node.js",
    "Next.js",
    "Remix",
    "GraphQL",
    "Apollo",
    "Cypress",
    "Jest",
    "React Testing Library",
    "Docker",
    "AWS",
    "MUI",
    "Tailwind",
    "Chakra UI",
    "Bootstrap",
  ],
  experience: [
    {
      company: "Smart Pension",
      role: "Tech Lead",
      date: "May 2021 - Now",
    },
    {
      company: "Skyscanner",
      role: "Full Stack Engineer",
      date: "Dec 2019 - Apr 2021",
    },
    {
      company: "Ovo energy",
      role: "Senior Front End Engineer",
      date: "Set 2019 - Nov 2019",
    },
    {
      company: "Smart Pension",
      role: "Front End / Mobile Engineer",
      date: "Jun 2018 - Aug 2019",
    },
    {
      company: "Eurobet",
      role: "Front End / Mobile Engineer",
      date: "Oct 2016 - May 2018",
    },
    {
      company: "Sisal",
      role: "Front End / Mobile Engineer",
      date: "Feb 2016 - Sep 2016",
    },
    {
      company: "Freelancer",
      role: "PHP Developer",
      date: "Nov 2015 - Jan 2016",
    },
    {
      company: "Freelancer",
      role: "Wordpress Developer",
      date: "Sep 2012 - Oct 2015",
    },
  ],
}