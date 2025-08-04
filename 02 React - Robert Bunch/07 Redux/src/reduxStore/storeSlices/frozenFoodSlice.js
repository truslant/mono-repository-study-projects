import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const frozenFoodSlice = createApi({
    reducerPath: 'frozenFoodSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/'
    }),
    endpoints(builder) {
        return {
            fetchFrozenFood: builder.query({
                query: () => {
                    return {
                        url: '/frozenFood',
                        method: 'GET'
                    }
                }
            })
        }
    }
})

export { frozenFoodSlice }
export const { useFetchFrozenFoodQuery } = frozenFoodSlice
