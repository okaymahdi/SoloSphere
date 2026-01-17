import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';

const TabsCategories = ({ jobs }) => {
  return (
    <Tabs>
      <div className='container px-8 py-10 mx-auto'>
        <h1 className='text-2xl lg:text-3xl font-semibold text-gray-800 text-center'>
          Browse Jobs By Categories
        </h1>
        <p className='max-w-2xl mx-auto my-6 text-gray-500 text-center'>
          Three categories available for the time being. They are Web
          Development, Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
        <div className='flex justify-center'>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>

        {/* TabPanel for Web Development */}
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter((job) => job.category === 'web development')
              .map((job) => (
                <Card
                  key={job._id}
                  job={job}
                />
              ))}
          </div>
        </TabPanel>

        {/* TabPanel for Graphics Design */}
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter((job) => job.category === 'graphics design')
              .map((job) => (
                <Card
                  key={job._id}
                  job={job}
                />
              ))}
          </div>
        </TabPanel>

        {/* TabPanel for Digital Marketing */}
        <TabPanel>
          <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {jobs
              .filter((job) => job.category === 'digital marketing')
              .map((job) => (
                <Card
                  key={job._id}
                  job={job}
                />
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabsCategories;
