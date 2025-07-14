"use client";
import { Button } from "@/components/ui/button";
import { fetchWorkBySlug, WorkDocument } from "@/sanity/queries";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const { projectid } = useParams();
  type Project = {
    heroImage: string;
  };

  const [project, setProject] = React.useState<WorkDocument | null>(null);

  useEffect(() => {
    async function ggetprojects() {
      if (typeof projectid === "string") {
        const project = await fetchWorkBySlug(projectid);
        console.log(project);

        setProject(project);
      } else {
        console.warn("Invalid projectid:", projectid);
      }
    }
    ggetprojects();
  }, [projectid]);
  console.log("Project ID:", projectid);
  console.log("Projects:", project);

  return (
    <div className="min-h-screen">
      <div className="h-16" />
      <div className="relative h-fit min-h-screen flex flex-col justify-between w-full">
        <div className="space-y-4 px-8 py-16 lg:mt-72 text-white md:px-16 lg:px-32">
          <h1>{project?.title}</h1>
          <p>{project?.description}</p>
          <div className="flex items-center justify-between gap-4">
            <p></p>
            {project?.url ? (
              <Button
                asChild
                variant={"gooeyLeft"}
                className="w-fit bg-blue-700"
              >
                <Link href={project.url}>Visit Website</Link>
              </Button>
            ) : null}
          </div>
          {/* client */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">Client</h3>
              <p>{project?.clientInformation?.name}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Services</h3>
              <div>
                {project?.services &&
                  project.services.map((item, id) => (
                    <div key={id}>
                      <span className="text-sm text-gray-400">{item}</span>
                    </div>
                  ))}
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="absolute inset-0 -z-[5] bg-gradient-to-b from-transparent from-30%  to-black/80" />
        {project?.heroImage ? (
          <Image
            src={project.heroImage}
            alt=""
            fill
            className="-z-10 object-cover"
          />
        ) : null}
      </div>
    </div>
  );
};

export default page;
