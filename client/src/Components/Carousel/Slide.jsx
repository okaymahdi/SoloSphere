import { Link } from 'react-router';

const Slide = ({ image, title, highlight, buttonText, buttonLink }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-152'
      style={{
        backgroundImage: `url("${image}")`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
            {title} <span className='text-blue-400'>{highlight}</span>
          </h1>

          <br />

          <Link to={buttonLink}>
            <button className='btn btn-soft btn-accent '>{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
