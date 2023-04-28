export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8080/api/films");
  const data = await res.json();

  const paths = data.map((film) => {
    return {
      params: { id: film._id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("http://localhost:8080/api/films/" + id);
  const data = await res.json();

  console.log(data);
  return {
    props: { film: data },
  };
};

const Details = ({ film }) => {
  return (
    <div>
      <h1 className="font-bold text-ft-black text-[42px] leading-none">
        {film.title}
      </h1>
      <p>{film.genre}</p>
      <p>{film.release}</p>
      <p>{film.director}</p>
      <p>{film.synopsis}</p>
      <p>{film.poster}</p>
    </div>
  );
};

export default Details;
