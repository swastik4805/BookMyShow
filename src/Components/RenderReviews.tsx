import { FaStar } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export function RenderReviews({reviews,id}){

    return(
        
        <div className="cursor-pointer">
            <div className="text-2xl font-bold pl-4">Top reviews</div>
        <div className="flex">
            
            {reviews.results && reviews.results.length ? 
            reviews.results.slice(0,3).map((review,index)=>(
                <div className="p-4">
                <ReviewCard review={review} id={id}></ReviewCard>
                </div>
            ))
            
                :<div></div>
            }
        </div>
        </div>
    )
}

function ReviewCard({review,id}){
    // console.log(review);
    const navigate=useNavigate();
    return(
        <div className="rounded p-4 border-solid border-2 border-gray-400"
        onClick={()=>{
            navigate(`/movie/${id}/reviews`)
        }}>
            <div className="flex justify-between pt-2 pb-4">
                <div className="flex">
                    <img src={review.avatar_path}></img>
                    <div>{review.author}</div>
                </div>
                <div className="flex">
                <div className="pt-0.5 px-2 pb-4">
                    <FaStar style={{color:'red'}}/>
                </div>
                    {review.author_details.rating}/10
                </div>
            </div>
            <div className="pb-4">
            {review.content.length > 100 ? `${review.content.slice(0, 100)}...` : review.content}
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