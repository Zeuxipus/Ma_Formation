import {createBrowserRouter} from 'react-router-dom'
import App from "./App"
import ErrorPage from './Components/ErrorPage/ErrorPage'
import HomePage from './Components/HomePage/HomePage'
import ContactPage from './Components/ContactMePage/ContactMe'
import AboutPage from './Components/AboutPage/AboutPage'
import ProjectPage from './Components/ProjectPage/ProjectPage'
import ProjectDetail from './Components/ProjectDetail/ProjectDetail'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children : [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/projects",
                element: <ProjectPage />
            },
            {
                path: "/projects/:id",
                element: <ProjectDetail />
            }
        ]
    }
])

export default router;