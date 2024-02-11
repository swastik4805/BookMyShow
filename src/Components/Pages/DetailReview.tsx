import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

export function DetailReview(){
    const [reviews, setReviews]=useState({});
    const [movie, setMovie] = useState({});
    const params=useParams();
    const [revLen, setRevLen]=useState(0);

    
    

    useEffect(()=>{
        async function fetchMovie() {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=dde6e564297581977e005015195e971b`
        );
        const json = await response.json();
        setMovie(json);
        // console.log(json);

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
              console.log(response.data);
              setRevLen(response.data.results.length);
            })
            .catch(function (error) {
              console.error(error);
            });
      }
        

        fetchMovie();
    },[params.id])
    console.log(revLen);
    return(
        <div>
            <div className="text-4xl font-bold text-center">
                RATINGS
            </div>
            <div className="text-center">
                {movie.title}
            </div>
            <div className="text-center text-red-500 font-semibold">
                User reviews ({revLen})
            </div>
            <div>
                {reviews.results && reviews.results.length ? 
                reviews.results.map((review,index)=>(
                    <div className="p-4">
                    <ReviewCard review={review}></ReviewCard>
                    </div>
                ))
                
                    :<div></div>
                }
            </div>
        </div>
    )
}



function ReviewCard({review}){
    // console.log(review);
    return(
        <div className="rounded p-4 border-solid border-2 border-gray-400">
            <div className="flex justify-between pt-2 pb-4">
                <div className="flex">
                    <img src={review.avatar_path}></img>
                    <div>{review.author}</div>
                </div>
                <div className="flex">
                <div className="pt-0.5 px-2 pb-4"><FaStar/></div>
                    {review.author_details.rating}/10
                </div>
            </div>
            <div className="pb-4">
            {review.content}
            </div>
            <div className="flex justify-between">
                <div>

                </div>
                <div className="text-gray-400 flex text-sm pt-3">
                    Last Updated- {review.updated_at.slice(0,10)}
                    <div className="pt-1 pl-3"><CiShare2 /></div>

                </div>
            </div>
        </div>
    )
}