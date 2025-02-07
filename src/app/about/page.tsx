"use client";

import { Button } from "@/components/ui/button";
import { Animatepara } from "@/lib/Animation";
import { api } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AnimationScreen from "@/app/_components/AnimationScreen";
import { setupCache } from 'axios-cache-interceptor';



const page = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    try {
      async function getData() {
        const res = await api.get("/api/teams?populate=*");
        setTeams(res.data.data);
      }
      getData();
    } catch (error) {}
  }, []);
  console.log(teams);

  if(!teams){
  return <AnimationScreen />
}  
  return (
    <>
      <div className="min-h-20" />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4 px-8 md:px-32">
            <h2 className="text-blue-700">We are the bridge between the company and the customers</h2>
            <Animatepara>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              laudantium maiores quos numquam dolorem, corrupti velit odit saepe
              asperiores at rem iusto minus delectus? Autem magnam cumque
              nesciunt fuga accusantium? Corporis consequatur maiores, aliquid
              quod numquam, error molestiae laboriosam mollitia fugiat quidem
              quo reiciendis recusandae quia alias ipsum? Deserunt modi minus
              aspernatur architecto qui vel eum possimus cum quae numquam?
            </Animatepara>
          </div>
          <div className="relative max-md:mt-8 max-md:min-h-72">
            <Image
              src={
                "https://pbs.twimg.com/media/Ggm5KSbW0AAHASx?format=jpg&name=large"
              }
              alt=""
              fill
              className="object-cover "
            />
          </div>
        </div>
        <div className="min-h-fit w-full p-8 md:px-16">
          <hr className="my-12 border border-black/20" />
          <div className="grid grid-cols-1  md:px-16 md:grid-cols-2">
            <h1 className="text-blue-700 md:w-2/3">Together we are strong</h1>
            <div className="flex flex-col gap-4 ">
              <h6>
                Our crew is always getting bigger, but we all work toward one
                goal: to make sales success not only possible but inevitable for
                teams everywhere.
              </h6>
              <p>
                In 2022. at vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi Sint occaecati
                cupiditate non provident. similique sunt in culpa qui officia
                deserunt mollitia animi, id est laborum et dolorum fuga. Et
                harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere possimus. omnis
                voluptas assumenda est. omnis dolor repellendus. Temporibus
                autem quibusdam et aut officiis debitis aut rerum necessitatbus
                saepe eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus.
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-fit w-full p-8  md:px-16">
          <div className="grid grid-cols-1 md:px-16 md:grid-cols-2">
            <div className="flex h-fit items-center gap-4">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQG6ahyWtnP_GA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1693212032366?e=1742428800&v=beta&t=fHKlZFufBhca6aHrZWulDRjeN-FcMqiUOeuwj99NFXw"
                className="size-16 rounded-full"
                alt=""
              />
              <div>
                <h6>Ihimbazwe Igor</h6>
                <p>Co-founder</p>
              </div>
            </div>
            <h2 className="flex flex-col gap-4 opacity-80">
              &quot;Our goal is to build software that gives customer-facing
              teams at SMBs the ability to create fruitful and enduring
              relationships with customers.&quot;
            </h2>
          </div>
        </div>
        <div className="min-h-fit w-full p-8 bg-gradient-to-tr from-blue-500 to-blue-700 py-16 text-white py32 md:px-16">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/*Team members cards */}
            {
              teams.map((team: any) => (
                <div className="min-h-96">
                  <div className="relative h-96 w-full">
                    <Image
                      src={team.profile.url}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col border-none gap-4 p-4">
                    <h2>{team.name}</h2>
                    <p>{team.position}</p>
                  </div>
                </div>
              ))
            }
          </div>
          
        </div>
        <hr className="my-8 border-2 border-black/20" />
          <div>
            <div className="grid grid-cols-1 md:px-16 py-32 md:grid-cols-2">
              <h1 className="text-blue-700">Join our team</h1>
              <div className="flex flex-col gap-4">
                <h6>
                  We believe it takes great people to make a great product.
                  Thats why we hire not only the perfect professional fits. but
                  people Who embody our company values.
                </h6>
                <Button className="w-fit gap-4 bg-blue-700 hover:bg-blue-800" variant={"ringHover"}>
                  See open positions
                  {/* <ArrowRight className="text-white" /> */}
                </Button>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default page;
