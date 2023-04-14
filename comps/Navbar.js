import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <Link class="a" href="/">
        Home
      </Link>
      <Link class="a" href="/films">
        Films List
      </Link>
      <Link class="a" href="/about">
        About
      </Link>
    </nav>
  );
};

export default NavBar;
