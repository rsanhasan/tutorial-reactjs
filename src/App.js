import React from 'react';
import Data from './Data';
import Input from './Input';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {name: 'Hasan', age: 22}
  }

  _changeName = () => this.setState({name: 'Diana', age: 25})
  _changeName2 = (newName) => this.setState({name: newName})
  _changeAge2 = (newAge) => this.setState({age:parseInt(newAge)})

  render(){
    return (
      <div>
        <h1>State dan Props</h1>
        <Data
          name={this.state.name}
          age={this.state.age}
        />
        <Input
          _changeName = {this._changeName}
          _changeName2 = {this._changeName2}
          _changeAge2 = {this._changeAge2}
        />
      </div>
    );
  }
}

export default App;
