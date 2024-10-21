import React from "react";
import {
  SiFigma,
  SiJira,
  SiLaravel,
  SiLivewire,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiRedmine,
  SiTailwindcss,
  SiWordpress,
  SiNestjs,
} from "react-icons/si";

const TechStack = () => {
  return (
    <section className="container mx-auto px-4 my-14">
      <h2 className="underline-heading text-3xl mx-auto">Tools & Tech Stack</h2>
      <p className="leading-7 text-center text-sm font-light tracking-light">
        Working smartly and faster with tools, most of the projects use Laravel.
      </p>
      <div className="flex justify-center mt-10 gap-6 items-center flex-wrap text-5xl">
        <SiLaravel className="hover:text-orange-400" />
        <SiNestjs className="hover:text-red-800" />
        <SiTailwindcss className="hover:text-green-300" />
        <SiLivewire className="hover:text-red-300" />
        <SiMysql className="hover:text-blue-500" />
        <SiPostgresql className="hover:text-blue-400" />
        <SiFigma className="hover:text-red-400" />
        <SiJira className="hover:text-blue-400" />
        <SiRedmine className="hover:text-red-600" />
        <SiWordpress className="hover:text-slate-300" />
        <SiNextdotjs className="hover:text-slate-800" />
      </div>
    </section>
  );
};

export default TechStack;
