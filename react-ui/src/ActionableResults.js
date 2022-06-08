import React, { Component } from 'react';
import './App.css';

class ActionableResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionableThreshold: 75,
      testerAR: 66,
      issueSeverity: 200,
      reproScore: 100,
      relevancyScore: 66,
      issueScore: 66
    };
    this.updateCriteria = this.updateCriteria.bind(this);
    this.severityLabel = this.severityLabel.bind(this);
    this.reproLabel = this.reproLabel.bind(this);
    this.exampleData = this.exampleData.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    /* fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        const example = this.exampleData();
        const calculation = this.calculate(example);
        this.setState({
          data: example,
          issueScore: calculation,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      }) */
  }

  updateCriteria(criteria, value) {
    console.log(value);
    this.setState({
      [criteria]: value,
      issueScore: this.calculate(this.state, criteria, value)
    })
  }

  severityLabel(severity) {
    let label = "";
    switch(severity) {
      case 0:
        label = "Low";
        break;
      case 100:
        label = "Medium";
        break;
      case 200:
        label = "High";
        break;
      case 300:
        label = "Critical";
        break;
      default:
        label = "Low";
        break;
    }
    return label;
  }
  reproLabel(score) {
    let label = "";
    switch(score) {
      case -100:
        label = "0 of 3";
        break;
      case 0:
        label = "1 of 3";
        break;
      case 100:
        label = "2 of 3";
        break;
      case 200:
        label = "3 of 3";
        break;
      default:
        label = "2 of 3";
        break;
    }
    return label;
  }

  exampleData() {
    const bugCount = Math.floor(Math.random() * (30 - 9 + 1) + 9);
    const bugData = [];
    for (var i = 0; i < bugCount; i++) {
      const severity = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      let severityLabel = "Low";
      let bugCost = 1;
      let bugValue = 10;
      switch(severity) {
        case 1:
          severityLabel = "Low";
          bugCost = 1;
          bugValue = 10;
          break
        case 2:
          severityLabel = "Medium";
          bugCost = 2;
          bugValue = 25;
          break
        case 3:
          severityLabel = "High";
          bugCost = 8;
          bugValue = 100;
          break
        case 4:
          severityLabel = "Critical";
          bugCost = 16;
          bugValue = 250;
          break
        default:
          severityLabel = "Low";
          bugCost = 1;
          bugValue = 10;
      }
      bugData.push({
        severity: severity,
        label: severityLabel,
        cost: bugCost,
        value: bugValue,
        accepted: Math.random() < 0.5 ? -0.5 : 1
      })
    }
    return {
      bugs: bugData,
      touchTimeHours: 8,
      odPricePerTest: 400,
      tsPricePerTest: 800
    }
  }

  calculate(data, newData, newValue) {
    let testerAR = parseInt(data.testerAR, 10),
        issueSeverity = parseInt(data.issueSeverity, 10),
        reproScore = parseInt(data.reproScore, 10),
        relevancyScore = parseInt(data.relevancyScore, 10);
    switch(newData) {
      case "testerAR":
        testerAR = parseInt(newValue, 10);
        break;
      case "issueSeverity":
        issueSeverity = parseInt(newValue, 10);
        break;
      case "reproScore":
        reproScore = parseInt(newValue, 10);
        break;
      case "relevancyScore":
        relevancyScore = parseInt(newValue, 10);
        break;
      default:
        break;
    }
    let score = testerAR + issueSeverity + reproScore + relevancyScore;
    console.log(score);
    console.log("testerAR", testerAR);
    console.log("issueSeverity", issueSeverity);
    console.log("reproScore", reproScore);
    console.log("relevancyScore", relevancyScore);
    return ((score / 800) * 100).toFixed(0);
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
              <h3>Actionable Results model</h3>
              <p>Change the values below to see how they affect the actionable score</p>
              <span>Actionable threshold: {this.state.actionableThreshold}%</span>
              <input type="range" value={this.state.actionableThreshold} min={1} max={99} step={1} onChange={(e) => this.updateCriteria("actionableThreshold", parseInt(e.target.value, 10))} />
              <small>This is the threshold at which an issue becomes "actionable"</small>
              <span>Reporting tester AR: {this.state.testerAR}%</span>
              <input type="range" value={this.state.testerAR} min={0} max={100} step={1} onChange={(e) => this.updateCriteria("testerAR", parseInt(e.target.value, 10))} />
              <span>Issue severity: {this.severityLabel(this.state.issueSeverity)}</span>
              <input type="range" value={this.state.issueSeverity} min={0} max={300} step={100} onChange={(e) => this.updateCriteria("issueSeverity", parseInt(e.target.value, 10))} />
              <span>Reproducibility: {this.reproLabel(this.state.reproScore)}</span>
              <input type="range" value={this.state.reproScore} min={-100} max={200} step={100} onChange={(e) => this.updateCriteria("reproScore", parseInt(e.target.value, 10))} />
              <span>Env relevancy: {this.state.relevancyScore}%</span>
              <input type="range" value={this.state.relevancyScore} min={0} max={100} step={1} onChange={(e) => this.updateCriteria("relevancyScore", parseInt(e.target.value, 10))} />
            </div>
            <div className="App-main">
              <h3>Issue score: <span>{this.state.issueScore}%</span> <span className={`outcome-label ${this.state.issueScore > this.state.actionableThreshold ? "actionable" : "non-actionable"}`}>{this.state.issueScore > this.state.actionableThreshold ? "Actionable" : "Not-Actionable"}</span></h3>
              <div className="Bugs actionable-results">
                <div className="Metric-box">
                  <strong>{this.state.testerAR}%</strong>
                  <span>Reporting tester AR</span>
                </div>
                <div className="Metric-box">
                  <strong>{this.severityLabel(this.state.issueSeverity)}</strong>
                  <span>Issue severity</span>
                </div>
                <div className="Metric-box">
                  <strong>{this.reproLabel(this.state.reproScore)}</strong>
                  <span>Reproducibility</span>
                </div>
                <div className="Metric-box">
                  <strong>{this.state.relevancyScore}%</strong>
                  <span>Env relevancy</span>
                </div>
              </div>
              <h4>Glossary</h4>
              <div className="Datasets actionable-results">
                <div className="Metric-box">
                  <span className="glossary-title">Reporting Tester AR</span>
                  <span>What is the actionable results rate of this tester? For example, out of all the issues they have reported, how many have been actionable?</span>
                </div>
                <div className="Metric-box">
                  <span className="glossary-title">Env relevancy</span>
                  <span>How relevant is the environment this issue was found on? For example, Chrome has a global market share of ~65%. The market share per customer and their user base may be very different</span>
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    );
  }
}

export default ActionableResults;
