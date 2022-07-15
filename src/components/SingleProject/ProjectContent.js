import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const ProjectContent = ({ content }) => {
  return (
    <>
      <section className="project-content-container">
        <Tabs className="tabs-container">
          <TabList className="tab-list">
            {content.map((item, id) => (
              <Tab key={id}>{item.heading}</Tab>
            ))}
          </TabList>
          {content.map((item, id) => (
            <TabPanel key={id} className="tab-panel">
              <section dangerouslySetInnerHTML={{ __html: item.content }}></section>
            </TabPanel>
          ))}
        </Tabs>
      </section>
    </>
  );
};

export default ProjectContent;