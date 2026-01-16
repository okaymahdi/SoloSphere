import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';

const TabsCategories = () => {
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

        <div className='flex justify-center'>
          <TabPanel>
            <Card />
          </TabPanel>
          <TabPanel>
            <Card />
          </TabPanel>
          <TabPanel>
            <Card />
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
};

export default TabsCategories;
