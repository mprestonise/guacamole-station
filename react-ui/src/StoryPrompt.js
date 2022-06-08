import React, { Component } from 'react';
import './App.css';
import Cards from './cards.js';

class StoryPrompt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personas: [],
      character: {},
      situation: {},
      conflict: {},
      fetching: true
    };
    this.generatePrompt = this.generatePrompt.bind(this);
    this.generatePersona = this.generatePersona.bind(this);
    this.randomNumber = this.randomNumber.bind(this);
  }

  componentDidMount() {
    this.generatePrompt();
  }

  randomNumber(min,max) {
    return Math.floor((Math.random() * max) + min);
  }

  generatePersona(data) {
    const classes = ['Working', 'Middle', 'Upper'];
    return {
      name: data.name.first + " " + data.name.last,
      age: this.randomNumber(18,30),
      class: classes[this.randomNumber(0,classes.length-1)],
      location: data.location.country,
      picture: data.picture.medium,
    };
  }

  generatePrompt() {
    fetch('https://randomuser.me/api/?results=3&exc=login&nat=au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,tr,us')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        let arr = [];
        while(arr.length < 3){
            var r = Math.floor(Math.random() * Cards.length);
            if(arr.indexOf(r) === -1) { arr.push(r); }
        }
        const generatedPersonas = json.results.map(item => {
          return this.generatePersona(item);
        });

        Cards[arr[0]]['reversed'] = this.randomNumber(1,4) > 3 ? true : false;
        Cards[arr[1]]['reversed'] = this.randomNumber(1,4) > 3 ? true : false;
        Cards[arr[2]]['reversed'] = this.randomNumber(1,4) > 3 ? true : false;

        this.setState({
          personas: generatedPersonas,
          character: Cards[arr[0]],
          situation: Cards[arr[1]],
          conflict: Cards[arr[2]],
          fetching: false
        });

        console.log(this.state);
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  render() {

    return (
      <div className="App">
        <div className="App-header prompt-header">
          <div>
            <h2>Story prompt <button style={{float: 'right'}} onClick={() => this.generatePrompt()}>Shuffle</button></h2>
          </div>
        </div>
        <div className="App-body">
          {this.state.fetching
            ? <p>Loading..</p>
            : <div className="prompt">
              <h3>Generated personas</h3>
              <section className="characters">
                {this.state.personas && this.state.personas.length > 2
                  ? <div>
                    {this.state.personas.map((persona,index) => {
                      return <div className="bio" key={index}>
                        <img src={persona.picture} alt={persona.name} width="80" />
                        <div className="bio-text">
                          <h4>{persona.name}</h4>
                          <span>{persona.age} years old</span>
                          <span style={{display: 'block'}}>{persona.class} class</span>
                          <span style={{display: 'block'}}>{persona.location}</span>
                        </div>
                      </div>
                    })}
                  </div>
                  : <p>Loading personas..</p>
                }
              </section>
              <section className="cards">
                <div>
                  <h3>Character</h3>
                  <div className="bio">
                    <img src={this.state.character.image} className={`${this.state.character.reversed ? 'reversed' : ''}`} alt={this.state.character.title} width="80" />
                    <div className="bio-text">
                      <h4>{this.state.character.title} {this.state.character.reversed ? <span>Reversed</span> : null}</h4>
                      {this.state.character.reversed
                        ? <span>{this.state.character.reverse}</span>
                        : <span>{this.state.character.desc}</span>
                      }
                    </div>
                  </div>
                </div>
                <div>
                  <h3>Situation</h3>
                  <div className="bio">
                    <img src={this.state.situation.image} className={`${this.state.situation.reversed ? 'reversed' : ''}`} alt={this.state.situation.title} width="80" />
                    <div className="bio-text">
                      <h4>{this.state.situation.title} {this.state.situation.reversed ? <span>Reversed</span> : null}</h4>
                      {this.state.situation.reversed
                        ? <span>{this.state.situation.reverse}</span>
                        : <span>{this.state.situation.desc}</span>
                      }
                    </div>
                  </div>
                </div>
                <div>
                  <h3>Conflict</h3>
                  <div className="bio">
                    <img src={this.state.conflict.image} className={`${this.state.conflict.reversed ? 'reversed' : ''}`} alt={this.state.conflict.title} width="80" />
                    <div className="bio-text">
                      <h4>{this.state.conflict.title} {this.state.conflict.reversed ? <span>Reversed</span> : null}</h4>
                      {this.state.conflict.reversed
                        ? <span>{this.state.conflict.reverse}</span>
                        : <span>{this.state.conflict.desc}</span>
                      }
                    </div>
                  </div>
                </div>
              </section>
            </div>
          }
          </div>
      </div>
    );
  }
}

export default StoryPrompt;
