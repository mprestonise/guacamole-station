import React, { Component } from 'react';
import './App.css';

class ActionableResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionableThreshold: 75,
      testerAR: 66,
      issueSeverity: 3,
      reproScore: 100,
      totalIssuesReported: 63,
      issueScore: 21
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
    this.setState({
      [criteria]: value,
      issueScore: this.calculate(this.state, criteria, value)
    })
  }

  severityLabel(severity) {
    let label = "";
    switch(severity) {
      case 1:
        label = "Low";
        break;
      case 2:
        label = "Medium";
        break;
      case 3:
        label = "High";
        break;
      case 4:
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
        totalReported = parseInt(data.totalIssuesReported, 10);
        totalReported = totalReported > 100 ? 100 : totalReported;

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
      case "totalIssuesReported":
        totalReported = parseInt(newValue, 10);
        totalReported = totalReported > 100 ? 100 : totalReported;
        break;
      default:
        break;
    }

    switch(issueSeverity) {
      case 1:
        issueSeverity = 1
        break;
      case 2:
        issueSeverity = 2
        break;
      case 3:
        console.log("issueSeverity was 3");
        issueSeverity = 4
        break;
      case 4:
        console.log("issueSeverity was 4");
        issueSeverity = 8
        break;
      default:
        issueSeverity = 1
        break;
    }

    let score = totalReported * issueSeverity * (testerAR / 100);

    console.log("totalReported * issueSeverity * (testerAR / 100)");
    console.log(totalReported, issueSeverity, (testerAR / 100));
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
              <p>Change the values below to see how they affect the probability of the issue being actioned</p>
              <span>Actionable threshold: {this.state.actionableThreshold}%</span>
              <input type="range" value={this.state.actionableThreshold} min={1} max={99} step={1} onChange={(e) => this.updateCriteria("actionableThreshold", parseInt(e.target.value, 10))} />
              <small>This is the threshold at which an issue becomes "actionable"</small>
              <span>Reporting tester AR: {this.state.testerAR}%</span>
              <input type="range" value={this.state.testerAR} min={0} max={100} step={1} onChange={(e) => this.updateCriteria("testerAR", parseInt(e.target.value, 10))} />
              <span>Total issues reported: {this.state.totalIssuesReported}</span>
              <input type="range" value={this.state.totalIssuesReported} min={0} max={250} step={1} onChange={(e) => this.updateCriteria("totalIssuesReported", parseInt(e.target.value, 10))} />
              <span>Issue severity: {this.severityLabel(this.state.issueSeverity)}</span>
              <input type="range" value={this.state.issueSeverity} min={1} max={4} step={1} onChange={(e) => this.updateCriteria("issueSeverity", parseInt(e.target.value, 10))} />
              {/* <span>Reproducibility: {this.reproLabel(this.state.reproScore)}</span>
              <input type="range" value={this.state.reproScore} min={-100} max={200} step={100} onChange={(e) => this.updateCriteria("reproScore", parseInt(e.target.value, 10))} /> */}
            </div>
            <div className="App-main">
              <h3>P ( ACTIONED | RESULT ) = <span>{this.state.issueScore}%</span> <span className={`outcome-label ${this.state.issueScore > this.state.actionableThreshold ? "actionable" : "non-actionable"}`}>{this.state.issueScore > this.state.actionableThreshold ? "Actioned" : "Not-Actioned"}</span></h3>
              <div className="Bugs actionable-results">
                <div className="Metric-box">
                  <strong>{this.state.testerAR}%</strong>
                  <span>Reporting tester AR</span>
                </div>
                <div className="Metric-box">
                  <strong>{this.state.totalIssuesReported}</strong>
                  <span># issues reported</span>
                </div>
                <div className="Metric-box">
                  <strong>{this.severityLabel(this.state.issueSeverity)}</strong>
                  <span>Issue severity</span>
                </div>
                {/* <div className="Metric-box">
                  <strong>{this.reproLabel(this.state.reproScore)}</strong>
                  <span>Reproducibility</span>
                </div> */}
              </div>
              <h4>Glossary</h4>
              <div className="Datasets actionable-results">
                <div className="Metric-box">
                  <span className="glossary-title">Reporting Tester AR</span>
                  <span>What is the actioned results rate of this tester? For example, out of all the issues they have reported, how many have been actioned by the customer?</span>
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
