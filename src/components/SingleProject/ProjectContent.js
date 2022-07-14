import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ProjectContent = ({ content }) => {
  return (
    <>
      <section className="project-content-container">
        <Tabs>
          <TabList>
            {content.map((item, id) => (
              <Tab key={id}>{item.heading}</Tab>
            ))}
          </TabList>
          {content.map((item, id) => (
            <TabPanel key={id}>
              <section dangerouslySetInnerHTML={{ __html: item.content }}></section>
            </TabPanel>
          ))}
        </Tabs>
      </section>
    </>
  );
};

export default ProjectContent;