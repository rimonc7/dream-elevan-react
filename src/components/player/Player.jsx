import { FaUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import PropTypes from 'prop-types';



const Player = ({ player, handleSelected }) => {
    const { name, country, image, role, battingType, bowlingType, biddingPrice } = player
    return (
        <div className="border-2 rounded-xl my-3 lg:m-4">
            <div className="mx-4">
                <img className=" p-3 w-full h-48 object-cover rounded-3xl" src={image} alt="" />
                <div>
                    <div>
                        <div className="flex gap-4 align-middle font-bold text-xl">
                            <FaUserCircle />
                            {name}
                        </div>
                    </div>
                    <div className="flex justify-between mt-3">
                        <div className="flex gap-3 text-gray-400">
                            <FaFlag />
                            {country}
                        </div>
                        <div className=" bg-gray-100 py-1 px-4  rounded-lg">
                            <small>{role}</small>
                        </div>
                    </div>
                    <div className="border-t-2 my-4">
                        <p className="font-bold mt-4 mb-2">Rating</p>
                        <div >
                            <div className="flex justify-between">
                                <p className="font-bold">{battingType}</p>
                                <p>{bowlingType}</p>
                            </div>
                            <div className=" flex justify-between mt-4 align-middle">
                                <p className="font-semibold">Price: {biddingPrice}$</p>
                                <button onClick={() => {
                                    handleSelected(player);
                                }} className="border-2 p-2 rounded-lg ">Choose Player</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleChoose: PropTypes.func.isRequired,
    handleSelected: PropTypes.func.isRequired
}