import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AboutPrivate from './components/AboutPrivate';
import Denventory from './components/Dinventory/Denventory';
import Error from './components/Error';
import Login from './components/Login/Login';
import Order from './components/Orders/Order';
import Private from './components/Private';
import Shop from './components/Shop/Shop';
import Shipping from './components/Shpping/Shipping';
import Signup from './components/Signup/Signup';
import Main from './Layout/Main';
import { productandcardloader } from './Loaders/Product&cardloader';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      // child of all main compo
      children:[
        {
          path:'/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
          // Here is our order path
        {
          path:'orders',
          loader: productandcardloader,
          element: <Private><Order></Order>
          </Private>
        },
          // Here is our inverntory path
        {
          path:'/inventory',
          element: <Denventory></Denventory>
        },
        // Here is our about path
    {
      path: '/about',
      element:<Private><About></About></Private>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signup',
      element: <Signup></Signup>
    },
    {
      path: '/shipping',
      element: <Private><Shipping></Shipping></Private>
    }
      ]
    },


    
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
