import { useLoaderData } from 'react-router';
import {
  Carousel,
  JobCategories,
  TabsCategories,
} from '../../Components/Index';

const HomePage = () => {
  const jobs = useLoaderData();
  console.log(jobs);
  return (
    <div>
      <Carousel />
      <TabsCategories jobs={jobs} />
    </div>
  );
};

export default HomePage;
