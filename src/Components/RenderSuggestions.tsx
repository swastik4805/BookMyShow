import { Card } from ".";
import { useFetch } from "./hooks";
import ScrollToTopWrapper from "./ScrollToTopWrapper"; // Import the ScrollToTopWrapper component

export function RenderSuggestions({apiPath}:{apiPath: string}){
    const { data: movies } = useFetch(apiPath);

    const moviewToRender=movies.slice(0,4);
    
    return (
        <ScrollToTopWrapper> {/* Wrap the component with ScrollToTopWrapper */}
            <div>
                <div className="text-2xl font-bold pl-4">You might also like</div>
                <div className="">
                    <div className="grid grid-cols-2 md:grid-cols-4">
                        {moviewToRender.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))}
                    </div>
                </div>
                <div className="text-sm text-gray-400">Report content</div>
            </div>
        </ScrollToTopWrapper>
    );
}
