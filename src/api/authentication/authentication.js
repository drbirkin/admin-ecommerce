import Axios from '../api'

export const loginUser = async (username, password, remember) => {
  console.log(username, password, remember)
  return await Axios.post(
    '/users/login',
    JSON.stringify({ username, password, remember })
  )
}
