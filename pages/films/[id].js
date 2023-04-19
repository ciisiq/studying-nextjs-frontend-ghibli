export const getStaticPaths = aysnc () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(film => {
        return {
            params: {id: film.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}


const Details = ({ film }) => {
  return (
    <div>
      <h1 className="font-bold text-ft-black text-[42px] leading-none">
        Details Page
      </h1>
      {/* <p>You are seeing information from {film.id}</p> */}
    </div>
  );
};

export default Details;
