import Head from "next/head";
import styles from "../../styles/films.module.css";
import Link from "next/link";
import Image from "next/image";

export const getStaticProps = async () => {
  const host = process.env.DB_HOST;
  const username = process.env.DB_USER;
  const passoword = process.env.DB_PASS;

  const res = await fetch(`http://${host}:8080/api/films`);
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
        <h1 className="font-bold text-ft-black text-[42px] leading-none my-8">
          All Ghibli films
        </h1>

        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {films.map((film) => (
            <Link href={"/films/" + film._id} key={film._id}>
              {/* <h3 className={styles.single}>{film.title}</h3> */}

              <div class=" h-fit p-6flex-col flex justify-center items-center ">
                <div class="container flex justify-center ">
                  <div class=" ">
                    <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg min-h-[20rem]">
                      <Image
                        className="rounded-t-lg max-h-[26rem]"
                        src={film.poster}
                        alt="film poster"
                        width={500}
                        height={300}
                      />
                      <div class="py-6 px-8 rounded-lg bg-white max-h-[9rem] min-h-[9rem]">
                        <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                          {film.title}
                        </h1>
                        <p class="text-gray-700 tracking-wide">{film.genre}</p>
                      </div>
                      <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                        <span class="text-md">❤️</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Films;
