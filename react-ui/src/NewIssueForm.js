import React from 'react';
import { Heading, Button, majorScale } from 'evergreen-ui'
import TextareaInput from './TextareaInput'

const NewIssueForm = (props) => {
  const {summary, steps, actual, expected, update, report, improveNewIssue} = props
  return (
    <div>
      <Heading size={600} marginBottom={majorScale(3)}>Report a new issue</Heading>
      <TextareaInput
        required={false}
        label="Summary"
        description="Summarize this issue in a single sentence"
        placeholder="The 'Contact' page gets stuck in infinite loading"
        value={summary}
        onChange={(v) => update('summary', v)}
      />
      <TextareaInput
        required={false}
        label="Step(s) to reproduce"
        description="How do you reproduce this issue?"
        placeholder={`1. Open the app\n2. Click on the 'Contact' link...`}
        value={steps}
        onChange={(v) => update('steps', v)}
      />
      <TextareaInput
        required={false}
        label="Actual result"
        description="Describe what happens"
        placeholder="The 'Contact' page fails to load"
        value={actual}
        onChange={(v) => update('actual', v)}
      />
      <TextareaInput
        required={false}
        label="Expected result"
        description="Describe what should happen"
        placeholder="The 'Contact' page loads successfully"
        value={expected}
        onChange={(v) => update('expected', v)}
      />
      <Button appearance="primary" onClick={() => report()}>Report issue</Button>
      <Button appearance="primary" intent="success" marginLeft={majorScale(1)} onClick={() => improveNewIssue(summary, steps)}>Improve with GPT3</Button>
    </div>
  )
}

export default NewIssueForm;
