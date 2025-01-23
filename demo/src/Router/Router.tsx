import {createBrowserRouter} from 'react-router-dom'
import Home from '../Pages/Index'
import TianQi from '../Pages/Tianqi'

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Home />
    },
    {
        path:'/tianqi',
        element: <TianQi/>
    }
])

export default routes
