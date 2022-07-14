
const BannerImg = ({ heroSrc, alt }) => {
  return (
    <div className="single-hero-container">
      <img src={heroSrc} alt={alt} />
    </div>
  );
};

export default BannerImg;