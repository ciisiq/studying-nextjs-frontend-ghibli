import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" flex gap-6 items-center">
        {/* Left side */}
        <div className="flex-1 ">
          <h1 className="font-bold text-ft-black text-[69px] leading-none">
            About this page{" "}
          </h1>
          <p className="py-10  text-ft-black ">
            This page is just for learning Node.js propose and reforce Tailwinds
            skills, and because I love films by studio Ghibli I put together.
            Feel free to see the list of all films{" "}
          </p>
          <button className="bg-white hover:bg-bt-light text-ft-black font-bold py-3 px-6 rounded shadow-sm">
            <Link href="/films"> See films list </Link>
          </button>
        </div>

        {/* Rigth side */}
        <div className="flex-1">
          <img
            className="wallpaper"
            alt="studio ghibli films together"
            src="/peakpx.jpg"
          ></img>
        </div>
      </div>
    </main>
  );
}
