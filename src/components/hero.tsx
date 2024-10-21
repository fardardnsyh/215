import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import styles from '../app/main.module.css';

const Hero = () => {
  return (
    <div>
      <header className="container px-4">
        <div className="flex py-8 text-center items-center justify-between md:text-left md:py-24">
          <div className="md:w-3/5">
            <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-5xl">
              Hi, I’m Dwi Kurnia Surya.
            </h1>
            <h1 className="underline-heading-h1 text-3xl lg:text-5xl">
              a Fullstack Developer
            </h1>

            <p className="leading-7">
              I am a college student and also work as a full stack developer. As
              a developer, I am highly detail-oriented, always looking for ways
              to improve my code, and always striving to optimize my workflow.
            </p>

            <div className="flex justify-center md:justify-start gap-2 mt-6">
              <Button>Resume</Button>
              <Button variant="outline">Get in touch</Button>
            </div>
          </div>
          <div className="hidden md:w-2/5 md:block">
            <Image
              className="ms-[30%] object-none rounded-full border-4 border-yellow-200 w-50 h-50"
              src="/profile.png"
              alt="projectName"
              width={250}
              height={250}
              priority={true}
            ></Image>
          </div>
        </div>

        <div className={styles.mouse}></div>
      </header>
    </div>
  );
};

export default Hero;
