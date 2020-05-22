import React from 'react';
import Male from './logo/male-solid.svg';
import Female from './logo/female-solid.svg';

const Employee = ({employee}) =>
(
    <li>
        <div>Nama: {employee.nama}</div>
        <div>Email: {employee.email}</div>
        <div>LamaKerja: {employee.lamaKerja}</div>
        <div>Jenis Kelamin: {employee.gender}</div>
        <div>
            <img src={employee.gender==='male'? Male:Female} width='10px'/>
        </div>
    </li>
)

export default Employee;