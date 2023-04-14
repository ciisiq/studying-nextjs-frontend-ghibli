import Footer from "@/comps/Footer";
import NavBar from "@/comps/Navbar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="min-h-screen flex">
        {/* Left side */}
        <div className="flex-1">
          <h1>About this page </h1>
          <p>
            This page is just for learning Node.js propose and reforce Tailwinds
            skills, and because I love films by studio Ghibli I put together.
            Feel free to see the list of all films{" "}
            <span className="font-bold">
              <a href="films">[ here ]</a>
            </span>
          </p>
        </div>

        {/* Rigth side */}
        <div className="flex-1">
          <img alt="studio ghibli films together" src="/peakpx.jpg"></img>
        </div>
      </div>
      <Footer />
    </main>
  );
}
