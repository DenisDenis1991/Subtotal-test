import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const nasaApi = createApi({
  reducerPath: 'nasaApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.spacexdata.com/'}),
  endpoints: (builder) => ({
    getLaunches: builder.query({
      query: ({sorts, currentPage}) => ({
        url: 'v5/launches/query',
        method: 'POST',
        body: JSON.parse(`{
          "query": {
              "date_utc": { 
                  "$gte": "2015-01-01T00:00:00.000Z", 
                  "$lte": "2019-12-31T23:59:59.000Z" 
              },
              "success": true
          },
          "options": {
            "sort":{
              "date_utc": ${sorts}
            },
            "pagination": true, 
            "page": ${currentPage}
        }
        }`),
        initialState: {
          isSuccess: false,
        }
      }),
    })
  })
})

export const {useGetLaunchesQuery} = nasaApi