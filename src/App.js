import React from 'react';
import Dummy from './Dummy';
import ListEmployee from './ListKaryawan';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {employees: Dummy, isLogin: true}
  }

  render(){
      const isUserLoginC = (this.state.isLogin? 'sudahLogin': 'belumLogin')
      return (
        <div>
          <h1>Daftar Karyawan</h1>
          <div className={isUserLoginC}>Status Login</div>
          <ListEmployee
            employees={this.state.employees}
          />
        </div>
      );
  }
}

export default App;
