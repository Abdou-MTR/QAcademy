"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import hero from "@Images/Learning-amico.svg";

const Hero = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn || isLoggedIn !== "true") {
      toast.error(`You are not logged in. Please login first.`);
      router.push("/register");
    } else {
      router.push("/exam");
    }
  };

  return (
    <section className="flex flex-col mt-9">
      <h1 className="text-center font-black text-8xl text-primary">
        Welcome to <span className="text-secondary">QAcademy</span>
      </h1>
      <div className="flex flex-row justify-around mt-7">
        <div className="max-w-3xl mt-5 leading-10">
          <p>
            QAcademy is a user-friendly website tailored for third-year
            students, with the goal of simplifying the examination process. This
            interactive platform revolves around a Multiple-Choice
            Questionnaire, offering students a seamless experience to explore
            various features:
          </p>
          <ul className="list-disc pl-6 mt-2 ">
            <li>
              <span className="font-bold">Answer Diverse Questions:</span>{" "}
              Engage with a wide range of questions designed to assess your
              understanding and knowledge base.
            </li>
            <li>
              <span className="font-bold">View Scores and Corrections:</span>{" "}
              Gain real-time insights into your performance, allowing you to
              identify strengths and areas for improvement. Access detailed
              corrections to enhance your comprehension.
            </li>
            <li>
              <span className="font-bold">Schedule Consultations:</span> Foster
              personalized learning by scheduling consultations with our
              experienced instructors. We prioritize your academic growth and
              offer one-on-one guidance to support your journey.
            </li>
          </ul>
          <Button
            onClick={handleSubmit}
            color="secondary"
            className="text-gray-100 ms-2 my-4 items-center font-bold px-6 py-6 rounded-full"
            variant="shadow"
          >
            Take an Exam <IconArrowRight />
          </Button>
        </div>
        <Image src={hero} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
