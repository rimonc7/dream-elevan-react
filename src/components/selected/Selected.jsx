import SelectedPlayer from "./SelectedPlayer";
import PropTypes from 'prop-types';

const Selected = ({ selectedPlayers, handleDelete ,handleAddMore }) => {
    return (
        <div>
            <div>
                {selectedPlayers.map(player => (
                    <SelectedPlayer key={player.playerId} player={player} handleDelete={handleDelete} handleAddMore={handleAddMore} />
                ))}
                <div className="bg-white border-2 border-gray-400  p-2 w-fit rounded-xl ml-4 lg:mx-36 my-10">
                    <button onClick={()=>handleAddMore(true)} className=" bg-[#E7FE29] p-3 rounded-lg" >Added More Player</button>
                </div>
            </div>
        </div>
    );
};


export default Selected;

Selected.propTypes = {
    selectedPlayers:PropTypes.array.isRequired,
    handleDelete:PropTypes.func.isRequired,
    handleAddMore:PropTypes.func.isRequired
}