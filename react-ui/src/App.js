import React, { Component } from 'react';
import { Pane, Heading, Text, TextInput, Select, Switch, Strong, majorScale } from 'evergreen-ui'
import NewIssueForm from './NewIssueForm'
import KnownIssuesList from './KnownIssuesList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similarityThreshold: 0.5,
      useActualResult: false,
      model: 'https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2',
      knownIssues: [
        {
          id: 1,
          summary: 'Tiramisu image does not load',
          steps: `1. Go to the 'Recipes' page\n2. Go to the second page\n3. The 'Tiramisu' recipe image does not load`,
          expected: 'The recipe image should load successfully',
          actual: `The image for the 'Tiramisu' recipe fails to load`,
          duplicates: []
        },
        {
          id: 2,
          summary: "The 'Contact' page fails to load",
          steps: `1. Click on the 'Contact' link in the footer\n2. The page gets stuck in infinite loading`,
          expected: 'The Contact page should load',
          actual: `The 'Contact' page gets stuck in infinite loading`,
          duplicates: []
        }
      ],
      newIssue: {
        id: 3,
        summary: '',
        steps: '',
        expected: '',
        actual: '',
        duplicates: []
      }
    };
    this.updateNewIssueValue = this.updateNewIssueValue.bind(this);
    this.reportIssue = this.reportIssue.bind(this);
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
        })
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        })
      })
  }

  updateNewIssueValue(field, value) {
    let newIssue = Object.assign({}, this.state.newIssue);
    newIssue[field] = value;
    this.setState({ newIssue: newIssue });
  }

  reportIssue() {
    const newId = this.state.newIssue.id + 1;
    let newKnownIssues = this.state.knownIssues;

    const data = {
      inputs: {
        source_sentence: this.state.useActualResult ? this.state.newIssue.actual : this.state.newIssue.summary,
        sentences: this.state.useActualResult ? newKnownIssues.map(i => i.actual) : newKnownIssues.map(i => i.summary)
      }
    }
    fetch(this.state.model, {
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        const duplicates = json.reduce((list, result, index) => {
          if (result > this.state.similarityThreshold) {
            list.push({
              issue: this.state.knownIssues[index],
              similarity: result
            });
          }
          return list;
        }, []);
        const newIssue = {
          id: this.state.newIssue.id,
          summary: this.state.newIssue.summary,
          steps: this.state.newIssue.steps,
          expected: this.state.newIssue.expected,
          actual: this.state.newIssue.actual,
          duplicates: duplicates
        }
        newKnownIssues.push(newIssue);
        this.setState({
          knownIssues: newKnownIssues,
          newIssue: {
            id: newId,
            summary: '',
            steps: '',
            expected: '',
            actual: '',
            duplicates: duplicates
          }
        })
      }).catch(e => {
        alert(`API call failed: ${e}`);
        console.log("Error", e);
      })
    }

  render() {

    return (
      <div>
      <Pane display="flex">
        <Pane padding={majorScale(4)} width={320} minHeight="100vh" background="#F9FAFC">
          <NewIssueForm
            summary={this.state.newIssue.summary}
            steps={this.state.newIssue.steps}
            actual={this.state.newIssue.actual}
            expected={this.state.newIssue.expected}
            update={this.updateNewIssueValue}
            report={this.reportIssue}
          />
        </Pane>
        <Pane padding={majorScale(4)} paddingLeft={majorScale(5)}>
          <Heading size={600}>List of issues</Heading>
          <Heading size={100} display="block" marginTop={majorScale(3)}>Settings</Heading>
          <Pane padding={majorScale(2)} marginTop={majorScale(2)} marginBottom={majorScale(3)} background="tint2" borderRadius={3}>
            {/* <Pane display="flex" alignItems="center" marginBottom={majorScale(2)}>
              <Text marginRight={majorScale(1)}>Sentence similarity model</Text>
              <Select maxWidth={160} value={this.state.model} onChange={e => this.setState({ model: e.target.value})}>
                <option value="https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2">MiniLM-L6</option>
                <option value="https://api-inference.huggingface.co/models/sentence-transformers/all-mpnet-base-v2">mpnet</option>
                <option value="https://api-inference.huggingface.co/models/sentence-transformers/all-distilroberta-v1">Roberta</option>
              </Select>
            </Pane> */}
            <Pane display="flex" alignItems="center" marginBottom={majorScale(2)}>
              <Text marginRight={majorScale(1)}>Similarity threshold for duplicate detection</Text>
              <TextInput width={64} onChange={e => this.setState({ similarityThreshold: e.target.value })} value={this.state.similarityThreshold} />
            </Pane>
            <Pane display="flex" alignItems="center">
              <Switch checked={this.state.useActualResult} onChange={(e) => this.setState({ useActualResult: !this.state.useActualResult })} />
              <Text marginLeft={majorScale(1)}>Use <Strong>Actual result</Strong> field instead of <Strong>Issue summary</Strong> field for similarity evaluation</Text>
            </Pane>
          </Pane>
          <KnownIssuesList issues={this.state.knownIssues} />
        </Pane>
      </Pane>
      </div>
    );
  }
}

export default App;
