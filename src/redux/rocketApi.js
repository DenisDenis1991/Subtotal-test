import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';


export const rocketsApi = createApi({
    reducerPath: 'rocketsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spacexdata.com' }),
    endpoints: (builder) => ({
        getRockets: builder.query({
            query: () => ({
                url: `/v4/rockets`
            }),
        }),
    })
})

export const {useGetRocketsQuery} = rocketsApi