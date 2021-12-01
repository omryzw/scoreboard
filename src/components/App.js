import React from "react";
import Header from "./Header";
import Player from "./Player";


const Players = [
  {
    name: "Guil",
    id: 1,
  },
  {
    name: "Treasure",
    id: 2,
  },
  {
    name: "Ashley",
    id: 3,
  },
  {
    name: "James",
    id: 4,
  },
];
class App extends React.Component {

    state = {
        players: Players,
    }

    handleRemovePlayer = (id) => {
        this.setState( previousState => {
            return {
            players: previousState.players.filter( p => p.id !== id ),
            };
        });
    }


    render() {
        return (
            <div className="scoreboard">
              <Header title="Scoreboard" totalPlayers={this.state.players.length} />
              {/* start of players list */}
              {this.state.players.map((player) => (
                <Player name={player.name} key={player.id.toString()} removePlayer= {this.handleRemovePlayer} id ={player.id} />
              ))}
            </div>
          );
        };
    }

export default App;