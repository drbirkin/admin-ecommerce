import Axios from "../api";

export const loginUser = async (username, password, remember) => await Axios.post(
    'api/v1/users/login', JSON.stringify({username, password, remember})
)