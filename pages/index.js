import Head from 'next/head'
import Image from 'next/image'


import Reviews from '../components/Reviews'
import Courses from '../components/Courses'
import Hometop from '../components/Hometop'
import React, { useState, useEffect, } from "react";
import BarLoader from "react-spinners/BarLoader";


export default function Home() {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, [])
  return (
    <div>
      {loading == true && (
        <div className="flex flex-col justify-center items-center h-screen w-screen bg-blue-300 bg-opacity-5">
        <BarLoader
          color="#000080"
          height={4}
          width={100}
        />
        </div>
      )}
      {loading == false && (
    <div className="h-full w-full">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-full">
        <Hometop />
      </div>



      <div className="px-8 py-4">

        <Courses />

      </div>


      <div className="p-4 ">
        <Reviews />
      </div>

    </div >
      )}
    </div>
    
  )
}
