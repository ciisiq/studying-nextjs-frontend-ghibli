import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img className="logo" src="/logo.png" alt="totoro logo"></img>
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
