import { Outlet } from 'react-router';

const Main = () => {
  return (
    <div>
      {/* Header */}

      {/* Main Layouts */}
      <div>
        outlet
        <Outlet />
      </div>

      {/* Footer */}
    </div>
  );
};

export default Main;
