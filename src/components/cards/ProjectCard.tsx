"use client"
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { ParallaxAnimation } from "../animations";
import Link from "next/link";
import { Button } from "../ui/button";

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

const ProjectCard = ({ id, title, category, description, image, index }: ProjectCardProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="group relative flex flex-col rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[16/9] overflow-hidden">
        <ParallaxAnimation speed={0.3}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </ParallaxAnimation>
      </div>
      <div ref={contentRef} className="p-6 flex-1 flex flex-col">
        <div className="mb-4">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            {category}
          </span>
          <h3 className="text-xl font-display font-medium mt-1">{title}</h3>
        </div>
        <p className="text-muted-foreground text-sm mb-6 flex-1">{description}</p>
        <Button asChild>
        <Link
          href={`/projects/${id}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-blue-500 transition-colors"
        >
          View Project <ArrowUpRight size={16} className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
