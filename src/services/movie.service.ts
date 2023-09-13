import {apiService} from "./apiService";
import {apiKEY, endPoints} from "../configs/urls";
import {IResMovie} from "../interfaces/IResMovie";
import {IResCast} from "../interfaces/IResCast";
import {IMovie} from "../interfaces/IMovie";

const movieService = {
    getNowPlayingMovies: (page: number) => apiService.get<IResMovie>(endPoints.movie.nowPlaying, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        },
        params: {
            page,
        }
    }),
    getPopularMovies: (page: number) => apiService.get<IResMovie>(endPoints.movie.popular, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        },
        params: {
            page,
        }
    }),
    getTopRatedMovies: (page: number) => apiService.get<IResMovie>(endPoints.movie.topRated, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        },
        params: {
            page,
        }
    }),
    getUpcomingMovies: (page: number) => apiService.get<IResMovie>(endPoints.movie.upcoming, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        },
        params: {
            page,
        }
    }),
    getMovieById: (id:number) => apiService.get<IMovie>(`${endPoints.movie.base}/${id}`, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        }
    }),
    getRecommendationsByMovieId: (id: number) => apiService.get<IResMovie>(`${endPoints.movie.base}/${id}/recommendations`, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        }
    }),
    getMoviesByGenre: (genre: string, page: number) => apiService.get(`${endPoints.movie.moviesByGenre}`, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        },
        params: {
            with_genres: genre,
            page,
        }
    }),
    getSearchingMovie: (query: string, page: number) => apiService.get(`${endPoints.movie.search}`, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        },
        params: {
            query,
            page,
        }
    }),
    getMovieByPersonId: (id: number) => apiService.get(`${endPoints.persons.base}/${id}/movie_credits`, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        },
    }),
}

export {
    movieService,
}