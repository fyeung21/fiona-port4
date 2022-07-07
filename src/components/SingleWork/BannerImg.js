
const BannerImg = ({ hero, alt }) => {
  return (
    <div className="single-hero-container">
      <img src={hero} alt={alt} />
    </div>
  );
};

export default BannerImg;