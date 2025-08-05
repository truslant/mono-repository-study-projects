import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const produceSlice = createApi({
    reducerPath: 'produce',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/'
    }),
    tagTypes: ['produce'],
    endpoints(builder) {
        return {
            fetchProduce: builder.query({
                query: () => {
                    return {
                        url: 'produce',
                        method: 'GET'
                    }
                },
                providesTags: (result, error, arg) => {
                    const productTags = result.map(product => ({ type: 'produce', id: product.id }))
                    const listTag = { type: 'produce', id: 'LIST' }
                    return [...productTags, listTag]
                }
            }),
            addProduce: builder.mutation({
                query: () => {
                    const food = `${faker.food.ethnicCategory()} ${faker.food.vegetable()}`
                    const quantity = Math.floor(Math.random() * 20)
                    return {
                        url: 'produce',
                        method: 'POST',
                        body: {
                            food,
                            quantity
                        }
                    }
                },
                invalidatesTags: (result, error, arg) => {
                    return [{ type: 'produce', id: 'LIST' }]
                }
            }),
            removeProduce: builder.mutation({
                query: (productId) => {
                    return {
                        url: `/produce/${productId}`,
                        method: 'DELETE'
                    }
                },
                invalidatesTags: (result, error, argProductId) => {
                    return [{ type: 'produce', id: argProductId }]
                }
            })
        }
    }
})

export { produceSlice }