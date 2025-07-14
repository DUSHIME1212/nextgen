"use client";

import PixelCard from "@/components/cards/PixelCard";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/lib/utils";
import { GetTeam } from "@/sanity/queries";
import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import {
  Linkedin,
  Github,
  Dribbble,
  Twitter,
  Globe,
  Instagram,
} from "lucide-react";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiDribbbleLine,
  RiTwitterFill,
} from "react-icons/ri";
import SpotlightCard from "@/components/cards/SpotlightCard";
import { ZapIcon } from "lucide-react";

const Heroteam = () => {
  const [teams, setTeams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Map social platforms to Lucide icons
  const socialIcons: Record<
    string,
    React.ComponentType<{ className?: string }>
  > = {
    linkedin: RiLinkedinFill,
    github: RiGithubFill,
    dribbble: RiDribbbleLine,
    twitter: RiTwitterFill,
    portfolio: Globe,
    behance: Globe,
    other: Globe,
  };

  useEffect(() => {
    try {
      async function getData() {
        const res = await GetTeam();
        console.log(res);
        setTeams(res);
        setLoading(false);
      }
      getData();
    } catch (error) {
      setLoading(false);
    }
  }, []);

  return (
    <div className="py32 min-h-fit w-full p-8 py-16 text-white md:px-16 lg:px">
      <div className="my-8 w-full flex flex-col items-center space-y-2 text-center">
        <span className="inline-flex items-center gap-2 bg-gray-200 px-4 py-1.5 text-sm font-medium text-gray-500">
          <ZapIcon
            className="-ms-0.5 opacity-60"
            size={12}
            aria-hidden="true"
          />
          Our Team
        </span>
        <h1 className="w-2/3 text-black">We are the people who make up Nextgen</h1>
        <p className="w-2/3">
          Our philosophy is simple, Hire great people and give them the
          resources and support to do the best work
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {teams.map((team: any, index: number) => (
          <Suspense fallback={<SkeletonTeamCard />} key={index}>
            <SpotlightCard className="min-h-96 rounded-lg bg-blue-700 backdrop-blur-sm">
              <div className="relative h-96 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={team.profileImageUrl}
                  alt={team.name}
                  fill
                  className="z-50 object-cover"
                />
              </div>
              <div className="flex flex-col space-y-2 p-4">
                <h2 className="text-xl font-semibold">{team.name}</h2>
                <p className="text-blue-100">{team.role}</p>
                <div className="flex gap-2">
                  {team.socialLinks?.map((link: any, i: number) => {
                    const IconComponent = socialIcons[link.platform] || Globe;
                    return (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-colors hover:text-blue-200"
                        aria-label={`${team.name}'s ${link.platform}`}
                      >
                        <IconComponent className="h-5 w-5 hover:text-yellow-500 duration-500" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </SpotlightCard>
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Heroteam;

export function SkeletonTeamCard() {
  return <Skeleton className="h-96 w-full" />;
}
