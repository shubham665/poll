import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleBack = this.handleBack.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  state = {
    load: "hide",
    data: [],
    view: "main",
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    // question: 'qsdhkfbsdkf sdhkf sdfkb skdjf sdjlf sdfsd f',
    // option1: '1',
    // option2: '2',
    // option3: '3',
    // option4: '4',
    option1Count: 0,
    option2Count: 0,
    option3Count: 0,
    option4Count: 0,
  };

  handleView(id) {
    this.setState({view:id});
  }

  handleBack() {
    if (this.state.question && this.state.option1 && this.state.option2 && this.state.option3 && this.state.option4) {
      this.setState({view:"main"});
    }
    else if (!this.state.question && !this.state.option1 && !this.state.option2 && !this.state.option3 && !this.state.option4) {
      this.setState({view:"main"});
    }
    else if (!this.state.question) {
      alert("Please enter question");
    }
    else if (!this.state.question || !this.state.option1 || !this.state.option2 || !this.state.option3 || !this.state.option4) {
      alert("Please enter all options");
    }
  }

  handleDelete() {
    this.setState({question:''});
    this.setState({option1:''});
    this.setState({option2:''});
    this.setState({option3:''});
    this.setState({option4:''});
    this.setState({option1Count:0});
    this.setState({option2Count:0});
    this.setState({option3Count:0});
    this.setState({option4Count:0});
  }

  handleQuestion = (event) => {
    this.setState({question:event.target.value});
  }

  handleOption1 = (event) => {
    this.setState({option1:event.target.value});
  }

  handleOption2 = (event) => {
    this.setState({option2:event.target.value});
  }

  handleOption3 = (event) => {
    this.setState({option3:event.target.value});
  }

  handleOption4 = (event) => {
    this.setState({option4:event.target.value});
  }

  handleOption1Count = (event) => {
    this.setState({option1Count:(this.state.option1Count+1)});
    alert("Voted Successfully");
    this.handleBack();
  }

  handleOption2Count = (event) => {
    this.setState({option2Count:(this.state.option2Count+1)});
    alert("Voted Successfully");
    this.handleBack();
  }

  handleOption3Count = (event) => {
    this.setState({option3Count:(this.state.option3Count+1)});
    alert("Voted Successfully");
    this.handleBack();
  }

  handleOption4Count = (event) => {
    this.setState({option4Count:(this.state.option4Count+1)});
    alert("Voted Successfully");
    this.handleBack();
  }

  render() {

      if (this.state.view=='main'){
        return (
          <div className="App">
            <header className="App-header">
              <span onClick={()=>this.handleView('create')}>Create</span>
              <br/><br/><br/>
              <span onClick={()=>this.handleView('poll')}>Poll</span>              
              <br/><br/><br/>
              <span onClick={()=>this.handleView('stats')}>Stats</span>              
            </header>
          </div>
        );
      }

      if (this.state.view=='create'){
        return (
          <div className="App">
            <header className="Content-header">
              Create Question
              <button style={{float:"right",marginTop:"2vh",marginRight:"2vh"}} onClick={this.handleBack}>Back</button>
              <br/>
              <button style={{float:"right",marginTop:"2vh",marginRight:"-50px"}} onClick={this.handleDelete}>Delete</button><br/>
              <textarea 
                placeholder="Question" 
                value={this.state.question}
                onChange={this.handleQuestion}
                style={{height:"5vh",width:"50vw",marginTop:"10vh"}}
              >
              </textarea>
              <br/>
              <input 
                placeholder="Option 1"
                value={this.state.option1}
                onChange={this.handleOption1}
                style={{height:"3vh",width:"20vw",marginTop:"2vh"}}
              />
              <br/>
              <input 
                placeholder="Option 2"
                value={this.state.option2}
                onChange={this.handleOption2}
                style={{height:"3vh",width:"20vw",marginTop:"2vh"}}
              />
              <br/>
              <input 
                placeholder="Option 3"
                value={this.state.option3}
                onChange={this.handleOption3}
                style={{height:"3vh",width:"20vw",marginTop:"2vh"}}
              />
              <br/>
              <input 
                placeholder="Option 4"
                value={this.state.option4}
                onChange={this.handleOption4}
                style={{height:"3vh",width:"20vw",marginTop:"2vh"}}
              />
            </header>
          </div>
        );
      }

      if (this.state.view=='poll'){
        return (
          <div className="App">
            {this.state.question && <header className="Content-header">
              Poll
              <button style={{float:"right",marginTop:"2vh",marginRight:"2vh"}} onClick={this.handleBack}>Back</button>
              <br/>
              <p style={{marginTop:"10vh"}}>{this.state.question}</p>
              <br/>
              <p style={{marginTop:"2vh"}}>
                {this.state.option1}
                <button style={{marginLeft:"20px"}} onClick={this.handleOption1Count}>Vote</button>
              </p>
              <p>
                {this.state.option2}
                <button style={{marginLeft:"20px"}} onClick={this.handleOption2Count}>Vote</button>
              </p>
              <p>
                {this.state.option3}
                <button style={{marginLeft:"20px"}} onClick={this.handleOption3Count}>Vote</button>
              </p>
              <p>
                {this.state.option4}
                <button style={{marginLeft:"20px"}} onClick={this.handleOption4Count}>Vote</button>
              </p>
            </header>}
            {!this.state.question && <header className="Content-header">
              Please add a question.
              <button style={{float:"right",marginTop:"2vh",marginRight:"2vh"}} onClick={this.handleBack}>Back</button>
            </header>}
          </div>
        );
      }

      if (this.state.view=='stats'){
        return (
          <div className="App">
            {this.state.question && <header className="Content-header">
              Stats
              <button style={{float:"right",marginTop:"2vh",marginRight:"2vh"}} onClick={this.handleBack}>Back</button>
              <br/>
              <p style={{marginTop:"10vh"}}>{this.state.question}</p>
              <br/>
              <p style={{marginTop:"2vh"}}>
                {this.state.option1} ({this.state.option1Count} Votes)
              </p>
              <p>
                {this.state.option2} ({this.state.option2Count} Votes)
              </p>
              <p>
                {this.state.option3} ({this.state.option3Count} Votes)
              </p>
              <p>
                {this.state.option4} ({this.state.option4Count} Votes)
              </p>
            </header>}
            {!this.state.question && <header className="Content-header">
              Please add a question.
              <button style={{float:"right",marginTop:"2vh",marginRight:"2vh"}} onClick={this.handleBack}>Back</button>
            </header>}
          </div>
        );
      }
  }
}

export default App;
