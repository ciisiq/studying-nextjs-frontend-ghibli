import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/logo.png"
          width={160}
          height={77}
          alt="logo in the format of the studio ghibli totoro"
        />
      </div>
      <Link className="a" href="/">
        Home
      </Link>
      <Link className="a" href="/films">
        Films List
      </Link>
      <Link className="a" href="/about">
        About
      </Link>
    </nav>
  );
};

export default NavBar;
