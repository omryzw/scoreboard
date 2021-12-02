import React from "react";

const Stats = (props) => {
  const {players} = props;
    let totalPlayers = players.length;
    let totalPoints = players.reduce((total, player) => {
        return total + player.score;
    }, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stats;
