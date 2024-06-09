import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState();

    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? <h1>loading...</h1> : (
                <div>
                    <img src={movie.large_cover_image} alt={movie.title}/>
                    <h1>{movie.title}</h1>
                    <p>year : {movie.year}</p>
                    <p>rating : {movie.rating}</p>
                    <p>like_count : {movie.like_count}</p>
                    <p>language : {movie.language}</p>
                </div>
            )}
        </div>
    );
};

export default Detail;