import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(1) (It will go back 1 page history and +1 go futher)
      //redirect to home page
      router.push("/");
    }, 3000);
  }, []);

  return (
    <main className="flex gap-6 items-center">
      <div className=" flex-1 ">
        {/* Left side */}
        <h1 className="font-bold text-ft-black text-[69px] leading-none">
          Oooops...
        </h1>
        <h2 className="font-bold text-ft-black text-[36px] leading-none py-10">
          That page canoot be found.
        </h2>
        <p className="text-2xl">
          Go back to the{" "}
          <Link className="text-link-blue-sel font-bold " href="/">
            Homepage
          </Link>{" "}
        </p>
      </div>

      {/* Rigth side */}
      <div className="flex-1">
        <img
          class="wallpaper"
          alt="studio ghibli films together"
          src="/totoro.png"
        ></img>
      </div>
    </main>
  );
};

export default NotFound;
