"use client";
import React from "react";
import Image from "next/image";
import Register from "@Images/Sign.svg";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

import { Button, Input } from "@nextui-org/react";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
const RegisterPage = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Registration Done!", { duration: 2000 });
    localStorage.setItem("isLoggedIn", "true");
    router.push("/exam");
  };
  return (
    <section className="my-10 flex flex-row rounded-md">
      <div className="flex flex-col rounded-l-3xl w-1/2 bg-white">
        {" "}
        <h1 className="text-primary mt-14  text-3xl text-center font-bold">
          Register Here
        </h1>
        <form onSubmit={handleSubmit} className="mt-10 w-[461px]">
          <Input
            isRequired
            type="text"
            className="ms-32 mb-8 bg-[#D9D9D9]/40 rounded-2xl"
            label="First Name"
          />
          <Input
            isRequired
            type="text"
            className="ms-32 mb-8 bg-[#D9D9D9]/40 rounded-2xl"
            label="Last Name"
          />
          <Input
            isRequired
            type="email"
            className="ms-32 mb-8 bg-[#D9D9D9]/40 rounded-2xl"
            label="Email"
          />
          <Input
            isRequired
            type="number"
            className="ms-32 mb-8 bg-[#D9D9D9]/40 rounded-2xl"
            label="Groupe Number"
          />
          <Input
            isRequired
            type="number"
            className="ms-32 mb-8 bg-[#D9D9D9]/40 rounded-2xl"
            label="Inscription number"
          />
          <Input
            isRequired
            type="password"
            className="ms-32 mb-8 bg-[#D9D9D9]/40 rounded-2xl"
            label="Password"
          />
          <div className="flex ms-60  justify-center">
            {" "}
            <Button
              type="submit"
              color="primary"
              className="text-gray-100 tracking-widest ms-2 my-4 items-center font-bold px-8 py-6 rounded-full"
              variant="shadow"
            >
              Register
            </Button>
            <Toaster />
          </div>
        </form>
      </div>
      <div className="bg-[#2B2D42] rounded-r-3xl w-1/2 pb-8	flex flex-col">
        <Image src={Register} alt="register" className="mt-6 ms-20" />
        <h1 className="text-gray-100 text-7xl text-center font-bold ">
          Hello Student{" "}
        </h1>
        <p className="mt-4 text-gray-400  text-lg font-normal text-center">
          welcome to QAcademy if You don’t have an account yet ,<br /> join us
          and start your learning journey{" "}
        </p>
        <div className="justify-center flex">
          <Button
            type="submit"
            color="secondary"
            className="text-gray-100 tracking-widest ms-2 my-4 items-center font-bold ps-6 pe-8 py-6 rounded-full"
            variant="shadow"
          >
            <IconArrowNarrowLeft className="w-8" />
            Register
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
