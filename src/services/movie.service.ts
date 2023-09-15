import {apiService} from "./apiService";
import {endPoints} from "../configs/urls";
import {IResMovie} from "../interfaces/IResMovie";
import {IMovie} from "../interfaces/IMovie";

const movieService = {
    getNowPlayingMovies: (page: number) => apiService.get<IResMovie>(endPoints.movie.nowPlaying, {
        params: {
            page,
        }
    }),
    getPopularMovies: (page: number) => apiService.get<IResMovie>(endPoints.movie.popular, {
        params: {
            page,
        }
    }),
    getTopRatedMovies: (page: number) => apiService.get<IResMovie>(endPoints.movie.topRated, {
        params: {
            page,
        }
    }),
    getUpcomingMovies: (page: number) => apiService.get<IResMovie>(endPoints.movie.upcoming, {
        params: {
            page,
        }
    }),
    getMovieById: (id:number) => apiService.get<IMovie>(`${endPoints.movie.base}/${id}`),
    getRecommendationsByMovieId: (id: number) => apiService.get<IResMovie>(`${endPoints.movie.base}/${id}/recommendations`),
    getMoviesByGenre: (genre: string, page: number) => apiService.get(`${endPoints.movie.moviesByGenre}`, {
        params: {
            with_genres: genre,
            page,
        }
    }),
    getSearchingMovie: (query: string, page: number) => apiService.get(`${endPoints.movie.search}`, {
        params: {
            query,
            page,
        }
    }),
    getMovieByPersonId: (id: number) => apiService.get(`${endPoints.persons.base}/${id}/movie_credits`),
}

export {
    movieService,
}