import { createBrowserRouter } from "react-router-dom";
import { frozenFoodSlice } from "../reduxStore/storeSlices/frozenFoodSlice";

import { reduxStore } from "../reduxStore/reduxStore";
import RootPage from "../pages/RootPage";
import HomePage from "../pages/Home";
import FrozenDepartment from "../pages/FrozenDept";
import ProduceDept from "../pages/ProduceDept";
import MeatDept from "../pages/MeatDept";

const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        children: [
            {
                index: true,
                element: <HomePage />
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
                }
            },
            {
                path: '/meat',
                element: <MeatDept />
            },
            {
                path: '/produce',
                element: <ProduceDept />
            },
        ]
    },
])

export default rootRouter

