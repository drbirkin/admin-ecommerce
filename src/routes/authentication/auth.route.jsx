import { useQuery } from '@tanstack/react-query'
import { verifyUser } from '../../api/authentication/authentication'
import { Navigate, Outlet, useLoaderData } from 'react-router-dom'

// https://tkdodo.eu/blog/react-query-meets-react-router
// https://reactrouter.com/en/main/guides/data-libs
// https://copyprogramming.com/howto/react-query-usequery-returns-undefined-and-component-does-not-rerender
const verificationQuery = (id = null) => ({
  queryKey: ['auth', id],
  queryFn: async () => await verifyUser(),
})

export const authLoader = (queryClient) => async () => {
  const { queryKey, queryFn } = verificationQuery()
  // return (
  //   queryClient.getQueryData(query.queryKey) ??
  //   (await queryClient.fetchQuery(query))
  // )

  return await queryClient.fetchQuery({
    queryKey,
    queryFn,
    staleTime: 1000 * 60 * 5, //5 min
  })
}

export default function Protect() {
  const initialData = useLoaderData()
  const { data: { document = null } = {} } =
    useQuery({ ...verificationQuery(), initialData }) || {}
  // const { data: { document = null } = {} } = useLoaderData() || {}
  // const document = true;
  // console.log(
  //   useQuery(verificationQuery()).data.data,
  //   useQuery(verificationQuery()),
  //   initialData
  // )
  console.log('verify:', document)
  return !document ? (
    <Navigate to="/auth/login" />
  ) : (
    <div className="w-full h-full flex">
      <Outlet />
    </div>
  )
}
