import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { AuthButtonServer } from '@/app/components/auth-button-server'
import Image from "next/image";

//import { AcmeLogo } from "./AcmeLogo.jsx";

export default function NavBar() {
  return (
    <Navbar className="border-b border-y-violet-400 p-2">
      <NavbarBrand>
        <Image src="/assets/logo-white.svg" alt="Logo" width={50} height={50}/>
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
        <AuthButtonServer/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}