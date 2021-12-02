import React ,{Component} from "react";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";
class App extends Component {

    state = {
        players: [
          {
            name: "Guil",
            id: 1,
            score:0
          },
          {
            name: "Treasure",
            id: 2,
            score:0
          },
          {
            name: "Ashley",
            id: 3,
            score:0
          },
          {
            name: "James",
            id: 4,
            score:0
          },
        ],
    }

  
    handleScoreChange = (index, delta) => {
      this.setState( prevState => {
        // New 'players' array – a copy of the previous `players` state
        const updatedPlayers = [ ...prevState.players ];
        // A copy of the player object we're targeting
        const updatedPlayer = { ...updatedPlayers[index] };
  
        // Update the target player's score
        updatedPlayer.score += delta;
        // Update the 'players' array with the target player's latest score
        updatedPlayers[index] = updatedPlayer;
  
        // Update the `players` state without mutating the original state
        return {
          players: updatedPlayers
        };
      });
    }

    handleRemovePlayer = (id) => {
      this.setState( prevState => {
        return {
          players: prevState.players.filter( p => p.id !== id )
        }
      });
    }

    handleAddPlayer = (name) => {
      this.setState( prevState => {
        return {
          players: [
            ...prevState.players,
            {
              name,
              score: 0,
              id: Math.floor(Math.random() * 1000)
            }
          ]
        }
      });
    }

  


    render() {
        return (
            <div className="scoreboard">
              <Header 
              players = {this.state.players} />
              {/* start of players list */}
              {this.state.players.map((player,index) => (
                <Player 
                name={player.name} 
                index = {index}
                score={player.score} 
                key={player.id.toString()} 
                removePlayer= {this.handleRemovePlayer} 
                changeScore={this.handleScoreChange} 
                id ={player.id} />
              ))}
              <AddPlayerForm addPlayer={this.handleAddPlayer}/>
            </div>
          );
        };
    }

export default App;
