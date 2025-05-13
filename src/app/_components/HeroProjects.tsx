import ProjectCard from "@/components/cards/ProjectCard";
import { featuredProjects } from "@/lib/Project";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

const HeroProjects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  return (
    <section className="bg-light-gray py-24">
      <div className="">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <div className="/10 inline-block rounded-full bg-blue-200 px-4 py-1.5 text-sm font-medium text-blue-500">
              Featured Work
            </div>
            <h2 className="section-title">Our latest projects</h2>
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
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
