import React from 'react';
import { Heading, Table, Paragraph, Text, Pre, Badge, majorScale } from 'evergreen-ui'

const KnownIssuesList = (props) => {
  const {issues} = props
  return (
    <div>
    <Heading size={100} display="block" marginBottom={majorScale(2)}>Known issues</Heading>
    <Table>
      <Table.Head>
        <Table.TextHeaderCell maxWidth={40}>ID</Table.TextHeaderCell>
        <Table.TextHeaderCell>Summary</Table.TextHeaderCell>
        <Table.TextHeaderCell>Step(s) to reproduce</Table.TextHeaderCell>
        <Table.TextHeaderCell>Actual result</Table.TextHeaderCell>
        <Table.TextHeaderCell>Expected result</Table.TextHeaderCell>
        <Table.TextHeaderCell maxWidth={160}>Duplicate(s)</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body>
        {issues.map((issue) => {
          return <Table.Row className="known-issue" height="auto" paddingTop={majorScale(1)} paddingBottom={majorScale(1)} alignItems="start" key={issue.id}>
            <Table.TextCell maxWidth={40} isNumber>{issue.id}</Table.TextCell>
            <Table.TextCell><Paragraph size={300} whiteSpace="pre-wrap" overflowwrap="break-word">{issue.summary}</Paragraph></Table.TextCell>
            <Table.TextCell><Pre size="small" whiteSpace="pre-wrap" overflowwrap="break-word">{issue.steps}</Pre></Table.TextCell>
            <Table.TextCell><Paragraph size={300} whiteSpace="pre-wrap" overflowwrap="break-word">{issue.actual}</Paragraph></Table.TextCell>
            <Table.TextCell><Paragraph size={300} whiteSpace="pre-wrap" overflowwrap="break-word">{issue.expected}</Paragraph></Table.TextCell>
            <Table.TextCell maxWidth={160}>
              {issue.duplicates.length && issue.duplicates.length > 0
                ? <div>
                  {issue.duplicates.map(duplicate => <Badge maxWidth={104} className="duplicate-badge" marginTop={majorScale(1)} marginRight={majorScale(1)} key={duplicate.issue.id} color="yellow">Issue {duplicate.issue.id} - {duplicate.similarity.toFixed(2)}</Badge>)}
                </div>
                : <Text size={300} colour="muted">None</Text>
              }
            </Table.TextCell>
          </Table.Row>
        })}
      </Table.Body>
    </Table>
    </div>
  )
}

export default KnownIssuesList;
