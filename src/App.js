import { marked } from 'marked';
import React from 'react';
import './App.css';

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '# Welcome!\n\n## This is a  subheading...\n### And here\'s some other cool stuff:\n\nHers some code, `<div></div>`, between 2 backticks.\n\n```//// this is a multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == \'```\' && lastLine == \'```\') {\n    return multiLineCode:\n  }\n}\n```\n**bold** text\n1. numbered list\n1. adf\n1. asdf\n> block quotes!\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n**bold**\nhow dare you forget to add a [link](https://www.freecodecamp.org)!!!'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  shouldComponentUpdate() {
    return true;
  }

  render() {
    document.getElementById('preview').innerHTML = marked.parse(this.state.input);
    return (
      <div>
        <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
