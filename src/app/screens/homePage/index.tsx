import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
    setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetriever = createSelector(
    retrievePopularDishes,
    (popularDishes) => ({ popularDishes }),
);

export default function HomePage() {
    const { setPopularDishes } = actionDispatch(useDispatch());
    const { popularDishes } = useSelector(popularDishesRetriever);
    // Selector: Storre => DATA

    useEffect(() => {
        // Backend server data request => DATA
        const result = [
            {
                _id: "6ad75defc86c92bdc8075ff6",
                productStatus: "PROCESS",
                productCollection: "DISH",
                productName: "Kebab",
                productPrice: 14,
                productLeftCount: 80,
                productSize: "NORMAL",
                productVolume: 1,
                productDesc: "This is delicious Kebab.",
                productImages: [
                    "uploads/products/38ca6a7c-e7f3-4cb0-8955-8cff2c8db708.jpg",
                    "uploads/products/8129c474-cf70-445a-a334-71758ef1b35b.jpg",
                    "uploads/products/c8a53b7e-bc20-42a0-a0e6-6c33653474a0.jpg",
                    "uploads/products/358f1d84-a68f-4be0-bbe1-5ae52001e9ee.jpg",
                    "uploads/products/8df0715a-269c-477e-b7eb-fdbc970d6d19.jpg",
                ],
                productViews: 0,
                createdAt: "2026-10-20T12:26:23.982Z",
                updatedAt: "2026-10-21T11:49:31.322Z",
                __v: 0,
            },
            {
                _id: "6ad74c93c86c92bdc8075fde",
                productStatus: "PROCESS",
                productCollection: "DISH",
                productName: "Steak",
                productPrice: 15,
                productLeftCount: 100,
                productSize: "NORMAL",
                productVolume: 1,
                productDesc: "This is the most delicious",
                productImages: [
                    "uploads/products/a2f444e8-6d13-42f6-bec3-4ec364e858a7.jpg",
                    "uploads/products/238fa43d-993d-4e42-9996-c921851f2db3.jpg",
                    "uploads/products/bab5df8a-6afc-42fa-bdc9-e3a444b29d17.jpg",
                    "uploads/products/ae8d6bb7-e2ee-46b0-9fa9-d0dadffb1407.jpg",
                    "uploads/products/81658feb-1ce7-48e3-8204-bb88f00cd8be.jpg",
                ],
                productViews: 0,
                createdAt: "2026-10-20T11:12:19.570Z",
                updatedAt: "2026-10-21T11:49:25.208Z",
                __v: 0,
            },
            {
                _id: "6addb17021e4467e18c4e55f",
                productStatus: "PROCESS",
                productCollection: "DISH",
                productName: "Palov",
                productPrice: 18,
                productLeftCount: 60,
                productSize: "NORMAL",
                productVolume: 1,
                productDesc: "This is very delicious Palov",
                productImages: [
                    "uploads/products/75686237-d488-454e-a28a-788102ff2015.jpg",
                    "uploads/products/8728f7e6-46e0-43a5-9905-6456535bdda2.jpg",
                    "uploads/products/9913e349-04a4-4c2e-8862-7bca4f5356be.jpg",
                ],
                productViews: 0,
                createdAt: "2026-10-25T07:36:16.612Z",
                updatedAt: "2026-10-25T07:36:25.449Z",
                __v: 0,
            },
        ];
        // Slice: DATA => Store
        // @ts-ignore
        setPopularDishes(result);
    }, []);

    console.log("popularDishes: =>", popularDishes);
    return (
        <div className={"homepage"}>
            <Statistics />
            <PopularDishes />
            <NewDishes />
            <Advertisement />
            <ActiveUsers />
            <Events />
        </div>
    );
}
function dispatch(arg0: { payload: any; type: "homePage/setPopularDishes" }) {
    throw new Error("Function not implemented.");
}