import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const frozenFoodSlice = createApi({
    reducerPath: 'frozenFoodSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/'
    }),
    tagTypes: ['frozenFood'],
    endpoints(builder) {
        return {
            fetchFrozenFood: builder.query({
                query: () => {
                    return {
                        url: '/frozenFood',
                        method: 'GET'
                    }
                },
                providesTags: (result, error, arg) => {
                    const tag = result.map(food => ({ type: 'frozenFood', id: food.id }))
                    const foodTag = { type: 'frozenFood', id: 'LIST' }
                    return [...tag, foodTag]
                }
            }),
            addFrozenFood: builder.mutation({
                query: () => {
                    const food = `Frozen ${faker.food.dish()}`
                    const quantity = Math.floor(Math.random() * 20)
                    return {
                        url: '/frozenFood',
                        method: 'POST',
                        body: {
                            food,
                            quantity,
                        }
                    }
                },
                invalidatesTags: (result, error, arg) => {
                    return [{ type: 'frozenFood', id: 'LIST' }]
                }
            }),
            removeFrozenFood: builder.mutation({
                query: (productId) => {
                    return {
                        url: `/frozenFood/${productId}`,
                        method: 'DELETE'
                    }
                },
                invalidatesTags: (result, error, argProductId) => {
                    return [{ type: 'frozenFood', id: argProductId }]
                }
            })

        }
    }
})

export { frozenFoodSlice }
export const { useFetchFrozenFoodQuery } = frozenFoodSlice
