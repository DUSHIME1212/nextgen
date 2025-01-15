
import { api } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Markdown from 'react-markdown'

interface Params {
  slug: string;
}

interface Blog{
  title: string;
  slug: string;
  content: string;
  banner:{
    url: string;

  }
  shortdescription:string;
  dateposted:string,
  author:string,
  email:string,

}



const page = async ({ params }: { params: Params }) => {
  // eslint-disable-next-line @typescript-eslint/await-thenable
  const { slug } = await params;

  const { data }: { data: { data: Blog[] } } = await api.get(`/api/blogs?filters[slug][$eq]=${slug}&populate=*`)

  
  const res = data.data[0]!;
  
  console.log(res);
  
  return (
    <section className="min-h-screen">
      <div className="min-h-20" />
      <div className="min-h-56 lg:min-h-screen flex items-center justify-center relative">

        <h1 className="z-20 w-2/3 text-center  text-white">{res.title}</h1>
        <div className="size-full absolute bg-gradient-to-br z-10 left-0 from-transparent bg-fixed bg-cover to-black"/>

        <div className="size-full absolute bg-gradient-to-br -z-0 left-0 from-blue-700/20 bg-fixed bg-cover to-gray-900" style={{backgroundImage: `url(${res.banner.url})`}}/>
        
      </div>
      <div className="min-h-screen">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <h5 className="px-8 md:px-16 py-16">
            {res.shortdescription}
          </h5>
          <div className="px-8 md:px-16 py-16 flex flex-col gap-4 ">
            <p className="w-fit capitalize">date: {(res.dateposted).replace("-"," ")}</p>
            <h4 className="w-full md:w-2/3">{res.title}</h4>
            <h5 className="opacity-80">Author: {res.author}</h5>
            <Link href={`mailto:${res.email}`} className="text-lg">{res.email}</Link>

          </div>
        </div>
        <div className="px-8 md:px-32 my-16 md:my-32 lg:px-96">
          <Markdown>{res.content}</Markdown>
        </div>

      </div>
    </section>
  );
};

export default page;
