import React from 'react';

const InputName = ({_ChangeName}) => (
    <div>
        <label>Nama : </label>
        <input
            type="text"
            name="name"
            onChange={(event) => _ChangeName(event.target.value)}
        />
    </div>
)

const InputLamaKerja = ({_ChangeLamaKerja}) => (
    <div>
        <label>Lama Kerja : </label>
        <input
            type="number"
            name="lamaKerja"
            onChange={(event) => _ChangeLamaKerja(event.target.value)}
        />
    </div>
)

const InputGender = ({_ChangeGender}) => (
    <div>
        <label>Gender : </label>
        <select onChange={(event) => _ChangeGender(event.target.value)}>
            <option value="">Show All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
    </div>
)

const InputValue = ({ tipe, _ChangeName, _ChangeGender, _ChangeLamaKerja}) => {
    switch(tipe){
        case "name":
            return <InputName _ChangeName={_ChangeName}></InputName>
        case "lamaKerja":
            return <InputLamaKerja _ChangeLamaKerja={_ChangeLamaKerja}></InputLamaKerja>
        case "gender":
            return <InputGender _ChangeGender={_ChangeGender}></InputGender>
        default:
            return null;
    }
}

export default InputValue;