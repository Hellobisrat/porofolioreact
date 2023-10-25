
import ReactDOM from 'react-dom/client'
import {createBrowseRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';

const router = createBrowseRouter ([
  {
   path:'/',
   element:<App/>,
   elementError:<Error/>,
   children: [
   {
    index:true,
    element:<Home/>,
   },
   {
    path:'/About',
    element:<About/>
   },
   {
    path:'/Contact',
    element:<Contact/>
   },
   {
    path:'/Blog',
    element:<Blog/>
   }

   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
   
)
