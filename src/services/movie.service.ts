import {apiService} from "./apiService";
import {apiKEY, endPoints} from "../configs/urls";
import {IResMovie} from "../interfaces/IResMovie";

const movieService = {
    getNowPlayingMovies: () => apiService.get<IResMovie>(endPoints.movie.nowPlaying, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        }
    }),
    getPopularMovies: () => apiService.get<IResMovie>(endPoints.movie.popular, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        }
    }),
    getTopRatedMovies: () => apiService.get<IResMovie>(endPoints.movie.topRated, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        }
    }),
    getUpcomingMovies: () => apiService.get<IResMovie>(endPoints.movie.upcoming, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        }
    }),
}

export {
    movieService,
}