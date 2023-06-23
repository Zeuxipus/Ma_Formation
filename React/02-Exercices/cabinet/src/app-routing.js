import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import HomePage from "./Components/HomePage/HomePage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import AboutPage from "./Components/AboutPage/AboutPage";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            },
            {
                path: '/about',
                element: <AboutPage />
            },
        ]
    }
])
export default router;