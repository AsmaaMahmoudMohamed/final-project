
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Categories from './components/Categories/Categories';
import Brands from './components/Brands/Brands';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Notfound from './components/Notfound/Notfound';
import CounterContextProvider from './Context/CounterContext';
import UserContextProvider from './Context/UserContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import CartContextProvider from './Context/CartContext';
import  { Toaster } from 'react-hot-toast';
import Checkout from './components/Checkout/Checkout';
import Allorders from './components/Allorders/Allorders';
import CategoriesDetails from './components/CategoriesDetails/CategoriesDetails';

import ResetCode from './components/ResetCode/ResetCode';
import UpdateUser from './components/UpdateUser/UpdateUser';
import SubCategories from './components/SubCategories/SubCategories';
import WishlistContextProvider from './Context/WishlistContext';
import Wishlist from './components/Wishlist/Wishlist';

import Forgetpassword from "./components/Forgetpassword/Forgetpassword";





let query = new QueryClient ()




let x = createBrowserRouter([
  {path:"", element :   <Layout/>,   children :[
    {index: true , element:    <ProtectedRoute> <Home/>   </ProtectedRoute>   },
    {path : "products" , element : <ProtectedRoute> < Products/>   </ProtectedRoute>  },
    {path : "cart"  , element : <ProtectedRoute> < Cart/>   </ProtectedRoute>  },
    {path : "categories" , element : <ProtectedRoute>  < Categories/>    </ProtectedRoute>  },
    {path : "productdetails/:id/:category" , element : <ProtectedRoute>  < ProductDetails/>    </ProtectedRoute>  },
    {path : "categoriesdetails/:id/:category" , element : <ProtectedRoute>  < CategoriesDetails/>    </ProtectedRoute>  },
    {path : "checkout" , element : <ProtectedRoute>  < Checkout/>    </ProtectedRoute>  },
    {path : "allorders" , element : <ProtectedRoute>  < Allorders/>    </ProtectedRoute>  },
    {path : "subcategories" , element : <ProtectedRoute>  < SubCategories/>    </ProtectedRoute>  },

    {path : "updateuser", element:   <>  < UpdateUser/>  </>},
    {path : "resetcode", element:   <>  < ResetCode/>  </>},
    {path : "forgetpassword", element: < Forgetpassword/>},
    {path : "wishlist", element:   <ProtectedRoute>   < Wishlist/>  </ProtectedRoute>   },
    {path : "brands"  , element:    < Brands/>    },
    { path : "login" , element : < Login/>},
    { path : "register" , element: < Register/>},
    { path : "*" ,element : < Notfound/> }
  ]},
])

function App() {
  

  return (
    <>

    <UserContextProvider> 
    <CounterContextProvider>  
      
      <QueryClientProvider client ={query}>    
        <CartContextProvider> 

          <WishlistContextProvider> 
          <RouterProvider router={x}></RouterProvider>;
          <Toaster/>
          </WishlistContextProvider>
      
        </CartContextProvider>
     
      <ReactQueryDevtools/>

        </QueryClientProvider> 
    
        </CounterContextProvider>
       

    </UserContextProvider>
    
    </>
  )
}

export default App
