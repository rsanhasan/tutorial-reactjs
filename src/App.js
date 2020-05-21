import React from 'react';
import Dummy from './Dummy';
import ListEmployee from './ListKaryawan';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {employees: Dummy}
  }

  render(){
    return (
      <div>
        <h1>Daftar Karyawan</h1>
        <ListEmployee
          employees={this.state.employees}
        />
      </div>
    );
  }
}

export default App;
