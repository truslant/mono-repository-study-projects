import { createBrowserRouter } from "react-router-dom";
import { frozenFoodSlice } from "../reduxStore/storeSlices/frozenFoodSlice";
import { meatSlice } from "../reduxStore/storeSlices/meatSlice";
import { produceSlice } from "../reduxStore/storeSlices/produceSlice";

import { reduxStore } from "../reduxStore/reduxStore";
import RootPage from "../pages/RootPage";
import HomePage from "../pages/Home";
import FrozenDepartment from "../pages/FrozenDept";
import ProduceDept from "../pages/ProduceDept";
import MeatDept from "../pages/MeatDept";



const routerAction = async (request, reduxStore, slice, addToSliceAction, removeFromSliceAction, updateQtySliceAction) => {
    const formData = await request.formData();
    const action = formData.get('actionType')
    try {
        if (action === 'addProduct') {
            await reduxStore.dispatch(slice.endpoints[addToSliceAction].initiate()).unwrap()
        } else if (action === 'deleteProduct') {
            const productId = formData.get('productId')
            await reduxStore.dispatch(slice.endpoints[removeFromSliceAction].initiate(productId)).unwrap()
        } else if (action === 'decrementProduct') {
            const productId = formData.get('productId');
            let curQty = formData.get('quantity');
            if (curQty < 2) {
                await reduxStore.dispatch(slice.endpoints[removeFromSliceAction].initiate(productId)).unwrap()
            } else {
                await reduxStore.dispatch(slice.endpoints[updateQtySliceAction].initiate({ productId, quantity: curQty - 1 })).unwrap()
            }
        } else if (action === 'incrementProduct') {
            const productId = formData.get('productId');
            let curQty = formData.get('quantity');
            curQty++
            await reduxStore.dispatch(slice.endpoints[updateQtySliceAction].initiate({ productId, quantity: curQty })).unwrap()
        }
        return { success: true }
    } catch (error) {
        console.log(error)
        throw new Error('Add/Remove Product failed')
    }
}


const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        HydrateFallback: () => <div>Loading...</div>,
        children: [
            {
                index: true,
                element: <HomePage />,

            },
            {
                id: 'frozenFood',
                path: '/frozenFood',
                element: <FrozenDepartment />,
                loader: async () => {
                    try {
                        const frozenFood = await reduxStore.dispatch(
                            frozenFoodSlice.endpoints.fetchFrozenFood.initiate()
                        ).unwrap()
                        return frozenFood;
                    } catch (error) {
                        throw new Error('Failed to retreive the data from server')
                    }
                },
                action: async ({ request, params }) => {
                    return await routerAction(request, reduxStore, frozenFoodSlice, 'addFrozenFood', 'removeFrozenFood', 'updateFrozenFoodQty')
                }
            },
            {
                id: 'meat',
                path: '/meat',
                element: <MeatDept />,
                loader: async ({ request, params }) => {
                    try {
                        const meat = await reduxStore.dispatch(meatSlice.endpoints.fetchMeat.initiate()).unwrap()
                        return meat
                    } catch (error) {
                        throw new Error('Error while retreving Meat nomenclature from server')
                    }
                },
                action: async ({ request, params }) => {
                    return routerAction(request, reduxStore, meatSlice, 'addMeat', 'removeMeat', 'updateMeatQty')
                }
            },
            {
                id: 'produce',
                path: '/produce',
                element: <ProduceDept />,
                loader: async ({ request, params }) => {
                    try {
                        const produceFood = await reduxStore.dispatch(produceSlice.endpoints.fetchProduce.initiate()).unwrap()
                        return produceFood
                    } catch (error) {
                        throw new Error('Error while retreiving Produce Food')
                    }
                },
                action: async ({ request, params }) => {
                    return routerAction(request, reduxStore, produceSlice, 'addProduce', 'removeProduce', 'updateProduceQty')
                }
            },
        ]
    },
])

export default rootRouter

