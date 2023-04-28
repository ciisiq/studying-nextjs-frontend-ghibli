import Head from "next/head";
import styles from "../../styles/films.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:8080/api/films");
  const data = await res.json();

  return {
    props: { films: data },
  };
};

const Films = ({ films }) => {
  return (
    <>
      <Head>
        <title>Ghibli list | Films </title>
        <meta name="keywords" content="ghibli" />
      </Head>

      <div>
        <h1 className="font-bold text-ft-black text-[42px] leading-none">
          All films list here
        </h1>
        {films.map((film) => (
          <Link href={"/films/" + film._id} key={film._id}>
            <h3 className={styles.single}>{film.title}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Films;
