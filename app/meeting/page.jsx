"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Autocomplete,
  AutocompleteItem,
  Textarea,
  Button,
} from "@nextui-org/react";

import meeting from "@Images/Time management-cuate.svg";
import toast, { Toaster } from "react-hot-toast";

const Page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Meeting Scheduled successfully!", { duration: 2000 });
  };
  const teachers = [
    { name: "Dr Debach", id: "1" },
    { name: "Dr Rouabhia", id: "2" },
    { name: "Dr Boulemden", id: "3" },
    { name: "Dr Debah", id: "4" },
    { name: "Dr Ghazi", id: "5" },
  ];
  const Modules = [
    { name: "IHM", id: "1" },
    { name: "Economie numérique et veille stratégique", id: "2" },
    { name: "Programmation linéaire", id: "3" },
    { name: "Probabilités et statistiques", id: "4" },
    { name: "Génie Logiciel", id: "5" },
    { name: "Compilation", id: "6" },
    { name: "systéme d'expoilation 2", id: "7" },
  ];
  const days = Array.from({ length: 31 }, (_, index) => ({
    name: (index + 1).toString().padStart(2, "0"),
    id: (index + 1).toString(),
  }));
  const months = Array.from({ length: 12 }, (_, index) => ({
    name: (index + 1).toString().padStart(2, "0"),
    id: (index + 1).toString(),
  }));
  const years = [
    { name: "2023", id: "1" },
    { name: "2024", id: "2" },
    { name: "2025", id: "3" },
    { name: "2026", id: "4" },
  ];

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  return (
    <section className="flex flex-col mt-7">
      <h1 className="text-primary text-center font-black ms-10 text-8xl">
        Schedule a meeting
      </h1>
      <div className="flex flex-row justify-between">
        <div className="ms-32 flex flex-col mt-14">
          <form onSubmit={handleSubmit}>
            <Autocomplete
              isRequired
              size={"sm"}
              defaultItems={teachers}
              label="Select a teacher"
              className="bg-[#D9D9D9] w-80 rounded-2xl flex justify-between"
            >
              {(item) => (
                <AutocompleteItem
                  key={item.id}
                  className="text-primary hover:text-gray-200"
                >
                  {item.name}
                </AutocompleteItem>
              )}
            </Autocomplete>
            <Autocomplete
              isRequired
              size={"sm"}
              defaultItems={Modules}
              label="Select a Module"
              className="bg-[#D9D9D9] mt-10 w-80 rounded-2xl flex justify-between"
            >
              {(item) => (
                <AutocompleteItem
                  key={item.id}
                  className="text-primary  hover:text-gray-200"
                >
                  {item.name}
                </AutocompleteItem>
              )}
            </Autocomplete>
            <div className="flex flex-row">
              <Autocomplete
                isRequired
                size={"sm"}
                label="Day"
                value={selectedDay}
                onChange={(value) => setSelectedDay(value)}
                className="bg-[#D9D9D9] mt-10 w-28 rounded-2xl flex justify-between"
              >
                {days.map((day) => (
                  <AutocompleteItem
                    required
                    className="text-primary hover:text-gray-200"
                    key={day.id}
                    value={day}
                  >
                    {day.name}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
              <Autocomplete
                isRequired
                size={"sm"}
                label="Month"
                value={selectedMonth}
                onChange={(value) => setSelectedDay(value)}
                className="bg-[#D9D9D9] mt-10 ms-3 w-28 rounded-2xl flex justify-between"
              >
                {months.map((month) => (
                  <AutocompleteItem
                    className="text-primary hover:text-gray-200"
                    key={month.id}
                    value={month}
                  >
                    {month.name}
                  </AutocompleteItem>
                ))}
              </Autocomplete>

              <Autocomplete
                isRequired
                size={"sm"}
                label="Year"
                value={selectedYear}
                onChange={(value) => setSelectedYear(value)}
                className="bg-[#D9D9D9] ms-4 mt-10 w-32 rounded-2xl flex justify-between"
              >
                {years.map((year) => (
                  <AutocompleteItem
                    className="text-primary hover:text-gray-200"
                    key={year.id}
                    value={year}
                  >
                    {year.name}
                  </AutocompleteItem>
                ))}
              </Autocomplete>
            </div>
            <Textarea
              placeholder="Write a complain (optional)"
              className=" shadow-transparent	 ps-4	pt-5 pb-10 mt-5 h-52 rounded-2xl bg-[#D9D9D9]"
            />
            <div>
              {" "}
              <Button
                type="submit"
                color="secondary"
                className="text-gray-100 ms-2 my-4 items-center font-bold px-6 py-6 rounded-full"
                variant="shadow"
              >
                Schedule the meeting
              </Button>
              <Toaster />
            </div>
          </form>
        </div>
        <Image src={meeting} alt="meeting" className="me-24" />
      </div>
    </section>
  );
};

export default Page;
