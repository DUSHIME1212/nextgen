"use client";

import AnimationScreen from "@/app/_components/AnimationScreen";
import { api } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

interface Params {
  slug: string;
}

interface Blog {
  title: string;
  slug: string;
  content: string;
  banner: {
    url: string;
  };
  shortdescription: string;
  dateposted: string;
  author: string;
  email: string;
}

const page = ({ params }: { params: any }) => {
  const { slug } = useParams();

  const [blogData, setBlogData] = useState<Blog>();

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const { data }: { data: { data: Blog[] } } = await api.get(
          `/api/blogs?filters[slug][$eq]=${slug}&populate=*`
        );
        setBlogData(data.data[0]);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [])



  if (!blogData) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <AnimationScreen />
      </section>
    );
  }




  return (
    <section className="min-h-screen">
      <div className="min-h-20" />
      <div className="min-h-56 lg:min-h-screen flex items-center justify-center relative">
        <h1 className="z-20 w-2/3 text-center text-white">{blogData.title}</h1>
        <div className="size-full absolute bg-gradient-to-br z-10 left-0 from-transparent bg-fixed bg-cover to-black" />


        <div
          className="size-full absolute bg-gradient-to-br -z-0 left-0 from-blue-700/20 bg-fixed bg-cover to-gray-900"
          style={{ backgroundImage: `url(${blogData.banner.url})` }}
        />
      </div>
      <div className="min-h-screen">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <h5 className="px-8 md:px-16 py-16">{blogData.shortdescription}</h5>
          <div className="px-8 md:px-16 py-16 flex flex-col gap-4">
            <p className="w-fit capitalize">
              date: {blogData.dateposted.replace("-", " ")}
            </p>
            <h4 className="w-full md:w-2/3">{blogData.title}</h4>
            <h5 className="opacity-80 capitalize">{blogData.author}</h5>
            <Link href={`mailto:${blogData.email}`} className="text-lg">
              {blogData.email}
            </Link>
          </div>
        </div>
        <div className="px-8 md:px-32 my-16 md:my-32 ">
          <Markdown className={"prose prose-slate prose-img:w-full prose-img:object-cover prose-img:h-[400px]  lg:prose-2xl"}>{blogData.content}</Markdown>
        </div>
      </div>
    </section>
  );
};

export default page;
