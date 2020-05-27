import React from 'react';
import Dummy from './Dummy';
import ListEmployee from './ListKaryawan';
import './App.css';
import Input from './Input';
import InputValue from './InputValue';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      employees: Dummy,
      isLogin: true,
      tipe: 'name',
      name: "",
      lamaKerja: 0,
      gender: ""
    }
  }

  _filterEmployee = () => {
    const employee = this.state.employees;
    if (employee && employee.length>0){
      switch(this.state.tipe){
        case "name":
          return employee.filter(
            (karyawan) =>
              karyawan.nama.toLowerCase().includes(this.state.name.toLowerCase())
          )
        case "lamaKerja":
          return employee.filter(
              (karyawan) => karyawan.lamaKerja >= this.state.lamaKerja
          )
        case "gender":
          return employee.filter(
            (karyawan) => {
              if (this.state.gender === ""){
                return true;
              }else{
                return karyawan.gender === this.state.gender
              }
            }
          )
        default:
          return employee;
      }
    }else{
      return [];
    }
  }

  _changeName = (value) => this.setState({ name: value})
  _changeLamaKerja = (value) => this.setState({ lamaKerja: value})
  _changeGender = (value) => this.setState({ gender: value})
  _saveTypeFilter = (value) => this.setState({ tipe: value})


  render(){
      const isUserLoginC = (this.state.isLogin? 'sudahLogin': 'belumLogin')
      return (
        <div>
          <h1>Filter Daftar Karyawan</h1>
          <div className={isUserLoginC}>Status Login</div>
          <Input _simpanTipeFilter={this._saveTypeFilter}></Input>
          <InputValue
            tipe={this.state.tipe}
            _ChangeName={this._changeName}
            _ChangeLamaKerja={this._changeLamaKerja}
            _ChangeGender={this._changeGender}
            ></InputValue>
          <ListEmployee
            employees={this._filterEmployee()}
          />
        </div>
      );
  }
}

export default App;
