"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { featuredProjects } from "@/lib/Project";
import { fetchWorks, WorkDocument } from "@/sanity/queries";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useRef } from "react";

const HeroProjects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = React.useState<WorkDocument[]>([]);

  useEffect(() => {
    async function ggetprojects() {
      const projects = await fetchWorks();
      console.log(projects);

      setProjects(projects);
    }
    ggetprojects();
  });
  return (
    <section className="bg-light-gray min-h-screen p-8 py-24 md:px-16">
      <div className="">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <div className="/10 -full inline-block bg-blue-200 px-4 py-1.5 text-sm text-blue-500">
              Featured Work
            </div>
            <h2 className="section-title lg:w-2/3">Our latest projects</h2>
            <p className="section-subtitle">
              Explore our portfolio of innovative designs and creative solutions
              delivered for clients across various industries.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="/projects"
              className="/80 inline-flex items-center font-medium text-blue-500 transition-colors hover:text-blue-500"
            >
              View all projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 size-full gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => (
              <div key={index} className="relative h-[90vh]">
                <div className="absolute z-10 size-full bg-gradient-to-b from-40% from-transparent to-white"/>
                <div className="flex flex-col z-10 bottom-0 p-8 space-y-2 absolute w-full justify-between">
                  <h5>{project.title}</h5>
                  <p className="line-clamp-3">{project.description}</p>
                  <Button asChild variant={"gooeyLeft"} className="w-fit bg-blue-700">
                    <Link href={"projects" + project?.slug}>Case study</Link>
                  </Button>
                </div>
                <Image
                  fill
                  src={project.heroImage}
                  className=" object-cover top-0"
                  alt=""
                />
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
