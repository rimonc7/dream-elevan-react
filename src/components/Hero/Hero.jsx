import "./hero.css"
import bannerMain from "../../assets/banner-main.png"
import PropTypes from 'prop-types';


const Hero = ({handleCoin}) => {


    return (
        <div className=" bg-black mx-4 lg:mx-36 rounded-xl p-4 lg:p-12 text-center hero">
            <img className="mx-auto" src={bannerMain} alt="" />
            <h1 className=" font-bold text-4xl text-white lg:mt-5">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="font-semibold text-2xl text-gray-300 my-5">Beyond Boundaries Beyond Limits</p>
            <div className="p-1 border border-[#E7FE29] rounded-xl w-fit mx-auto">
            <button onClick={handleCoin} className="border-4 border-[#E7FE29] rounded-xl bg-[#E7FE29] p-2 m-2 font-bold">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Hero;

Hero.propTypes = {
    handleCoin: PropTypes.func.isRequired,
}