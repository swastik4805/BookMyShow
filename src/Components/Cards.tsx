import { Link } from "react-router-dom";
import backupImg from '../assets/backup.png';
import ScrollToTopWrapper from "./ScrollToTopWrapper";

export const Card = ({ movie }) => {
  const { id, title, overview, poster_path } = movie;
    
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : backupImg ;

  return (
      <ScrollToTopWrapper> {/* Wrap with ScrollToTopWrapper */}
        <div className="max-w-sm bg-white rounded-xl m-2">
          <Link to={`/movie/${id}`}>
            <img
              className="rounded-xl"
              src={image}
              alt="img"
            />
          </Link>
          <div className="p-1">
            <Link to={`/movie/${id}`}>
              <h5 className="mb-2 text-xl font-bold tracking-tight">
                {title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700">
              {overview.split(' ').slice(0, 15).join(' ')}{overview.split(' ').length > 15 ? ' ...' : ''}
            </p>
          </div>
        </div>
      </ScrollToTopWrapper>
    );
};
