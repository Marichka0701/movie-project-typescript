import {apiService} from "./apiService";
import {endPoints} from "../configs/urls";
import {IResMovie} from "../interfaces/IResMovie";
import {IMovie} from "../interfaces/IMovie";
import {IResMovieByPerson} from "../interfaces/IResMovieByPerson";

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
    getMovieById: (id: number) => apiService.get<IMovie>(`${endPoints.movie.base}/${id}`),
    getRecommendationsByMovieId: (id: number) => apiService.get<IResMovie>(`${endPoints.movie.base}/${id}/recommendations`),
    getFilteredMovies: (
        primary_release_date_gte: string,
        primary_release_date_lte: string,
        vote_average_gte: number,
        vote_average_lte: number,
        sort_by: string,
        genre: string,
        page: number) => apiService.get<IResMovie>(`${endPoints.movie.moviesByGenre}`, {
        params: {
            sort_by,
            'vote_average.gte': vote_average_gte,
            'vote_average.lte': vote_average_lte,
            'primary_release_date.gte': primary_release_date_gte,
            'primary_release_date.lte': primary_release_date_lte,
            with_genres: genre,
            page,
        },
    }),
    getSearchingMovie: (query: string, page: number) => apiService.get<IResMovie>(`${endPoints.movie.search}`, {
        params: {
            query,
            page,
        }
    }),
    getMovieByPersonId: (id: number) => apiService.get<IResMovieByPerson>(`${endPoints.persons.base}/${id}/movie_credits`),
}

export {
    movieService,
}