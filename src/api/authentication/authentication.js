import Axios from '../api'

export const loginUser = async (username, password, remember) =>
  await Axios.post(
    '/v1/users/login',
    JSON.stringify({ username, password, remember })
  )

export const verifyUser = async () => {
  console.log('verifiying')
  const { data } = await Axios.get('/v1/admin')
  return data
}
