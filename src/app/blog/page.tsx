import { api } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Blog {
  title: string;
  documentId: string;
  slug: string;
  shortdescription:string,
  banner: {
    url: string;
    formats:{medium: {
      url: string;
    };}
  };
}

const Page = async () => {
  const { data }: { data: { data: Blog[] } } = await api.get("/api/blogs?populate=*");

  return (
    <>
      <div className="min-h-20" />
      <div className="min-h-screen px-8 md:px-16">
        <div>
          <div className="mb-16">
            <h1 className="">Blogs</h1>
            <h5 className="my-4 opacity-80 font-normal md:w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              accusamus beatae eveniet earum distinctio, perspiciatis dicta quos
              explicabo doloribus facere consectetur, voluptatibus, modi nostrum
              nobis maxime. Tenetur ea itaque tempora?
            </h5>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 py-8">
            {data.data.map((blog: Blog) => (
              <Link href={"blog/"+blog.slug} key={Math.random()}>
                <div className="min-h-96 relative w-full">
                    <Image src={blog.banner.url} alt="" fill className="object-cover rounded-xl"/>
                </div>
                <div className="mt-8">
                <h5>{blog.title}</h5>
                <p className="line-clamp-2">{blog.shortdescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
