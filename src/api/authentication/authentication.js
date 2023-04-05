import Axios from '../api'

export const loginUser = async (username, password, remember) => {
  // console.log(username, password, remember)
  return await Axios.post(
    '/v1/users/login',
    JSON.stringify({ username, password, remember })
  )
}

export const verifyUser = async () => Axios.get('/v1/admin')
