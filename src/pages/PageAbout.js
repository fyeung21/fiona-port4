import Skills from '../components/Skills/Skills';

const PageAbout = () => {
  return (
    <>
      <h2>About Me</h2>
      <div className='profile-img-container'>
        <img src={""} alt="profile img" />
      </div>
      <p>Location: {'Vancouver, BC'}</p>
      <p>
        {
          'Nulla id dictum nulla, sit amet tincidunt orci. Curabitur ut ex lorem. Aliquam vel erat vitae ex posuere porttitor vitae vitae leo. Fusce pulvinar dui nec hendrerit efficitur. Nulla gravida enim vitae tristique hendrerit. Pellentesque neque libero, accumsan ut posuere aliquet, imperdiet et neque. Mauris interdum enim odio, eget fermentum nulla scelerisque eu. Etiam vestibulum libero vel dui rutrum commodo. Phasellus commodo feugiat enim ac convallis. Vestibulum ultrices, turpis ac pharetra tincidunt, nisi mi accumsan neque, ac rutrum purus lectus in orci. Cras non metus ac diam posuere vehicula.'
        }
      </p>
      <Skills />
    </>
  );
};

export default PageAbout;
