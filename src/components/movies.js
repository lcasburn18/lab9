import MovieItem from "./movieitem";

function Movies({ myMovies, ReloadData }) {
    // Ensure `myMovies` is always an array
    const movies = Array.isArray(myMovies) ? myMovies : [];

    return (
        <>
            {movies.length === 0 ? (
                <div>No movies available.</div>
            ) : (
                movies.map((movie) => (
                    <MovieItem
                        myMovie={movie}
                        key={movie._id}
                        Reload={ReloadData}
                    />
                ))
            )}
        </>
    );
}

export default Movies;
