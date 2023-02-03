import featuristLogo from "@/assets/featurist.svg"
import kayakoLogo from "@/assets/kayako.svg"
import smartLogo from "@/assets/smart.png"
import tallariumLogo from "@/assets/tallarium.svg"
import zapnitoLogo from "@/assets/zapnito.svg"
import britishGasLogo from "@/assets/british-gas.svg"

export const data = {
  clients: [
    {
      name: "Featurist",
      logo: featuristLogo,
      url: "https://featurist.co.uk",
    },
    {
      name: "Kayako",
      logo: kayakoLogo,
      url: "https://kayako.com",
    },
    {
      name: "Smart",
      logo: smartLogo,
      url: "https://smart.co.uk",
    },
    {
      name: "Tallarium",
      logo: tallariumLogo,
      url: "https://tallarium.com",
    },
    {
      name: "Zapnito",
      logo: zapnitoLogo,
      url: "https://zapnito.com",
    },
    {
      name: "British Gas",
      logo: britishGasLogo,
      url: "https://britishgas.co.uk",
    },
  ],
  skills: [
    "TypeScript",
    "React",
    "Ember",
    "Next.js",
    "Remix",
    "Node.js",
    "PostgreSQL",
    "GraphQL",
    "Apollo",
    "Cypress",
    "Jest",
    "React Testing Library",
    "MUI",
    "Tailwind",
    "Bootstrap",
    "Stripe",
    "Ruby",
    "Rails",
    "RSpec",
    "Rust",
    "Rocket",
    "Axum",
    "Diesel",
    "Elixir",
    "Phoenix",
    "Ecto",
    "Sinatra",
    "Python",
    "Docker",
    "AWS",
    "Terraform",
    "Ansible",
    "OCaml",
    "ReasonML",
    "Git",
    "C#",
    ".NET",
    "C++",
    "C",
    "Unix",
    "Bash",
  ],
  experience: [
    {
      company: "Freelance",
      role: "Senior full-stack developer",
      date: "2016 - present",
    },
    {
      company: "AlphaSights",
      role: "Senior front-end developer",
      date: "2014 - 2016",
      url: "https://alphasights.com",
    },
    {
      company: "Listora",
      role: "Front-end developer",
      date: "2013 - 2014",
    },
    {
      company: "Responsa",
      role: "Co-founder and lead developer",
      date: "2012 - 2013",
      url: "https://responsa.ai",
    },
    {
      company: "H-umus",
      role: "Junior iOS developer",
      date: "2011 - 2012",
    },
    {
      company: "Glipper",
      role: "Open source contributor",
      date: "2006 - 2008",
      url: "https://github.com/eugeniodepalo/glipper-lite",
    },
  ],
}

export type Data = typeof data
