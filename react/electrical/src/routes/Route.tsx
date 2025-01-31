import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ElevatorRepairs from "../pages/Services/ElevatorRepairs";
import Contact from "../pages/Contact";
import RootLayout from "../layouts/RootLayouts";
import ElevatorModernization from "../pages/Services/ElevatorModernization";
import ElevatorInstallation from "../pages/Services/ElevatorInstallation";
import ElevatorMaintenance from "../pages/Services/ElevatorMaintenance";
import Gallery from "../pages/Gallery";
import Testimonials from "../pages/Testimonials";
import Faq from "../pages/Faq";
export const route=createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/about-us',
                element:<About/>
            },
            {
                path:'/elevator-repairs',
                element:<ElevatorRepairs/>
            },
            {
                path:'/elevator-modernization',
                element:<ElevatorModernization />
            },
            {
                path:'/elevator-installation',
                element:<ElevatorInstallation />
            },
            {
                path:'/elevator-maintenance',
                element:<ElevatorMaintenance />
            },
            {
                path:'/gallery',
                element:<Gallery />
            },
            {
                path:'/testimonials',
                element:<Testimonials />
            },
            {
                path:'/faqs',
                element:<Faq />
            },
            {
                path:'/Contact',
                element:<Contact/>
            },
        ]
    }
]);