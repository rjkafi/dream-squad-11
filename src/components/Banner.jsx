/* eslint-disable react/prop-types */
import backgroundImage  from '../assets/bg-shadow.png'

const Banner = ({handleClaimFreeCoin}) => {
    return (
      <div>
        <div
  className="hero min-h-screen bg-black rounded-xl "
  style={{
    backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    
  }}>
  <div className='bg-black'></div>
  <div className="hero-content p-4 text-neutral-content  flex-col mx-auto">
    <img src={'https://i.ibb.co.com/thqbL55/banner-main.png'} alt="" />
    <div className="text-center">
      <h1 className=" text-4xl font-bold mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="mb-5">
      Beyond Boundaries Beyond limits.
      </p>
      <button onClick={handleClaimFreeCoin} className="btn bg-[#E7FE29]">Claim Free Credit</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;