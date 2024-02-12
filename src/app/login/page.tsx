import Image from "next/image";
import NavBar from "../components/nav-bar-post";
import {Textarea} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <NavBar/>
      <div className="w-screen h-full flex mb-20 flex-row justify-around">
        <section className="flex flex-col max-w-[600px] justify-center items-center">
        <p className='p-10 text-2xl mb-4 w-full '>
        Descubre eventos emocionantes al instante. Nuestra aplicación te conecta con experiencias auténticas y verificadas en tiempo real. Desde conciertos hasta clases, encuentra lo que te apasiona y únete a la diversión con un solo clic.
        </p>
        </section>
        <section className="max-w-[600px] flex items-center">
        <Image
          src="/images/app.png"
          alt="Logo"
          width={800}
          height={800}
        />
        </section>
      </div>
      <div className="text-center p-10 w-screen max-h-96 h-full bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-around">
        <h1 className="text-2xl">Registrate gratris</h1>
        <section className="p-10 w-full">
          <form className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu correo electronico</label>
              <input type="email" id="email" className="bg-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@misena.edu.co" required/>
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tu contraseña</label>
              <input type="password" id="password" className="bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
            <Button color="warning">Registrarse</Button>
          </form>
        </section>
      </div>
      <div className="text-end pr-10 max-h-8 h-full bg-white text-black">
          By Diego Cortes
      </div>
    </main>
  );
}