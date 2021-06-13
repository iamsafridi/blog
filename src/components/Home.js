import React from "react";
import image from "../sunset.JPG";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Sunset"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen lg:pt-64 px-4">
        <h1 className="text-6xl text-black-400 font-bold cursive leading-none lg:leading-sung home-name">
          Hello, I'm Afridi
        </h1>
      </section>
    </main>
  );
}
