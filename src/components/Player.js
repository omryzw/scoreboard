import React, { PureComponent } from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

class Player extends PureComponent {
  static propTypes = {
    removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    changeScore: PropTypes.func.isRequired
    
  }
  render() {
    const { removePlayer, name, score, id, index, changeScore } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>
        <Counter score={score} changeScore={changeScore} index={index} />
      </div>
    );
  }
}

export default Player;
