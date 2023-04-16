import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img className="logo" src="/logo.png" alt="totoro logo"></img>
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
