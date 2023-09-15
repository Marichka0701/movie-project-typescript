import {apiService} from "./apiService";
import {IResCast} from "../interfaces/IResCast";
import {endPoints} from "../configs/urls";

const castService = {
    getMainCastsByMovieId: (id: number) => apiService.get<IResCast>(`${endPoints.movie.base}/${id}/credits`),
    getDetailedInfoAboutPerson: (id: number) => apiService.get(`${endPoints.persons.base}/${id}`)
}

export {
    castService,
}