"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    name: "Telkom Digireview",
    image: "/telkom_digireview.png",
    description:
      "Document generator and approval application, allow you to generate dynamic document variables.",
  },
  {
    id: 1,
    name: "Beasiswa Indonesia Bangkit",
    image: "/telkom_digireview.png",
    description:
      "Schoolarship KEMENAG (Ministry of Religious Affairs) x LPDP Collaboration",
  },
  {
    id: 1,
    name: "E-Approval",
    image: "/eapproval.png",
    description:
      "Document approval application, allow you to bulk sign, and e-materai with peruri certificate.",
  },
  {
    id: 1,
    name: "Laundry Management System",
    image: "/telkom_digireview.png",
    description: "Manage your inventory, and laundry's sales",
  },
  {
    id: 1,
    name: "STAISPA SIAKAD",
    image: "/telkom_digireview.png",
    description: "University academy system, with PDDIKTIK integration",
  },
  {
    id: 1,
    name: "Pusaka Superapp",
    image: "/telkom_digireview.png",
    description: "KEMENAG (Ministry of Religious Affairs) Superapps.",
  },
];

export default function Project() {
  return (
    <div>
      <section className="container px-4">
        <div className="projects my-12">
          <h2 className="underline-heading text-3xl">Projects Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {projects.map((project) => (
              <div className="project" key={project.id}>
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
