import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const meatSlice = createApi({
    reducerPath: 'meatSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/'
    }),
    tagTypes: ['meat'],
    endpoints(builder) {
        return {
            fetchMeat: builder.query({
                query: () => {
                    return {
                        url: 'meat',
                        method: 'GET'
                    }
                },
                providesTags: (result, error, art) => {
                    const meatItemTags = result.map(meatItem => {
                        return { type: 'meat', id: meatItem.id }
                    })
                    const meatListTag = { type: 'meat', id: 'LIST' }
                    return [...meatItemTags, meatListTag]
                }
            }),
            addMeat: builder.mutation({
                query: () => {
                    const quantity = Math.floor(Math.random() * 20);
                    const food = `${faker.food.ethnicCategory()} ${faker.food.meat()}`
                    return {
                        url: '/meat',
                        method: 'POST',
                        body: {
                            food,
                            quantity
                        }
                    }
                },
                invalidatesTags: (result, error, arg) => {
                    return [{ type: 'meat', id: 'LIST' }]
                },
            }),
            removeMeat: builder.mutation({
                query: (productId) => {
                    return {
                        url: `/meat/${productId}`,
                        method: 'DELETE'
                    }
                },
                invalidatesTags: (result, error, argProductId) => {
                    return [{ type: 'meat', id: argProductId }]
                }
            })
        }
    }
})

export { meatSlice }
