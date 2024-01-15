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
    <section className="flex flex-col mt-9 mb-6">
      <h1 className="text-center font-black text-[110px] text-primary">
        Welcome to <span className="text-secondary">QAcademy</span>
      </h1>
      <div className="flex flex-row justify-around ">
        <div className="max-w-[820px] ms-24 mt-5 leading-10 ">
          <p className=" font-medium text-default/[.78]">
            QAcademy is a user-friendly website designed for third-year
            students, aiming to streamline the examination process. This
            interactive platform features a Multiple-Choice Questionnaire . At
            QAcademy, students can seamlessly navigate through the following
            features:
          </p>
          <ul className="list-disc ms-2 pl-6 mt-2 ">
            <li className=" font-medium text-default/[.90] mt-2 ">
              <span className="font-extrabold text-primary/100 me-3">
                Answer Diverse Questions:
              </span>{" "}
              Engage with a wide range of questions designed to assess your
              understanding and knowledge base.
            </li>
            <li className=" font-medium text-default/[.90] mt-2 ">
              <span className="font-extrabold text-primary/100 me-3">
                View Scores and Corrections:
              </span>{" "}
              Gain real-time insights into your performance, allowing you to
              identify strengths and areas for improvement. Access detailed
              corrections to enhance your comprehension.
            </li>
            <li className=" font-medium text-default/[.90] mt-2 ">
              <span className="font-extrabold text-primary/100  me-3">
                Schedule Consultations:
              </span>
              Foster personalized learning by scheduling consultations with our
              experienced instructors. We prioritize your academic growth and
              offer one-on-one guidance to support your journey.
            </li>
          </ul>
        </div>
        <Image src={hero} alt="hero" className="me-4" />
      </div>
      <div className="ms-32">
        <Button
          onClick={handleSubmit}
          color="secondary"
          className="text-gray-100 text-md my-4 items-center font-bold px-7 py-7 rounded-full"
          variant="shadow"
        >
          Take an Exam <IconArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
