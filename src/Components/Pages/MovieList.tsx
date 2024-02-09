
import { useFetch } from "../hooks";
import { Card } from "../Cards";


export const MovieList = ({ apiPath  , title }) => {
  const { data: movies } = useFetch(apiPath);



  return (
    <main>
      <div className="">
        <div className="grid grid-cols-4">
          {movies.map((movie, index) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};
