import { Outlet } from 'react-router';
import { Footer, Navbar } from '../Components/Index';

const Main = () => {
  return (
    <div>
      {/* Header */}
      <Navbar />
      {/* Main Layouts */}
      <div className='min-h-[calc(100vh-306px)]'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
