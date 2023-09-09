import axios from "axios";

import {baseURL} from "../configs/urls";

const apiService = axios.create({baseURL});

export {
    apiService,
}