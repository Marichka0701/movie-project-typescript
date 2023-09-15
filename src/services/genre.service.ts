import {apiService} from "./apiService";
import {endPoints} from "../configs/urls";
import {IResGenre} from "../interfaces/IResGenre";

const genreService = {
    getAll: () => apiService.get<IResGenre>(endPoints.genres.base),
}

export {
    genreService,
}