import { MdDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';


const SelectedPlayer = ({ player, handleDelete }) => {
    const { playerId, name, image, role, biddingPrice } = player

    return (

        <div className="flex mx-4 lg:mx-36 justify-between border-2 rounded-xl px-6 py-2 my-4">
            <div className="flex  gap-5 my-3">
                <img className="w-20 h-20 rounded-full object-cover" src={image} alt="" />
                <div>
                    <h2 className="font-bold">{name}</h2>
                    <p> <small>{role}</small></p>
                    <p> <small>${biddingPrice}</small></p>
                </div>
            </div>
            <button onClick={() => handleDelete(playerId)} className="text-red-600"> <MdDeleteForever></MdDeleteForever> </button>
        </div>
    );
};

export default SelectedPlayer;

SelectedPlayer.propTypes = {
    player:PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
}