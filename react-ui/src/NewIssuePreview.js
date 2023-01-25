import React from 'react';
import { Pane, Heading, Pre, majorScale } from 'evergreen-ui'

const NewIssuePreview = (props) => {
  const {issue} = props
  return (
    <div>
    {issue.summary !== ''
      ? <Pane padding={majorScale(3)} marginBottom={majorScale(4)} maxWidth={800} paddingRight={majorScale(4)} elevation={2}>
        <Heading size={100} display="block" marginBottom={majorScale(1)}>New issue</Heading>
        <Pre marginBottom={majorScale(1)} whiteSpace="pre-wrap" overflowWrap="break-word">{issue.summary}</Pre>
        {issue.steps !== ''
          ? <div>
              <Heading size={100} display="block" marginTop={majorScale(2)} marginBottom={majorScale(1)}>Steps to reproduce</Heading>
              <Pre whiteSpace="pre-wrap" overflowWrap="break-word">{issue.steps}</Pre>
            </div>
          : null}
        {issue.actual !== ''
          ? <div>
              <Heading size={100} display="block" marginTop={majorScale(2)} marginBottom={majorScale(1)}>Actual result</Heading>
              <Pre whiteSpace="pre-wrap" overflowWrap="break-word">{issue.actual}</Pre>
            </div>
          : null}
        {issue.expected !== ''
          ? <div>
              <Heading size={100} display="block" marginTop={majorScale(2)} marginBottom={majorScale(1)}>Expected result</Heading>
              <Pre whiteSpace="pre-wrap" overflowWrap="break-word">{issue.expected}</Pre>
            </div>
          : null}
      </Pane>
      : null
    }
    </div>
  )
}

export default NewIssuePreview;
