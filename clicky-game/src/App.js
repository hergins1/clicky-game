import React, { Component } from 'react';
import Container from ".components/Container";
import Header from ".components/Header";
import './App.css';
import TeamCard from ".components/TeamCard";
import teams from "./data.json"

class App extends Component {
  state = {
    score: 0,
    highscore: 0,
    teams,
  }

  reset = () => {
    if(this.state.score > this.state.highscore){
      this.setState({ highscore: this.state.score }, function (){
        console.log(this.state.highscore);
      });
    }
    this.state.teams.forEach( team => {
      team.clicked = false;
    });
    this.setState({ score: 0 })
  }

  isClicked = id => {
    const teamChosen = this.state.teams.filter(team => team.id === id);
    if (!teamChosen[0].chosen){
      teamChosen[0].chosen = true;
      this.setState({
        score: this.state.score + 1
      }, function (){
        console.log(this.state.highscore);
        console.log(this.state.score)
      });
      this.state.teams.sort(() => Math.random() - 0.5)
    } else {
      this.reset();
    }
  }


  render(){
    return (
      <div>
        <Header 
        score={this.state.score}
        highscore={this.state.highscore}
        />
        <Container>
          {this.state.teams.map(team =>(
            <TeamCard
            id={team.id}
            key={team.id}
            image={team.image}
            name={team.name}
            isClicked={team.isClicked}
            />
          ))}
        </Container>
      </div>
    )
  }
}

export default App;