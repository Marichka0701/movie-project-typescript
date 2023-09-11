import {apiService} from "./apiService";
import {apiKEY, endPoints} from "../configs/urls";
import {IResGenre} from "../interfaces/IResGenre";

const genreService = {
    getAll: () => apiService.get<IResGenre>(endPoints.genres.base, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        },
    }),
}

export {
    genreService,
}