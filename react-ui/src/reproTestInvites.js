import React, { Component } from 'react';
import './App.css';

class ReproTests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testerOneAcceptedWithoutEdit: 36,
      testerOneRejectedRate: 11,
      testerOneScore: 3.27,
      testerTwoAcceptedWithoutEdit: 41,
      testerTwoRejectedRate: 8,
      testerTwoScore: 5.13,
      selectedTesters: ['tester two']
    };
    this.updateCriteria = this.updateCriteria.bind(this);
    this.calculateTesterOne = this.calculateTesterOne.bind(this);
    this.calculateTesterTwo = this.calculateTesterTwo.bind(this);
  }

  updateCriteria(criteria, value) {
    const testerOneScore = this.calculateTesterOne(this.state, criteria, value);
    const testerTwoScore = this.calculateTesterTwo(this.state, criteria, value);
    let selectedTesters = [];
    if (testerOneScore > testerTwoScore) { selectedTesters = ["tester one"] }
    else if (testerOneScore === testerTwoScore) { selectedTesters = ["tester one", "tester two"] }
    else { selectedTesters = ["tester two"] }
    this.setState({
      [criteria]: value,
      testerOneScore: testerOneScore,
      testerTwoScore: testerTwoScore,
      selectedTesters: selectedTesters
    })
  }

  calculateTesterOne(data, newData, newValue) {
    let testerOneAcceptedWithoutEdit = parseInt(data.testerOneAcceptedWithoutEdit, 10),
        testerOneRejectedRate = parseInt(data.testerOneRejectedRate, 10);

    if(newData === "testerOneAcceptedWithoutEdit") { testerOneAcceptedWithoutEdit = parseInt(newValue, 10); }
    else if (newData === "testerOneRejectedRate") { testerOneRejectedRate = parseInt(newValue, 10); }

    return (testerOneAcceptedWithoutEdit / testerOneRejectedRate);
  }

  calculateTesterTwo(data, newData, newValue) {
    let testerTwoAcceptedWithoutEdit = parseInt(data.testerTwoAcceptedWithoutEdit, 10),
        testerTwoRejectedRate = parseInt(data.testerTwoRejectedRate, 10);

    if(newData === "testerTwoAcceptedWithoutEdit") { testerTwoAcceptedWithoutEdit = parseInt(newValue, 10); }
    else if (newData === "testerTwoRejectedRate") { testerTwoRejectedRate = parseInt(newValue, 10); }

    return (testerTwoAcceptedWithoutEdit / testerTwoRejectedRate);
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Product Science</h2>
        </div>
        <div className="App-body">
          {this.state.fetching
            ? <p>Loading..</p>
            : <div>
            <div className="App-sidebar">
              <h3>Tester selection</h3>
              <p>How to determine which testers to invite to checks first</p>
              <p>Divide the accepted_without_edit rate by the rejection_per_hundred rate</p>
              <p className="tester-identifier"><span className="dot dot-one"></span><span>Tester one</span></p>
              <span>Accepted w/o edit: {this.state.testerOneAcceptedWithoutEdit}%</span>
              <input type="range" value={this.state.testerOneAcceptedWithoutEdit} min={1} max={99} step={1} onChange={(e) => this.updateCriteria("testerOneAcceptedWithoutEdit", parseInt(e.target.value, 10))} />
              <span>Rejection rate per 100: {this.state.testerOneRejectedRate}%</span>
              <input type="range" value={this.state.testerOneRejectedRate} min={1} max={99} step={1} onChange={(e) => this.updateCriteria("testerOneRejectedRate", parseInt(e.target.value, 10))} />
              <p className="tester-identifier"><span className="dot dot-two"></span><span>Tester two</span></p>
              <span>Accepted w/o edit: {this.state.testerTwoAcceptedWithoutEdit}%</span>
              <input type="range" value={this.state.testerTwoAcceptedWithoutEdit} min={1} max={99} step={1} onChange={(e) => this.updateCriteria("testerTwoAcceptedWithoutEdit", parseInt(e.target.value, 10))} />
              <span>Rejection rate per 100: {this.state.testerTwoRejectedRate}%</span>
              <input type="range" value={this.state.testerTwoRejectedRate} min={1} max={99} step={1} onChange={(e) => this.updateCriteria("testerTwoRejectedRate", parseInt(e.target.value, 10))} />
            </div>
            <div className="App-main">
              <h3>Tester One = <span>{this.state.testerOneScore.toFixed(2)}</span> | Tester Two = <span>{this.state.testerTwoScore.toFixed(2)}</span></h3>
              <div className="Bugs actionable-results">
                <div className="Metric-box">
                  <strong>{this.state.testerOneAcceptedWithoutEdit}%</strong>
                  <span><span className="dot dot-one"></span>Tester One<br />Accepted w/o edit rate</span>
                </div>
                <div className="Metric-box">
                  <strong>{this.state.testerOneRejectedRate}%</strong>
                  <span><span className="dot dot-one"></span>Tester One<br />Rejection rate per 100</span>
                </div>
                <div className="Metric-box">
                  <strong>{this.state.testerTwoAcceptedWithoutEdit}%</strong>
                  <span><span className="dot dot-two"></span>Tester Two<br />Accepted w/o edit rate</span>
                </div>
                <div className="Metric-box">
                  <strong>{this.state.testerTwoRejectedRate}%</strong>
                  <span><span className="dot dot-two"></span>Tester Two<br />Rejection rate per 100</span>
                </div>
              </div>
              <h4>Selection</h4>
              <div className="Datasets actionable-results selectedTesters">
              {this.state.selectedTesters.map((tester,i) => {
                return <div key={i} className="Metric-box">
                  <strong>{tester} <span className={`outcome-label ${tester}`}>{tester}</span></strong>
                  <span>Based on the selection algorithm, this tester should be invited in the first wave</span>
                </div>
              })}
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    );
  }
}

export default ReproTests;
