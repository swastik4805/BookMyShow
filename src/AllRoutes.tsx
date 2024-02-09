import {Routes ,Route  } from 'react-router-dom' ;
import { MovieDetail } from './Components/Pages/MovieDetails';
import { Search } from './Components/Pages/Search';
import { PageNotFound } from './Components/Pages/PageNotFound';
import { MovieList } from './Components/Pages/MovieList';


export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<MovieList apiPath="movie/now_playing"   title="Home" />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movies/popular" element={<MovieList apiPath="movie/popular"  title="Popular"/>} />
        <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>} />
        <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming"/>} />
        <Route path="/search" element={<Search  apiPath="search/movie"/>} />
        <Route path="*" element={<PageNotFound  />} />
        
      </Routes>
    </div>
  );
}
