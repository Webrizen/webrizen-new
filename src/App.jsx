import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Portfolio from './pages/portfolio';
import Home from './pages/home';
import NotFound from './pages/not-found';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
    },
    {
      path: "*",
      element: <NotFound />,
    }
  ]);
  return (
      <RouterProvider router={router} />
  );
}

export default App;
