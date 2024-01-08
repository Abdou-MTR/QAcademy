"use client";

import Logo from "@Images/logo-no-background.svg";
import Image from "next/image.js";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Avatar,
  Button,
} from "@nextui-org/react";

export default function App() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <Navbar
      maxWidth="full"
      className="flex flex-row w-full bg-transparent justify-between "
    >
      <NavbarBrand>
        <Link href="/">
          <Image src={Logo} alt="logo" className="h-14 w-64	" />
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center" className=" sm:flex ">
        <NavbarItem className="mx-8">
          <Link className="text-default" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="mx-8">
          <Link href="exam" className="text-default" aria-current="page">
            Take an Exam
          </Link>
        </NavbarItem>
        <NavbarItem className="mx-8">
          <Link className="text-default" href="meeting">
            Schedule a meeting
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {isLoggedIn ? (
            <div className="flex flex-row">
              <Avatar
                className="bg-slate-200 text-gray-500 me-4"
                showFallback
                src="https://images.unsplash.com/broken"
              />
              <Button
                color="secondary"
                variant="ghost"
                className="text-gray-700 border hover:text-gray-100 font-medium px-6 rounded-full"
                onClick={handleLogout}
              >
                Log Out
              </Button>
            </div>
          ) : (
            <Button
              as={Link}
              color="primary"
              href="register"
              variant="ghost"
              className="text-gray-700 border hover:text-gray-100 font-medium px-6 rounded-full"
            >
              Register
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
