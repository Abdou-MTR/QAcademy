"use client";
import React, { useState, useEffect } from "react";
import { CheckboxGroup, Checkbox, Button } from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

import Link from "next/link";

const Page = () => {
  const router = useRouter();

  const [isdisable, setIsDisable] = React.useState(false);
  const [istestsubmited, setIstestsubmited] = React.useState(false);
  const [totalMark, setTotalMark] = useState(0);
  const [selectedChoice1, setSelectedChoice1] = useState("");
  const [selectedChoice2, setSelectedChoice2] = useState("");
  const [selectedChoicesCheckbox, setSelectedChoicesCheckbox] = useState([]);

  const choices = [
    { name: "A) Celsius", note: 1 },
    { name: "B) Fahrenheit", note: 0 },
    { name: "C) Kelvin", note: 0 },
    { name: "D) Rankine", note: 0 },
  ];

  const CheckBoxChoices = [
    { name: "A) Celsius", note: 1, value: false },
    { name: "B) Exclusive discounts and promotions", note: 0, value: true },
    { name: "C) Order shipment updates", note: 0, value: true },
    { name: "D) Product reviews and ratings", note: 0, value: true },
    { name: "E) General marketing emails", note: 0, value: true },
    { name: "F) Event invitations", note: 1, value: false },
  ];

  const RadioChoices2 = [
    { name: "A) To ensure the application is visually appealing", note: 0 },
    {
      name: "B) To identify and fix usability issues with real users",
      note: 1,
    },
    {
      name: "C)  To increase the number of features in the application",
      note: 0,
    },
    { name: "D) To validate the application's codebase", note: 0 },
  ];

  const CheckboxChoices2 = [
    { name: "A) Proximity", note: 0, value: true },
    { name: "B) Similarity", note: 1, value: false },
    { name: "C) Encapsulation", note: 0, value: true },
    { name: "D) Closure", note: 1, value: false },
    { name: "E) Symmetry", note: 0, value: true },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisable(true);
    setIstestsubmited(true);
    toast.success(`Exam submitted successfully! Total Mark: ${totalMark}/7`);
  };

  const handleChoiceChange = (value, setFunction) => {
    if (!istestsubmited) {
      setFunction(value);
      setTotalMark(
        (prevMark) =>
          prevMark + choices.find((choice) => choice.name === value)?.note || 0
      );
    }
  };

  const handleCheckboxChange = (value) => {
    const updatedChoices = [...selectedChoicesCheckbox];
    const selectedChoice = updatedChoices.find(
      (choice) => choice.name === value
    );
    selectedChoice.value = !selectedChoice.value;
    setSelectedChoicesCheckbox(updatedChoices);
    setTotalMark((prevMark) => prevMark + selectedChoice.note);
  };
  const [userLogged, setUserLogged] = React.useState(false);
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn || isLoggedIn === "false") {
      toast.error(`You are not logged in. Please login first.`);
      router.push("/register");
    } else {
      setUserLogged(true);
    }
  }, []);

  if (!userLogged) return null;

  return (
    <section className="flex flex-col mt-7">
      <h1 className="text-primary text-center font-black ms-10 text-8xl">
        IHM Exam
      </h1>
      <div className="flex flex-row justify-between">
        <p className="text-primary ms-4 mt-4 font-bold text-2xl">
          Exo: choose the right answer(s)
        </p>
        {istestsubmited && (
          <p className="text-primary me-6 text-center font-black ms-10 text-xl">
            Total Mark: {totalMark} /7
          </p>
        )}
      </div>
      <p className="ms-8 text-[#4C4C4C] mt-8 text-md font-semibold w-5/6">
        <span className="font-black text-primary">Q1. </span>
        You are designing a weather application for a mobile device. Users need
        to select their preferred temperature unit. Which option would you
        recommend for the radio button selection?
      </p>
      <div className="ms-8 mt-4">
        {choices.map((choice, index) => (
          <div key={index} className="mb-4 ms-4">
            <input
              type="radio"
              id={`choice_${index}_1`}
              name="choices1"
              value={choice.name}
              checked={selectedChoice1 === choice.name}
              onChange={() =>
                handleChoiceChange(choice.name, setSelectedChoice1)
              }
            />
            <label
              htmlFor={`choice_${index}_1`}
              className={`${
                istestsubmited && choice.note === 0 ? "text-rose-600" : ""
              } ${
                istestsubmited && choice.note === 0 ? "" : " text-gray-600"
              } ms-5`}
            >
              {choice.name}
            </label>
          </div>
        ))}
      </div>

      <p className="ms-8 text-[#4C4C4C] mt-4 text-md font-semibold w-5/6">
        <span className="font-black text-primary">Q2. </span>
        In the context of an online shopping platform, users are customizing
        their notification preferences. Select the appropriate options for which
        users can receive notifications.
      </p>
      <CheckboxGroup
        isDisabled={isdisable}
        className="ms-8 mt-4"
        color="secondary"
      >
        {CheckBoxChoices.map((choice, index) => (
          <Checkbox
            key={index}
            color="danger"
            isInvalid={istestsubmited && choice.value}
            className="mb-4 ms-2"
            checked={choice.value}
            onValueChange={() =>
              setTotalMark((prevMark) => prevMark + choice.note)
            }
            value={choice.name}
          >
            {choice.name}
          </Checkbox>
        ))}
      </CheckboxGroup>

      <p className="ms-8 text-[#4C4C4C] mt-4 text-md font-semibold w-5/6">
        <span className="font-black text-primary">Q3. </span>
        Radio Question 2: Choose the correct option.You are designing a user
        interface for a new mobile application. What is the primary goal of
        usability testing in the context of HCI?
      </p>
      <div className="ms-8 mt-4">
        {RadioChoices2.map((choice, index) => (
          <div key={index} className="mb-4 ms-4">
            <input
              type="radio"
              id={`choice_${index}_2`}
              name="choices2"
              value={choice.name}
              checked={selectedChoice2 === choice.name}
              onChange={() =>
                handleChoiceChange(choice.name, setSelectedChoice2)
              }
            />
            <label
              htmlFor={`choice_${index}_2`}
              className={`${
                istestsubmited && choice.note === 0 ? "text-rose-600" : ""
              } ${
                istestsubmited && choice.note === 0 ? "" : " text-gray-600"
              } ms-5`}
            >
              {choice.name}
            </label>
          </div>
        ))}
      </div>

      <p className="ms-8 text-[#4C4C4C] mt-4 text-md font-semibold w-5/6">
        <span className="font-black text-primary">Q4. </span>
        In the context of user interface design, select the elements that are
        considered principles of Gestalt psychology.
      </p>
      <CheckboxGroup
        isDisabled={isdisable}
        className="ms-8 mt-4"
        color="secondary"
      >
        {CheckboxChoices2.map((choice, index) => (
          <Checkbox
            key={index}
            color="danger"
            isInvalid={istestsubmited && choice.value}
            className="mb-4 ms-2"
            checked={choice.value}
            onValueChange={() => handleCheckboxChange(choice.name)}
            value={choice.name}
          >
            {choice.name}
          </Checkbox>
        ))}
      </CheckboxGroup>

      <div className="flex flex-row ">
        <Button
          type="submit"
          onClick={handleSubmit}
          color="secondary"
          className="text-gray-100 ms-8 my-4 items-center font-bold px-6 py-6 rounded-full"
          variant="shadow"
        >
          Submit the Exam
        </Button>
        {istestsubmited && (
          <Link href="meeting">
            <Button
              type="submit"
              href="meeting"
              color="secondary"
              className="text-gray-800 hover:text-gray-100 ms-2 my-4 items-center font-bold px-6 py-6 rounded-full"
              variant="ghost"
            >
              Schedule a meeting
            </Button>
          </Link>
        )}
        <Toaster />
      </div>
    </section>
  );
};

export default Page;
