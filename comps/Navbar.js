import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/films">Films List</Link>
      <Link href="/about">About</Link>
    </nav>
  );
};

export default NavBar;
