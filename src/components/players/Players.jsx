import { useEffect, useState } from "react";
import Player from "../player/Player";
import PropTypes from 'prop-types';


const Players = ({handleSelected}) => {
    const [players, SetPlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => SetPlayers(data))
    }, [])



    return (
        <>
            <div className=" mx-4 lg:mx-36">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                    {
                        players.map(player => <Player key={player.playerId} player={player} handleSelected={handleSelected}></Player>)
                    }
                </div>
            </div>
        </>
    );
};

export default Players;

Players.propTypes = {
    handleSelected: PropTypes.func.isRequired
}