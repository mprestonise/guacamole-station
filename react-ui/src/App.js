import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      calculations: {
        internalValue: 10,
        internalODValue: 10,
        externalValue: 10,
        externalODValue: 10,
        gatROI: 5.2,
        customerROI: 1.4,
        accepted: 1,
        odCost: 54,
        tsCost: 254,
        odPrice: 400,
        tsPrice: 800,
        odTurnaroundTime: 6,
        tsTurnaroundTime: 48,
        testingTimeMinutes: 60,
        customerTriageTimeMinutes: 10,
        customerODTriageTimeMinutes: 10,
        triageTimeSaved: 0,
        bugs: [{severity: 1, label: "Low", cost: 1, accepted: 1}],
        lowSeverity: 1,
        mediumSeverity: 0,
        highSeverity: 0,
        criticalSeverity: 0
      }
    };
    this.exampleData = this.exampleData.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    fetch('/api')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        const example = this.exampleData();
        const calculations = this.calculate(example);
        this.setState({
          calculations: calculations,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
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

  calculate(data) {
    const odTurnaroundTime = 6;
    const tsTurnaroundTime = 48;
    const touchTimeCost = data.touchTimeHours * 20;
    let value = 0,
        moderatedValue = 0,
        totalCost = 0,
        acceptedCost = 0,
        accepted = 0,
        lowSev = 0,
        mediumSev = 0,
        highSev = 0,
        criticalSev = 0;
    data.bugs.map((bug) => {
      if (bug.accepted > 0) {
        accepted = accepted + 1;
        acceptedCost = acceptedCost + bug.cost;
        moderatedValue = moderatedValue + bug.value;
        switch(bug.severity) {
          case 1:
            lowSev = lowSev + 1
            break
          case 2:
            mediumSev = mediumSev + 1
            break
          case 3:
            highSev = highSev + 1
            break
          case 4:
            criticalSev = criticalSev + 1
            break
          default:
            return false
        }
      }
      value = value + (bug.accepted * bug.value);
      totalCost = totalCost + bug.cost;
      return null;
    });
    // Assume 5 minutes of triage per bug, or 0.0833 hours
    const odTriageTime = data.bugs.length * 0.0833;
    const tsTriageTime = accepted * 0.0833;

    // Customer value as value of bugs / time
    const odValue = (value / (odTurnaroundTime + odTriageTime));
    const tsValue = (moderatedValue / (tsTurnaroundTime + tsTriageTime));

    return {
      internalValue: tsValue,
      internalODValue: odValue,
      externalValue: tsValue,
      externalODValue: odValue,
      gatODROI: (odValue / totalCost) * 100,
      gatTSROI: (tsValue / (acceptedCost + touchTimeCost)) * 100,
      customerODROI: (odValue / data.odPricePerTest) * 100,
      customerTSROI: (tsValue / data.tsPricePerTest) * 100,
      odTurnaroundTime: 6,
      tsTurnaroundTime: 48,
      accepted: accepted,
      odCost: totalCost,
      tsCost: acceptedCost + touchTimeCost,
      odPrice: data.odPricePerTest,
      tsPrice: data.tsPricePerTest,
      customerTriageTimeMinutes: tsTriageTime,
      customerODTriageTimeMinutes: odTriageTime,
      triageTimeSaved: odTriageTime - tsTriageTime,
      bugs: data.bugs,
      lowSeverity: lowSev,
      mediumSeverity: mediumSev,
      highSeverity: highSev,
      criticalSeverity: criticalSev
    }
  }

  render() {

    const {
      externalValue,
      externalODValue,
      accepted,
      gatODROI,
      gatTSROI,
      customerODROI,
      customerTSROI,
      odTurnaroundTime,
      tsTurnaroundTime,
      odCost,
      tsCost,
      odPrice,
      tsPrice,
      customerTriageTimeMinutes,
      customerODTriageTimeMinutes,
      bugs,
      lowSeverity,
      mediumSeverity,
      highSeverity,
      criticalSeverity
    } = this.state.calculations;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Product Science</h2>
        </div>
        <div className="App-body">
          {this.state.fetching
            ? <p>Loading..</p>
            : <div>
              <h3>Key metrics for a basic and advanced tests</h3>
              <p>Based a test where testers reported <strong>{bugs.length} bug{bugs.length > 1 ? "s" : null}</strong> and <strong>{accepted} bug{accepted > 1 ? "s were" : " was"}</strong> accepted as valuable to the customer the following metrics can be calculated</p>
              <div className="Bugs">
                <div className="Metric-box">
                  <strong>{criticalSeverity}</strong>
                  <span>Critical severity</span>
                </div>
                <div className="Metric-box">
                  <strong>{highSeverity}</strong>
                  <span>High severity</span>
                </div>
                <div className="Metric-box">
                  <strong>{mediumSeverity}</strong>
                  <span>Medium severity</span>
                </div>
                <div className="Metric-box">
                  <strong>{lowSeverity}</strong>
                  <span>Low severity</span>
                </div>
              </div>

              <div className="Calculations">
                <div className="Metric-box">
                  <strong>{customerODROI.toFixed(2)}</strong>
                  <span>Customer ROI (basic)</span>
                </div>
                <div className="Metric-box">
                  <strong>{customerTSROI.toFixed(2)}</strong>
                  <span>Customer ROI (advanced)</span>
                </div>
                <div className="Metric-box">
                  <strong>{gatODROI.toFixed(2)}</strong>
                  <span>GAT ROI (basic)</span>
                </div>
                <div className="Metric-box">
                  <strong>{gatTSROI.toFixed(2)}</strong>
                  <span>GAT ROI (advanced)</span>
                </div>
                <div className="Metric-box">
                  <strong>{externalODValue.toFixed(2)}</strong>
                  <span>Customer value (basic)</span>
                </div>
                <div className="Metric-box">
                  <strong>{externalValue.toFixed(2)}</strong>
                  <span>Customer value (advanced)</span>
                </div>
                <div className="Metric-box">
                  <strong>{odTurnaroundTime}h</strong>
                  <span>Turnaround time</span>
                </div>
                <div className="Metric-box">
                  <strong>{tsTurnaroundTime}h</strong>
                  <span>Turnaround time</span>
                </div>
                <div className="Metric-box">
                  <strong>{(customerODTriageTimeMinutes).toFixed(2)}h</strong>
                  <span>Customer triage time</span>
                </div>
                <div className="Metric-box">
                  <strong>{(customerTriageTimeMinutes).toFixed(2)}h</strong>
                  <span>Customer triage time</span>
                </div>
                <div className="Metric-box">
                  <strong><small>$</small>{odPrice}</strong>
                  <span>Basic test price</span>
                </div>
                <div className="Metric-box">
                  <strong><small>$</small>{tsPrice}</strong>
                  <span>Advanced test price</span>
                </div>
                <div className="Metric-box">
                  <strong><small>$</small>{odCost}</strong>
                  <span>On-demand cost</span>
                </div>
                <div className="Metric-box">
                  <strong><small>$</small>{tsCost}</strong>
                  <span>Tailored solutions cost</span>
                </div>
                <div className="Metric-box">
                  <strong>{((((odCost - odPrice) * -1) / odPrice) * 100).toFixed(0)}<small>%</small></strong>
                  <span>On-demand margin</span>
                </div>
                <div className="Metric-box">
                  <strong>{((((tsCost - tsPrice) * -1) / tsPrice) * 100).toFixed(0)}<small>%</small></strong>
                  <span>Tailored solutions margin</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
