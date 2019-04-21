import React from "react"

// Pages 
import Home from "./containers/Content/Home/Home"
import Vocabulary from "./containers/Content/Vocabulary/Vocabulary"
import Repeatitorium from "./containers/Content/Repeatitorium/Repeatitorium"
import Excersices from "./containers/Content/Excersices/Excersices"
import Statistic from "./containers/Content/Statistic/Statistic"

const routes = [
    {
        name : "Home",
        path : "/",
        exact : true,
        component : () => (<Home />)
    },
    {
        name : "Vocabular",
        path : "/vocabular",
        component : () => (<Vocabulary />)
    },
    {
        name : "Repeatitorium",
        path : "/repeatitorium",
        component : () => (<Repeatitorium />)
    },
    {
        name : "Excersices",
        path : "/excersices",
        component : () => (<Excersices />)
    },
    {
        name : "Statistic",
        path : "/statistic",
        component : () => (<Statistic />)
    },
]

export default routes;