import { createBrowserRouter, RouterProvider } from 'react-router';
import Main from '../Layouts/Main';
import { HomePage } from '../Pages/Index';
import AuthProvider from '../Providers/AuthProvider';

const Routes = createBrowserRouter([
  {
    path: '/',
    Component: Main,
  },
  {
    index: true,
    Component: HomePage,
  },
]);

const AppRouter = () => {
  return (
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  );
};

export default AppRouter;
