"use client";

const experiences = [
  {
    id: 1,
    name: "Fullstack Developer at PT. Informatika Media Pratama",
    joinDate: "Onsite, Full Time, April 2021 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
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

export default function WorkExperiences() {
  return (
    <div>
      <section className="container px-4">
        <div className="experiences mt-12">
          <h2 className="underline-heading text-3xl">Work Experiences</h2>

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
      </section>
    </div>
  );
}
