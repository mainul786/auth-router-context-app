
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import PraviteRoutes from './routes/PraviteRoutes';


const router = createBrowserRouter([
{
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/home',
      element:<Home></Home>
    },
    {
      path:'/orders',
      element:<PraviteRoutes><Orders></Orders></PraviteRoutes>
    },
    {
      path:'/register',
      element:<Register></Register>
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]
}
])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
