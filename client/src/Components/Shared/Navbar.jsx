import { useContext } from 'react';
import { Link } from 'react-router';
import Logo from '../../assets/images/logo.png';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className='navbar bg-base-100 shadow-sm container px-8 mx-auto'>
      <div className='flex-1'>
        <div className='flex items-center'>
          <Link
            to={'/'}
            className='flex gap-2 items-center'
          >
            <img
              className='w-auto h-7'
              src={Logo}
              alt={'Logo'}
            />
            <span className='font-bold'>
              Solo<span className='text-gray-600'>Sphere</span>
            </span>
          </Link>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>

          {!user && (
            <li>
              <Link to={'login'}>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div
                className='w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 flex items-center justify-center'
                title={user?.displayName}
              >
                {user?.photoURL ? (
                  <img
                    referrerPolicy='no-referrer'
                    alt='User Profile Photo'
                    src={user.photoURL}
                  />
                ) : (
                  <span className='text-lg'>
                    {user?.displayName
                      ? user.displayName.slice(0, 2).toUpperCase()
                      : '??'}
                  </span>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <div className='justify-between'>Add Job</div>
              </li>
              <li>
                <div>My Posted Jobs</div>
              </li>
              <li>
                <div>My Bids</div>
              </li>
              <li>
                <div>Bid Requests</div>
              </li>
              <li className='mt-2'>
                <button
                  onClick={logOut}
                  type='button'
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
