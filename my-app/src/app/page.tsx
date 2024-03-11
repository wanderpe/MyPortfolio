
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/NavBar";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
   <main className='w-screen h-screen relative'>
    <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage: "url(./home-bg.jpg)"}}>
      <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
        <h1 className='text-[60px] text-white font-semibold'>
          Make anything Possible with
          <br/>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
             Web Development
          </span>

        </h1>
        <div className='flex-col md:flex-row hidden md:flex gap-5'>
          <Link href="/aboutme" className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] transition duration-300 ease-in-out hover:shadow-lg transform hover:scale-105'>
            <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition duration-300 ease-in-out'/>
            About Me
          </Link>

          <Link href="/contanct-me" className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] transition duration-300 ease-in-out hover:shadow-lg transform hover:scale-105'>
            <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition duration-300 ease-in-out'/>
            My Projects
          </Link>

          <Link href="/contanct-me" className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] transition duration-300 ease-in-out hover:shadow-lg transform hover:scale-105'>
            <div className='absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 transition duration-300 ease-in-out'/>
            Contant Me
          </Link>


        </div>
      </div>
    </div>


    <div className='absolute flex bottom-10 z-[20] right-5 flex-col  md:hidden gap-5'>
          <Link href="/my-skills" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
            Learn More
          </Link>
          <Link href="/my-projects" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
         
            My Project
          </Link>
          <Link href="/contanct-me" className='rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]'>
            
            Contact me
          </Link>
    </div>  

    <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
    </div>

      <div className='absolute bottom-0 z-[5] w-full h-auto'>
          <Image
            src="/trees.webp"
            alt="tress"
            width={2000}
            height={2000}
            className="w-full h-full"
          />

      </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className='absolute top-10 left-0 z-[10]'      
      
      />

      
   </main>
  );
}
