
import { useFetch } from "../hooks";
import { Card } from "../Cards";


export const MovieList = ({ apiPath }:{apiPath: string, title: string}) => {
  const { data: movies } = useFetch(apiPath);


  // console.log(title);
  return (
    <main>
      <div className="">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};
