import ProjectNav from '../components/ProjectNav/ProjectNav';
import BannerImg from '../components/SingleWork/BannerImg';
import Stats from '../components/SingleWork/Stats';

const PageSingleWork = () => {
  return (
    <section className='page-single-work'>
      <BannerImg />
      <Stats />
      <ProjectNav />
    </section>
  );
};

export default PageSingleWork;
