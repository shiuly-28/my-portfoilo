import { createBrowserRouter } from "react-router";
import MainLayOut from "./LayOut/MainLayOut";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Skills from "../Pages/Skills";
import Education from "../Pages/Education";
import ProjectCards from "../Pages/ProjectCard";
import Contact from "../Pages/Contact";
import ProjectCardDetails from "../Pages/ProjectCardDetails";

export const router = createBrowserRouter([{
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
        {
            path: "/",
            Component: Home
        },
        {
            path: "aboutUs",
            Component: AboutUs
        },
        {
            path: "skills",
            Component: Skills
        },
        {
            path: "education",
            Component: Education
        },
        {
            path: "project",
            Component: ProjectCards
        },
        {
            path: "contact",
            Component: Contact
        },
        {
            path: 'projectCardDetails/:id',
            Component: ProjectCardDetails
        }

    ]

}]);