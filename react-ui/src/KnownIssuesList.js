import React from 'react';
import { Heading, Table, Pre, Badge, majorScale } from 'evergreen-ui'

const KnownIssuesList = (props) => {
  const {issues} = props
  return (
    <div>
    <Heading size={100} display="block" marginBottom={majorScale(3)}>Known issues</Heading>
    <Table>
      <Table.Head>
        <Table.TextHeaderCell maxWidth={64}>ID</Table.TextHeaderCell>
        <Table.TextHeaderCell>Summary</Table.TextHeaderCell>
        <Table.TextHeaderCell>Step(s) to reproduce</Table.TextHeaderCell>
        <Table.TextHeaderCell>Actual result</Table.TextHeaderCell>
        <Table.TextHeaderCell>Expected result</Table.TextHeaderCell>
        <Table.TextHeaderCell>Duplicate(s)</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body>
        {issues.map((issue) => {
          return <Table.Row key={issue.id} isSelectable onSelect={() => alert(issue.summary)}>
            <Table.TextCell maxWidth={64} isNumber>{issue.id}</Table.TextCell>
            <Table.TextCell>{issue.summary}</Table.TextCell>
            <Table.TextCell><Pre size="small">{issue.steps}</Pre></Table.TextCell>
            <Table.TextCell>{issue.actual}</Table.TextCell>
            <Table.TextCell>{issue.expected}</Table.TextCell>
            <Table.TextCell>{issue.duplicates.length && issue.duplicates.length > 0
              ? <div>
                {issue.duplicates.map(duplicate => <Badge display="inline-block" key={duplicate.issue.id} color="yellow">Issue {duplicate.issue.id} - {duplicate.similarity.toFixed(2)}</Badge>)}
              </div>
              : null
            }</Table.TextCell>
          </Table.Row>
        })}
      </Table.Body>
    </Table>
    </div>
  )
}

export default KnownIssuesList;
