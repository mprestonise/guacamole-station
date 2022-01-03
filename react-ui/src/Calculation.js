import React, { Component } from 'react';
import './App.css';

class Calculation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      basicTurnaroundTime: 6,
      advancedTurnaroundTime: 48,
      touchTimeHourlyCost: 20,
      touchTimeHours: 8,
      basicPricePerTest: 400,
      advancedPricePerTest: 800,
      datasets: []
    };
    this.generateData = this.generateData.bind(this);
    this.cloneAndSetAcceptanceRates = this.cloneAndSetAcceptanceRates.bind(this);
    this.setAR = this.setAR.bind(this);
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
        const datasets = this.generateData();
        const preparedDatasets = this.cloneAndSetAcceptanceRates(datasets);
        const calculatedHighAR = this.calculate(preparedDatasets[0]);
        const calculatedLowAR = this.calculate(preparedDatasets[1]);
        const calculatedRandomAR = this.calculate(preparedDatasets[2]);
        this.setState({
          datasets: [calculatedHighAR, calculatedLowAR, calculatedRandomAR],
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }

  generateData() {
    const bugCount = Math.floor(Math.random() * (50 - 9 + 1) + 9);
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
        accepted: false
      })
    }
    return {
      bugs: bugData
    }
  }

  setAR(bug, threshold) {
    const randomValueForAR = Math.random()
    const isAccepted = randomValueForAR > threshold;
    const newBug = {
      severity: bug.severity,
      label: bug.label,
      cost: bug.cost,
      value: bug.value,
      accepted: isAccepted
    };
    return newBug;
  }

  cloneAndSetAcceptanceRates(source) {
    const highAR = source.bugs.map(bug => this.setAR(bug, 0.20));
    const lowAR = source.bugs.map(bug => this.setAR(bug, 0.80));
    const randomAR = source.bugs.map(bug => this.setAR(bug, 0.50));
    const output = [highAR, lowAR, randomAR];
    return output;
  }

  calculate(dataset) {
    let value = 0,          // value of all bugs
        moderatedValue = 0, // value of accepted bugs
        totalCost = 0,      // cost of all bugs
        acceptedCost = 0,   // cost of the accepted bugs
        accepted = 0,       // number of accepted bugs
        lowSev = 0,         // number of accepted low severity bugs
        mediumSev = 0,      // number of accepted medium severity bugs
        highSev = 0,        // number of accepted high severity bugs
        criticalSev = 0,    // number of accepted critical severity bugs
        lowTotal = 0,       // number of reported low severity bugs
        mediumTotal = 0,    // number of reported medium severity bugs
        highTotal = 0,      // number of reported high severity bugs
        criticalTotal = 0;  // number of reported critical severity bugs
    dataset.map((bug) => {
      if (bug.accepted) {
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
      const arModifier = bug.accepted ? 1 : -0.5;
      value = value + (arModifier * bug.value);
      totalCost = totalCost + bug.cost;
      lowTotal = bug.severity === 1 ? lowTotal + 1 : lowTotal
      mediumTotal = bug.severity === 2 ? mediumTotal + 1 : mediumTotal
      highTotal = bug.severity === 3 ? highTotal + 1 : highTotal
      criticalTotal = bug.severity === 4 ? criticalTotal + 1 : criticalTotal
      return null;
    });
    // Assume 5 minutes of triage per bug, or 0.0833 hours
    const basicTriageTime = dataset.length * 0.0833;
    const advancedTriageTime = accepted * 0.0833;

    // Customer value as value of bugs / time
    const basicValue = (value / (this.state.basicTurnaroundTime + basicTriageTime));
    const advancedValue = (moderatedValue / ((this.state.advancedTurnaroundTime + advancedTriageTime) / 2));
    const touchTimeCost = this.state.touchTimeHours * this.state.touchTimeHourlyCost;
    const basicCostPerCritical = (this.state.basicPricePerTest / (((criticalSev * 250) + (highSev * 100)) / 250));
    const advancedCostPerCritical = (this.state.advancedPricePerTest / (((criticalSev * 250) + (highSev * 100)) / 250));

    return {
      bugs: dataset,
      basicCostPerCritical: basicCostPerCritical > 0 ? basicCostPerCritical : 400,
      basicNonAdjustedROI: value / this.state.basicPricePerTest,
      basicAdjustedROI: ((value - (this.state.basicTurnaroundTime + basicTriageTime)) / this.state.basicPricePerTest) / 2,
      basicCustomerROI: basicValue / this.state.basicPricePerTest,
      basicCustomerValue: basicValue,
      basicGATROI: (basicValue / totalCost) * 100,
      basicGATValue: basicValue,
      basicCost: totalCost,
      basicCustomerTriageTimeMinutes: basicTriageTime,
      advancedCostPerCritical: advancedCostPerCritical > 0 ? advancedCostPerCritical : 800,
      advancedNonAdjustedROI: moderatedValue / this.state.advancedPricePerTest,
      advancedAdjustedROI: ((moderatedValue - (this.state.advancedTurnaroundTime + advancedTriageTime)) / this.state.advancedPricePerTest),
      advancedCustomerROI: advancedValue / this.state.advancedPricePerTest,
      advancedGATValue: advancedValue,
      advancedCustomerValue: advancedValue,
      advancedGATROI: (advancedValue / (acceptedCost + touchTimeCost)) * 100,
      advancedCost: acceptedCost + touchTimeCost,
      advancedCustomerTriageTime: advancedTriageTime,
      triageTimeSaved: basicTriageTime - advancedTriageTime,
      accepted: accepted,
      lowSeverity: lowSev,
      mediumSeverity: mediumSev,
      highSeverity: highSev,
      criticalSeverity: criticalSev,
      lowTotal: lowTotal,
      mediumTotal: mediumTotal,
      highTotal: highTotal,
      criticalTotal: criticalTotal
    }
  }

  render() {

    const {
      datasets
    } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <h2>Product Science</h2>
        </div>
        <div className="App-body">
          {this.state.fetching
            ? <p>Loading..</p>
            : <div>
              <h3>ROI metrics for basic and advanced tests</h3>
              <p>Based a test where testers reported <strong>{datasets[0].bugs.length} bug{datasets[0].bugs.length > 1 ? "s" : null}</strong>:</p>
              <div className="Bugs">
                <div className="Metric-box">
                  <strong>{datasets[0].criticalTotal}</strong>
                  <span>Critical severity</span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[0].highTotal}</strong>
                  <span>High severity</span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[0].mediumTotal}</strong>
                  <span>Medium severity</span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[0].lowTotal}</strong>
                  <span>Low severity</span>
                </div>
              </div>

              <p>Consider these three different cases:</p>
              <div className="Datasets">
                <div className="Metric-box">
                  <strong>{(((datasets[0].criticalSeverity + datasets[0].highSeverity + datasets[0].mediumSeverity + datasets[0].lowSeverity) / datasets[0].bugs.length) * 100).toFixed(1)}%</strong>
                  <span>Acceptance rate</span>
                </div>
                <div className="Metric-box">
                  <strong>{(((datasets[1].criticalSeverity + datasets[1].highSeverity + datasets[1].mediumSeverity + datasets[1].lowSeverity) / datasets[0].bugs.length) * 100).toFixed(1)}%</strong>
                  <span>Acceptance rate</span>
                </div>
                <div className="Metric-box">
                  <strong>{(((datasets[2].criticalSeverity + datasets[2].highSeverity + datasets[2].mediumSeverity + datasets[2].lowSeverity) / datasets[0].bugs.length) * 100).toFixed(1)}%</strong>
                  <span>Acceptance rate</span>
                </div>
              </div>

              <p>The following metrics can be calculated for each case:</p>
              <div className="Datasets">
                <div className="Metric-box">
                  <strong>Case #1</strong>
                  <span>High acceptance rate</span>
                  <span>Accepted bugs: <span>{datasets[0].criticalSeverity + datasets[0].highSeverity + datasets[0].mediumSeverity + datasets[0].lowSeverity}</span></span>
                  <span>Critical: {datasets[0].criticalSeverity} / {datasets[0].criticalTotal}</span>
                  <span>High: {datasets[0].highSeverity} / {datasets[0].highTotal}</span>
                  <span>Medium: {datasets[0].mediumSeverity} / {datasets[0].mediumTotal}</span>
                  <span>Low: {datasets[0].lowSeverity} / {datasets[0].lowTotal}</span>
                </div>
                <div className="Metric-box">
                  <strong>Case #2</strong>
                  <span>Low acceptance rate</span>
                  <span>Accepted bugs: <span>{datasets[1].criticalSeverity + datasets[1].highSeverity + datasets[1].mediumSeverity + datasets[1].lowSeverity}</span></span>
                  <span>Critical: {datasets[1].criticalSeverity} / {datasets[0].criticalTotal}</span>
                  <span>High: {datasets[1].highSeverity} / {datasets[0].highTotal}</span>
                  <span>Medium: {datasets[1].mediumSeverity} / {datasets[0].mediumTotal}</span>
                  <span>Low: {datasets[1].lowSeverity} / {datasets[0].lowTotal}</span>
                </div>
                <div className="Metric-box">
                  <strong>Case #3</strong>
                  <span>Random acceptance rate</span>
                  <span>Accepted bugs: <span>{datasets[2].criticalSeverity + datasets[2].highSeverity + datasets[2].mediumSeverity + datasets[2].lowSeverity}</span></span>
                  <span>Critical: {datasets[2].criticalSeverity} / {datasets[0].criticalTotal}</span>
                  <span>High: {datasets[2].highSeverity} / {datasets[0].highTotal}</span>
                  <span>Medium: {datasets[2].mediumSeverity} / {datasets[0].mediumTotal}</span>
                  <span>Low: {datasets[2].lowSeverity} / {datasets[0].lowTotal}</span>
                </div>
              </div>
              <p>The different ROI metrics can be compared against each other:</p>
              <div className="Charts">
                <div className="Metric-box">
                  <div className="Chart-body">
                    <div className="Chart-chart-1">
                      <div title="Basic non-adjusted ROI" className="basic-non-adjusted" style={{height: (10*datasets[0].basicNonAdjustedROI)+"%"}}></div>
                    </div>
                    <div className="Chart-chart-2">
                      <div title="Basic adjusted ROI" className="basic-adjusted" style={{height: (10*datasets[0].basicAdjustedROI)+"%"}}></div>
                    </div>
                    {/* HIDE CROI for now <div title="Basic customer ROI" className="basic-customer-roi" style={{height: (10*datasets[0].basicCustomerROI)+"%"}}></div> */}
                    <div className="Chart-chart-3">
                      <div title="Advanced non-adjusted ROI" className="advanced-non-adjusted" style={{height: (10*datasets[0].advancedNonAdjustedROI)+"%"}}></div>
                    </div>
                    <div className="Chart-chart-4">
                      <div title="Advanced adjusted ROI" className="advanced-adjusted" style={{height: (10*datasets[0].advancedAdjustedROI)+"%"}}></div>
                    </div>
                    {/* HIDE CROI for now <div title="Advanced customer ROI" className="advanced-customer-roi" style={{height: (10*datasets[0].advancedCustomerROI)+"%"}}></div> */}
                  </div>
                </div>
                <div className="Metric-box">
                  <div className="Chart-body">
                  <div className="Chart-chart-1">
                    <div title="Basic non-adjusted ROI" className="basic-non-adjusted" style={{height: (10*datasets[1].basicNonAdjustedROI)+"%"}}></div>
                  </div>
                  <div className="Chart-chart-2">
                    <div title="Basic adjusted ROI" className="basic-adjusted" style={{height: (10*datasets[1].basicAdjustedROI)+"%"}}></div>
                  </div>
                  {/* HIDE CROI for now <div title="Basic customer ROI" className="basic-customer-roi" style={{height: (10*datasets[1].basicCustomerROI)+"%"}}></div> */}
                  <div className="Chart-chart-3">
                    <div title="Advanced non-adjusted ROI" className="advanced-non-adjusted" style={{height: (10*datasets[1].advancedNonAdjustedROI)+"%"}}></div>
                  </div>
                  <div className="Chart-chart-4">
                    <div title="Advanced adjusted ROI" className="advanced-adjusted" style={{height: (10*datasets[1].advancedAdjustedROI)+"%"}}></div>
                  </div>
                  {/* HIDE CROI for now <div title="Advanced customer ROI" className="advanced-customer-roi" style={{height: (10*datasets[1].advancedCustomerROI)+"%"}}></div> */}
                  </div>
                </div>
                <div className="Metric-box">
                  <div className="Chart-body">
                  <div className="Chart-chart-1">
                    <div title="Basic non-adjusted ROI" className="basic-non-adjusted" style={{height: (10*datasets[2].basicNonAdjustedROI)+"%"}}></div>
                  </div>
                  <div className="Chart-chart-2">
                    <div title="Basic adjusted ROI" className="basic-adjusted" style={{height: (10*datasets[2].basicAdjustedROI)+"%"}}></div>
                  </div>
                  {/* HIDE CROI for now <div title="Basic customer ROI" className="basic-customer-roi" style={{height: (10*datasets[2].basicCustomerROI)+"%"}}></div> */}
                  <div className="Chart-chart-3">
                    <div title="Advanced non-adjusted ROI" className="advanced-non-adjusted" style={{height: (10*datasets[2].advancedNonAdjustedROI)+"%"}}></div>
                  </div>
                  <div className="Chart-chart-4">
                    <div title="Advanced adjusted ROI" className="advanced-adjusted" style={{height: (10*datasets[2].advancedAdjustedROI)+"%"}}></div>
                  </div>
                  {/* HIDE CROI for now <div title="Advanced customer ROI" className="advanced-customer-roi" style={{height: (10*datasets[2].advancedCustomerROI)+"%"}}></div> */}
                  </div>
                </div>
              </div>
              <p>The values for each different ROI metric for <strong>Basic</strong> tests:</p>
              <div className="Calculations">
                {/* Cost per critical issue */}
                <div className="Metric-box">
                  <strong>${datasets[0].basicCostPerCritical.toFixed(2)}</strong>
                  <span><span>Basic</span> Cost-per-critical</span>
                  <span className="explainer">This is the <strong>price of the test</strong>($400) divided by the <strong>number of critical bugs</strong> accepted by the customer</span>
                </div>
                <div className="Metric-box">
                  <strong>${datasets[1].basicCostPerCritical.toFixed(2)}</strong>
                  <span><span>Basic</span> Cost-per-critical</span>
                  <span className="explainer">This is the <strong>price of the test</strong>($400) divided by the <strong>number of critical bugs</strong> accepted by the customer</span>
                </div>
                <div className="Metric-box">
                  <strong>${datasets[2].basicCostPerCritical.toFixed(2)}</strong>
                  <span><span>Basic</span> Cost-per-critical</span>
                  <span className="explainer">This is the <strong>price of the test</strong>($400) divided by the <strong>number of critical bugs</strong> accepted by the customer</span>
                </div>
                {/* Basic testing ROI */}
                <div className="Metric-box">
                  <strong>{datasets[0].basicNonAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot BNAROI"></span> <span>Basic</span> Non-adjusted ROI</span>
                  <span className="explainer">This is the <strong>unmoderated value of the bugs</strong> (can go negative) divided by the <strong>price of the test</strong>($400)</span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[1].basicNonAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot BNAROI"></span> <span>Basic</span> Non-adjusted ROI</span>
                  <span className="explainer">This is the <strong>unmoderated value of the bugs</strong> (can go negative) divided by the <strong>price of the test</strong>($400)</span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[2].basicNonAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot BNAROI"></span> <span>Basic</span> Non-adjusted ROI</span>
                  <span className="explainer">This is the <strong>unmoderated value of the bugs</strong> (can go negative) divided by the <strong>price of the test</strong>($400)</span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[0].basicAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot BAROI"></span> <span>Basic</span> Adjusted ROI</span>
                  <span className="explainer">This is the <strong>unmoderated value of the bugs</strong> (can go negative) minus the <strong>turnaround and triage time</strong> divided by the <strong>price of the test</strong>($400) and modified based on the <strong>ratio model</strong></span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[1].basicAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot BAROI"></span> <span>Basic</span> Adjusted ROI</span>
                  <span className="explainer">This is the <strong>unmoderated value of the bugs</strong> (can go negative) minus the <strong>turnaround and triage time</strong> divided by the <strong>price of the test</strong>($400) and modified based on the <strong>ratio model</strong></span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[2].basicAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot BAROI"></span> <span>Basic</span> Adjusted ROI</span>
                  <span className="explainer">This is the <strong>unmoderated value of the bugs</strong> (can go negative) minus the <strong>turnaround and triage time</strong> divided by the <strong>price of the test</strong>($400) and modified based on the <strong>ratio model</strong></span>
                </div>
                {/* HIDE CROI for now
                <div className="Metric-box">
                  <strong>{datasets[0].basicCustomerROI.toFixed(2)}:1</strong>
                  <span><span className="dot BCROI"></span> <span>Basic</span> Customer ROI</span>
                  <span className="explainer">This is (the <strong>value of the bugs</strong> divided by the <strong>turnaround and triage time</strong>) divided by the <strong>price of the test</strong>($400) and modified based on the <strong>ratio model</strong></span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[1].basicCustomerROI.toFixed(2)}:1</strong>
                  <span><span className="dot BCROI"></span> <span>Basic</span> Customer ROI</span>
                  <span className="explainer">This is (the <strong>value of the bugs</strong> divided by the <strong>turnaround and triage time</strong>) divided by the <strong>price of the test</strong>($400) and modified based on the <strong>ratio model</strong></span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[2].basicCustomerROI.toFixed(2)}:1</strong>
                  <span><span className="dot BCROI"></span> <span>Basic</span> Customer ROI</span>
                  <span className="explainer">This is (the <strong>value of the bugs</strong> divided by the <strong>turnaround and triage time</strong>) divided by the <strong>price of the test</strong>($400) and modified based on the <strong>ratio model</strong></span>
                </div>
                */}
              </div>
              <p>The values for each different ROI metric for <strong>Advanced</strong> tests:</p>
              <div className="Calculations">
                {/* Cost per critical issue */}
                <div className="Metric-box">
                  <strong>${datasets[0].advancedCostPerCritical.toFixed(2)}</strong>
                  <span><span>Advanced</span> Cost-per-critical</span>
                  <span className="explainer">This is the <strong>price of the test</strong>($400) divided by the <strong>number of critical bugs</strong> accepted by the customer</span>
                </div>
                <div className="Metric-box">
                  <strong>${datasets[1].advancedCostPerCritical.toFixed(2)}</strong>
                  <span><span>Advanced</span> Cost-per-critical</span>
                  <span className="explainer">This is the <strong>price of the test</strong>($400) divided by the <strong>number of critical bugs</strong> accepted by the customer</span>
                </div>
                <div className="Metric-box">
                  <strong>${datasets[2].advancedCostPerCritical.toFixed(2)}</strong>
                  <span><span>Advanced</span> Cost-per-critical</span>
                  <span className="explainer">This is the <strong>price of the test</strong>($400) divided by the <strong>number of critical bugs</strong> accepted by the customer</span>
                </div>
                {/* Advanced testing ROI */}
                <div className="Metric-box">
                  <strong>{datasets[0].advancedNonAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot ANAROI"></span> <span>Advanced</span> Non-adjusted ROI</span>
                  <span className="explainer">This is the <strong>moderated value of the bugs</strong> divided by the <strong>price of the test</strong>($800)</span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[1].advancedNonAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot ANAROI"></span> <span>Advanced</span> Non-adjusted ROI</span>
                  <span className="explainer">This is the <strong>moderated value of the bugs</strong> divided by the <strong>price of the test</strong>($800)</span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[2].advancedNonAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot ANAROI"></span> <span>Advanced</span> Non-adjusted ROI</span>
                  <span className="explainer">This is the <strong>moderated value of the bugs</strong> divided by the <strong>price of the test</strong>($800)</span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[0].advancedAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot AAROI"></span> <span>Advanced</span> Adjusted ROI</span>
                  <span className="explainer">This is the <strong>moderated alue of the bugs</strong> minus the <strong>turnaround and triage time</strong> divided by the <strong>price of the test</strong>($800) and modified based on the <strong>ratio model</strong></span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[1].advancedAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot AAROI"></span> <span>Advanced</span> Adjusted ROI</span>
                  <span className="explainer">This is the <strong>moderated alue of the bugs</strong> minus the <strong>turnaround and triage time</strong> divided by the <strong>price of the test</strong>($800) and modified based on the <strong>ratio model</strong></span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[2].advancedAdjustedROI.toFixed(2)}:1</strong>
                  <span><span className="dot AAROI"></span> <span>Advanced</span> Adjusted ROI</span>
                  <span className="explainer">This is the <strong>moderated alue of the bugs</strong> minus the <strong>turnaround and triage time</strong> divided by the <strong>price of the test</strong>($800) and modified based on the <strong>ratio model</strong></span>
                </div>
                {/* HIDE CROI for now
                <div className="Metric-box">
                  <strong>{datasets[0].advancedCustomerROI.toFixed(2)}:1</strong>
                  <span><span className="dot ACROI"></span> <span>Advanced</span> Customer ROI</span>
                  <span className="explainer">This is (the <strong>moderated value of the bugs</strong> divided by the <strong>turnaround and triage time</strong>) divided by the <strong>price of the test</strong>($800) and modified based on the <strong>ratio model</strong></span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[1].advancedCustomerROI.toFixed(2)}:1</strong>
                  <span><span className="dot ACROI"></span> <span>Advanced</span> Customer ROI</span>
                  <span className="explainer">This is (the <strong>moderated value of the bugs</strong> divided by the <strong>turnaround and triage time</strong>) divided by the <strong>price of the test</strong>($800) and modified based on the <strong>ratio model</strong></span>
                </div>
                <div className="Metric-box">
                  <strong>{datasets[2].advancedCustomerROI.toFixed(2)}:1</strong>
                  <span><span className="dot ACROI"></span> <span>Advanced</span> Customer ROI</span>
                  <span className="explainer">This is (the <strong>moderated value of the bugs</strong> divided by the <strong>turnaround and triage time</strong>) divided by the <strong>price of the test</strong>($800) and modified based on the <strong>ratio model</strong></span>
                </div> */}
                {/* <div className="Metric-box">
                  <strong>{((((odCost - odPrice) * -1) / odPrice) * 100).toFixed(0)}<small>%</small></strong>
                  <span>On-demand margin</span>
                </div>
                <div className="Metric-box">
                  <strong>{((((tsCost - tsPrice) * -1) / tsPrice) * 100).toFixed(0)}<small>%</small></strong>
                  <span>Tailored solutions margin</span>
                </div>*/}
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Calculation;
