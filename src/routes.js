import React from "react"

// Pages 
import Home from "./containers/Content/Home/Home"
import Vocabulary from "./containers/Content/Vocabulary/Vocabulary"
import Repeatitorium from "./containers/Content/Repeatitorium/Repeatitorium"
import Excersices from "./containers/Content/Excersices/Excersices"
import Statistic from "./containers/Content/Statistic/Statistic"

const routes = [
    {
        name: "Home",
        path: "/",
        exact: true,
        component: () => (<Home routes={routes} />),
        activeClassName: "home_active_style"
    },
    {
        name: "Vocabulary",
        path: "/vocabulary",
        component: () => (<Vocabulary routes={routes} />),
        activeClassName: "vocabulary_active_style",
        recources: [
            {
                name: "All",
                path: `/vocabulary`,
                className: "text-white",
                exact : true
            },
            {
                name: "Nouns",
                path: `/vocabulary/nouns`,
                className: "filter_noun_style",
            },
            {
                name: "Verbs",
                path: `/vocabulary/verbs`,
                className: "filter_verb_style",
            },
            {
                name: "Adjectives",
                path: `/vocabulary/adjectives`,
                className: "filter_adjective_style",
            },
            {
                name: "Adverbs",
                path: `/vocabulary/adverbs`,
                className: "filter_adverb_style",
            },
            {
                name: "Phrases",
                path: `/vocabulary/phrases`,
                className: "filter_phrase_style",
            },
        ]
    },
    {
        name: "Repeatitorium",
        path: "/repeatitorium",
        component: () => (<Repeatitorium routes={routes} />),
        activeClassName: "repeatitorium_active_style"
    },
    {
        name: "Excersices",
        path: "/excersices",
        component: () => (<Excersices routes={routes} />),
        activeClassName: "excersices_active_style"
    },
    {
        name: "Statistic",
        path: "/statistic",
        component: () => (<Statistic routes={routes} />),
        activeClassName: "statistic_active_style"
    },
]

export default routes;