const baseURL = process.env.REACT_APP_API;
const apiKEY = process.env.REACT_APP_API_KEY;
const imageURL = process.env.REACT_APP_IMAGE_URL;

const movie = '/movie';
const genre = '/genre';
const person = '/person';

const endPoints = {
    movie: {
        base: movie,
        search: `${baseURL}/search/${movie}`,
        moviesByGenre: `${baseURL}/discover/${movie}`,
        nowPlaying: `${baseURL}/${movie}/now_playing`,
        popular: `${baseURL}/${movie}/popular`,
        topRated: `${baseURL}/${movie}/top_rated`,
        upcoming: `${baseURL}/${movie}/upcoming`,
    },
    genres: {
        base: `${baseURL}${genre}/movie/list`,
    },
    persons: {
        base: `${baseURL}/${person}`,
        popular: `${baseURL}/${person}/popular`,
    }
}

export {
    baseURL,
    apiKEY,
    imageURL,
    endPoints,
}