import {apiService} from "./apiService";
import {IResCast} from "../interfaces/IResCast";
import {apiKEY, endPoints} from "../configs/urls";

const castService = {
    getMainCastsByMovieId: (id: number) => apiService.get<IResCast>(`${endPoints.movie.base}/${id}/credits`, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        }
    }),
    getDetailedInfoAboutPerson: (id: number) => apiService.get(`${endPoints.persons.base}/${id}`, {
        headers: {
            Authorization: `Bearer ${apiKEY}`,
        }
    })
}

export {
    castService,
}