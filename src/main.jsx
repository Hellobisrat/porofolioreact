
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Error from './pages/Error';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Portfolio from './pages/Portofolio/Portofolio.jsx';
import Resume from './pages/Resume/Resume.jsx';

const router = createBrowserRouter ([
  {
   path:'/',
   element:<App/>,
   elementError:<Error/>,
   children: [
   {
    index:true,
    element:<About/>,
   },
   {
    path:'/Portofolio',
    element:<Portfolio/>
   },
   {
    path:'/Contact',
    element:<Contact/>
   },
   {
    path:'/Resume',
    element:<Resume/>
   }

   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
   
)
