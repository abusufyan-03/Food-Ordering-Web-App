import ReactDOM from 'react-dom/client';
import Header from './components/Header.js'
import Body from './components/Body.js';
import { createBrowserRouter, RouterProvider, Outlet} from 'react-router';
import About from './components/About.js'
import Contact from './components/Contact.js';
import Error from './components/Error.js';
import RestaurantMenu from './components/RestaurantMenu.js';
import { lazy, Suspense, useEffect, useState } from 'react';
import UserContext from './utils/UserContext.js';
import appStore from './utils/appStore.js';
import {Provider} from "react-redux";
import Cart from './components/Cart.js';
// import Grocery from './components/Grocery.js';


const Grocery = lazy(()=> import("./components/Grocery.js"))

const AppLayout = () => {
    const [userName, setUserName] = useState()

    useEffect(()=>{
        const data = {
            loggedInUser: "Sasuke Uchiha"
        }
        setUserName(data.loggedInUser)
    }, [])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <>
        
        <Header />
        <Outlet/>
        </>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: '/About',
                element: <About/>
            },
            {
                path: '/Contact',
                element: <Contact/>
            },
            {
                path: '/restaurants/:id',
                element: <RestaurantMenu/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/Grocery',
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement: <Error/>
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);