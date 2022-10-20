import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Denventory from './components/Dinventory/Denventory';
import Order from './components/Orders/Order';
import Shop from './components/Shop/Shop';
import Main from './Layout/Main';
import { productandcardloader } from './Loaders/Product&cardloader';


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
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
          element: <Order></Order>

        },
          // Here is our inverntory path
        {
          path:'/inventory',
          element: <Denventory></Denventory>
        },
        // Here is our about path
    {
      path: '/about',
      element:<About></About>
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
