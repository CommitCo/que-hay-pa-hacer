import { AuthButtonServer } from "../components/auth-button-server";
import Image from "next/image";
import NavBar from "../components/nav-bar-post";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <NavBar/>

      {/* <div className="w-screen">
        <Image
          src="/assets/logo-white.svg"
          alt="Logo"
          width={200}
          height={200}
        />
      </div> */}
    </main>
  );
}