import Head from "next/head";
import styles from "../../styles/films.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { films: data },
  };
};

const Films = ({ films }) => {
  console.log(films);

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
          <div key={film.id}>
            <a className={styles.single}>
              <h3>{film.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Films;
