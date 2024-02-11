import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backupImg from "../../assets/backup.png";
import axios from "axios";
import { AiFillLike } from "react-icons/ai";
import actor from "../../assets/actor.png"
import { RenderSuggestions } from "../RenderSuggestions";
import { RenderReviews } from "../RenderReviews";
import { VirtualAppbar } from "../VirtualAppbar";


export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const [credit, setCredit]=useState({});
  const [details, setDetails]=useState({});
  const [reviews, setReviews]=useState({});
  


  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : backupImg;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=dde6e564297581977e005015195e971b`
      );
      const json = await response.json();
      setMovie(json);
      // console.log(json);
    }
    

    const revi= {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${params.id}/reviews?language=en-US&page=1`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGU2ZTU2NDI5NzU4MTk3N2UwMDUwMTUxOTVlOTcxYiIsInN1YiI6IjY1YzRkM2FkMDdmYWEyMDE3ZGMyY2JmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKxQfJa9VdoZO85I1l6udaTNAnB3Knx84j3VZQfqA2U'
      }
    };
    axios
      .request(revi)
      .then(function (response) {
        setReviews(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });




    const options1 = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${params.id}/credits?`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGU2ZTU2NDI5NzU4MTk3N2UwMDUwMTUxOTVlOTcxYiIsInN1YiI6IjY1YzRkM2FkMDdmYWEyMDE3ZGMyY2JmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKxQfJa9VdoZO85I1l6udaTNAnB3Knx84j3VZQfqA2U'
      }
    };
    axios
      .request(options1)
      .then(function (response) {
        setCredit(response.data);
        // console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });


    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZGU2ZTU2NDI5NzU4MTk3N2UwMDUwMTUxOTVlOTcxYiIsInN1YiI6IjY1YzRkM2FkMDdmYWEyMDE3ZGMyY2JmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tKxQfJa9VdoZO85I1l6udaTNAnB3Knx84j3VZQfqA2U'
      }
    };
    axios.request(options)
      .then(function (response) {
        setDetails(response.data);
      }).catch(function (error) {
        console.error(error);
      });

    fetchMovie();
  }, [params.id]);

  
  return (
    <div>
      <VirtualAppbar title={movie.title} rating={movie.vote_average}></VirtualAppbar>
      <div>
        
        <Background image={image} prop={movie} details={details} original_language={movie.original_language} status={movie.status}></Background>
        <AboutTheMovie overview={movie.overview}></AboutTheMovie>
      </div>
      <div>
        <div className="w-9/12">
          <Cast credits={credit} id={params.id}></Cast>
          <RenderSuggestions apiPath="movie/popular"  title="Popular"></RenderSuggestions>
          <RenderReviews reviews={reviews} id={params.id}></RenderReviews>
        </div>

        <div className="w-3/12">

        </div>
      </div>
    </div>
  );
};




function DisplayActors({image,name, characterName}){
  return(
    <div>
      <div>
        <img className="rounded-full" src={image}></img>
      </div>
      <div className="text-center">
        {name}
      </div>
      <div className="text-center">
        <div className="text-xs">As</div>
        <div className="text-gray-500 text-sm">{characterName}</div>
      </div>
    </div>
  )
}

function DisplayCrew({image,name, known_for_department}){
  return(
    <>
      <div>
        <img className="rounded-full" src={image}></img>
      </div>
      <div className="text-center">
        {name}
      </div>
      
        <div className="text-gray-500 text-sm text-center">{known_for_department}</div>
      
    </>
  )
}

function Cast({ credits }) {
  // console.log(credits);
  return (
    <div>
      <div className="text-2xl font-bold pl-4">Cast</div>
      <div className="flex">
        {credits.cast && credits.cast.slice(0, 5).map((x) => (
          <div className="p-6">
          <DisplayActors image={actor} name={x.name} characterName={x.character}></DisplayActors>
          </div>
        ))}
      </div>
        
      <div className="text-2xl font-bold pl-4">Crew</div>
      <div className="flex">
        {credits.crew && credits.crew.slice(0, 5).map((x) => (
          <div className="p-6">
          <DisplayCrew image={actor} name={x.name} known_for_department={x.known_for_department}></DisplayCrew>
          </div>
        ))}
      </div>
    </div>
  )
}

function AboutTheMovie({overview}){
  return(
    <div className="p-6">
      <div className="font-bold text-xl pb-3">
        About the movie
      </div>
      <div className="text-sm">
        {overview}
      </div>
    </div>
  )
}

function Background({image,prop,details,original_language, status}){
  return(
    <div className="bg-blue-300 w-screen" style={{height:'490px',backgroundImage:`url(${image})`,backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      <div className="bg-gradient-to-r from-black" style={{height:'490px'}}>
        <div className="flex">
          <div>
          <img className="p-9" src={image} style={{height:'500px'}}></img>
          </div>
            <div>
            <div className="text-white text-4xl pb-12 pt-12 font-bold">
              {prop.title}
            </div>
            <div className="flex pb-4">
                  <div>
                    <AiFillLike style={{color:'white',height:'30px'}}/>
                  </div>
                  <div className="text-white text-xl font-semibold pl-4">
                    {details.vote_average}
                  </div> 
                  <div className="text-white pl-2 pt-0.5">average votes</div>
            </div>

            <div className="flex border-solid border-2 border-white rounded-xl p-3">
              <div className="pr-3">
                <div className="text-white font-semibold">
                  In cinemas
                </div>
                <div className="text-white text-xs">
                  Are you interested in watching this movie?
                </div>
              </div>
              <div className="text-sm bg-white rounded pt-1 px-2" style={{height:'30px'}}>
                I am interested
              </div>
            </div>

            <div className="pt-4 flex">
              <div className="pr-4">
                <div className="bg-gray-300 w-fit px-2 rounded">
                  <div>{original_language}</div>
                </div>
              </div>
              
              <div className="bg-gray-300 w-fit px-2 rounded">
                <div>{status}</div>
              </div>
            </div>


            <div className="flex pb-6 pt-4">
              <div className="text-white pr-3">
                {details.runtime} mins
              </div>
              <div className="flex text-white pr-3">
                {details.genres && details.genres.length? details.genres.map((x,index)=><div>{x.name},</div>):""}
              </div>
              <div className="text-white font-bold">
                {details.release_date}
              </div>
            </div>






            <div className="text-white font-semibold bg-red-400 rounded px-6 py-2" style={{width:'140px'}}>
              Book Tickets
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



