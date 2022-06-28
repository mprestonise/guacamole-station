import React, { Component } from 'react';
import './App.css';
import Lighthouse from './alan-sandbox-lighthouse.js';
import NetworkRequests from './alan-sandbox-har.js';

class TestData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actionableThreshold: 75
    };
    this.calculate = this.calculate.bind(this);
    this.slowestNR = this.slowestNR.bind(this);
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

  slowestNR() {
    const slowest = Math.max.apply(Math, NetworkRequests.log.entries.map(function(o) { return o.time; }))
    return slowest.toFixed(2);
  }

  failedNR() {
    const entries = NetworkRequests.log.entries.map(entry => entry.response.status !== 200);
    return entries.filter(entry => entry == true).length;
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
              <h3>Test data</h3>
              <p>Exploring Network request data (HAR), Lighthouse data, Puppeteer performance data, and a Puppeteer script recording</p>
            </div>
            <div className="App-main">
              <h3>Test data output</h3>
              <div className="test-data-output">
                <img src={Lighthouse.audits["final-screenshot"].details.data} alt="Screenshot" width="240" />
                <span>URL tested</span>
                <span className="glossary-title">{Lighthouse.requestedUrl}</span>
                <span>User Agent</span>
                <span className="glossary-title">{Lighthouse.userAgent}</span>
                <span>Console errors</span>
                <span className="glossary-title">{Lighthouse.audits["errors-in-console"].title}</span>
                <span>Network requests</span>
                <span className="glossary-title">{NetworkRequests.log.entries.length}</span>
                <span>Failed network requests</span>
                <span className="glossary-title">{this.failedNR()}</span>
                <span>Slowest network request</span>
                <span className="glossary-title">{this.slowestNR()}ms</span>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    );
  }
}

export default TestData;
