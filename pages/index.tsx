import Head from "next/head";
import Yolo from "../components/models/Yolo";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  return (
    <>
      <main className="font-mono flex flex-col justify-center items-center  w-screen">
        <h1 className="m-5 text-xl font-bold">DETEKSI JENIS BERAS SECARA REAL TIME</h1>
        <Yolo />
        <p className="m-5">
          Dibuat oleh{" "}
          <a
            className="underline underline-offset-1 hover:translate-y-1"
            href="https://instagram.com/heyhoray?igshid=MmU2YjMzNjRlOQ=="
          >
            @raymashel
          </a>
        </p>
      </main>
    </>
  );
}
