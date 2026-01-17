import { createBrowserRouter, RouterProvider } from 'react-router';
import Main from '../Layouts/Main';
import { HomePage, LoginPage, RegisterPage } from '../Pages/Index';
import AuthProvider from '../Providers/AuthProvider';

const Routes = createBrowserRouter([
  {
    path: '/',
    Component: Main,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`),
      },
      {
        path: 'register',
        Component: RegisterPage,
      },
      {
        path: 'login',
        Component: LoginPage,
      },
    ],
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
