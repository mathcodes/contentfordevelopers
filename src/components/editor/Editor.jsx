import CodeEditor from '@uiw/react-textarea-code-editor';
import React from 'react'
import {TwoSumSolution} from '../../assets/LeetCode/0001.TwoSum/twoSum'

export default function Editor() {
  const [code, setCode] = React.useState(
    TwoSumSolution
  );
  return (
    <CodeEditor
      value={code}
      language="js"
      placeholder="Please enter JS code."
      onChange={(evn) => setCode(evn.target.value)}
      padding={40}
      style={{
        fontSize: 24,
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
  );
}
