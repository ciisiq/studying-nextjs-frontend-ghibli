export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((film) => {
    return {
      params: { id: film.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { film: data },
  };
};

const Details = ({ film }) => {
  return (
    <div>
      <h1 className="font-bold text-ft-black text-[42px] leading-none">
        {film.name}
      </h1>
      <p>{film.email}</p>
      <p>{film.website}</p>
      <p>{film.address.city}</p>
    </div>
  );
};

export default Details;
