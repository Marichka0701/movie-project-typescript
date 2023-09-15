import axios from "axios";

import {apiKEY, baseURL} from "../configs/urls";

const apiService = axios.create({
    baseURL,
    headers:{
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKEY}`,
    }
});

export {
    apiService,
}