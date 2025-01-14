import { Button } from "@/components/ui/button";
import { Animatepara } from "@/lib/Animation";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-20" />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="grid min-h-screen grid-cols-2">
          <div className="flex flex-col justify-center gap-4 md:px-32">
            <h2 className="text-blue-700">We are the bridge between the company and the customers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              laudantium maiores quos numquam dolorem, corrupti velit odit saepe
              asperiores at rem iusto minus delectus? Autem magnam cumque
              nesciunt fuga accusantium? Corporis consequatur maiores, aliquid
              quod numquam, error molestiae laboriosam mollitia fugiat quidem
              quo reiciendis recusandae quia alias ipsum? Deserunt modi minus
              aspernatur architecto qui vel eum possimus cum quae numquam?
            </p>
          </div>
          <div className="relative">
            <Image
              src={
                "https://pbs.twimg.com/media/Ggm5KSbW0AAHASx?format=jpg&name=large"
              }
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="min-h-fit w-full p-8 md:px-16">
          <hr className="my-12 border border-black/20" />
          <div className="grid grid-cols-1 px-16 md:grid-cols-2">
            <h1 className="text-blue-700">Together we are strong</h1>
            <div className="flex flex-col gap-4">
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
        <div className="min-h-fit w-full p-8 md:px-16">
          <div className="grid grid-cols-1 px-16 md:grid-cols-2">
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
        <div className="min-h-fit w-full p-8 md:px-16">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/*Team members cards */}
            <div className="flex min-h-96 flex-col gap-4">
              <div className="relative min-h-96 w-full">
                <Image
                  src={
                    "https://media.licdn.com/dms/image/v2/D4E03AQG6ahyWtnP_GA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693212032366?e=1742428800&v=beta&t=1npkZBZPkYf1bvOjbyDvVqlqt0_MK8XjFGBChpQQa2M"
                  }
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
              <h3>Igor IHIMBAZWE</h3>
              <p>CEO & Full-stack developer</p>
            </div>
            <div className="flex min-h-96 flex-col gap-4">
              <div className="relative min-h-96 w-full">
                <Image
                  src={
                    "https://media.licdn.com/dms/image/v2/D4D03AQG_xHTiI0XdOg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730247106450?e=1742428800&v=beta&t=5XolKB7PI3e0R25rxvYwcjKa-I4l_UHA-BWy9cc3q1w"
                  }
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
              <h3>DUSHIME Don Aime</h3>
              <p>CEO & Full-stack developer</p>
            </div>
          </div>
          <hr className="my-8 border-2 border-black/20" />
          <div>
            <div className="grid grid-cols-1 px-16 md:grid-cols-2">
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
      </div>
    </>
  );
};

export default page;
