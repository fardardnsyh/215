import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/hero";
import TechStack from "@/components/tech-stack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'dwks.dev',
  description: 'Dwi Kurnia Surya`s Personal Site',
}

export default function Portfolio() {
  return (
    <div>
      <Hero />
      <TechStack />

      <section className="container px-4">
        <div className="experiences mt-12">
          <h2 className="underline-heading text-3xl">Work Experiences</h2>
          <p className="leading-7 text-sm font-light tracking-light">
            These are some of my experiences that have influenced my personal
            growth and development.
          </p>

          <ol className="my-6 ml-6 list-disc relative">
            {experiences.map((experience) => (
              <li
                key={experience.id}
                className='relative grid grid-cols-1 gap-8 pl-10 before:absolute before:left-0 before:absolute before:left-0 before:flex before:h-[calc(1.375rem+1px)] before:w-[calc(1.375rem+1px)] before:items-center before:justify-center before:text-[0.625rem] before:font-bold before:bg-slate-100 before:text-slate-700 before:ring-1 before:ring-slate-200 before:content-[""]
              after:absolute after:bottom-0 after:left-[0.6875rem] after:top-6 after:w-px after:bg-slate-200 before:rounded-full'
              >
                <div className="experience">
                  <h2 className="scroll-m-20 pb-2 md:text-2xl font-semibold tracking-tight">
                    {experience.name}
                  </h2>
                  <span className="scroll-m-20 text-sm md:text-md font-light tracking-tight mt-6">
                    {experience.joinDate}
                  </span>
                  <p className="pb-4 leading-7 text-sm md:text-1xl md:mt-3">
                    {experience.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="projects my-12">
          <h2 className="underline-heading text-3xl">Projects Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {projects.map((project) => (
              <div className="project" key={project.id}>
                <div className="bg-red-300 p-8 rounded">
                  <Image
                    className="rounded mx-auto object-cover object-top w-100  transition duration-300 ease-in-out hover:scale-105 duration-300"
                    src={project.image}
                    alt="projectName"
                    width={800}
                    height={100}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  ></Image>
                </div>
                <h3 className="scroll-m-20 pb-2 font-semibold tracking-tight pt-2">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-700 leadeing-7 line-clamp-2 pb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">Livewire</Badge>
                  <Badge variant="outline">Tailwind</Badge>
                  <Badge variant="outline">JQuery</Badge>
                  <Badge variant="outline">AlphineJs</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const experiences = [
  {
    id: 0,
    name: "Chief Technology Officer at PT. Digital Teknologi Kreasi",
    joinDate: "Onsite, Full Time, April 2024 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    name: "Fullstack Developer at PT. Informatika Media Pratama",
    joinDate: "Onsite, Full Time, April 2021 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "Fullstack Developer at Alfaris Solution",
    joinDate: "Remote, Freelance, April 2021 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    name: "Internship at CV. Syntax Corporation Indonesia",
    joinDate: "Onsite, Intern, April 2021 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const projects = [
  {
    id: 1,
    name: "Telkom Digireview",
    image: "/telkom_digireview.png",
    description:
      "Document generator and approval application, allow you to generate dynamic document variables.",
  },
  {
    id: 2,
    name: "Beasiswa Indonesia Bangkit",
    image: "/telkom_digireview.png",
    description:
      "Schoolarship KEMENAG (Ministry of Religious Affairs) x LPDP Collaboration",
  },
  {
    id: 3,
    name: "E-Approval",
    image: "/eapproval.png",
    description:
      "Document approval application, allow you to bulk sign, and e-materai with peruri certificate.",
  },
];
