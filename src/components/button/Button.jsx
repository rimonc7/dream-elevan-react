import PropTypes from 'prop-types';

const Button = ({ handleConditionButton, isActive, selectedPlayers }) => {
    return (
        <div>
            <div className="flex justify-between my-10 mx-3 lg:mx-36">
                <div>
                    <h3 className={`font-bold text-2xl ${isActive ? "flex" : "hidden"}`}>Available Players</h3>
                    <h3 className={`font-bold text-2xl ${isActive ? "hidden" : "flex"}`}>Selected: ({selectedPlayers.length}/6)</h3>
                </div>
                <div className='flex lg:block'>
                    <button onClick={() => handleConditionButton(true)} className={`p-2 rounded-lg font-bold ${isActive ? "bg-yellow-400" : ""}`}>Available</button>
                    <button onClick={() => handleConditionButton(false)} className={`p-2 rounded-lg font-bold ${!isActive ? "bg-yellow-400" : ""}`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
        </div>
    );
};

export default Button;

Button.propTypes = {
    handleConditionButton: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
    selectedPlayers: PropTypes.array.isRequired
}