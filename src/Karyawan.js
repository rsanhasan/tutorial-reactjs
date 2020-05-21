import React from 'react';

const Employee = ({employee}) =>
(
    <li>
        <div>Nama: {employee.nama}</div>
        <div>Email: {employee.email}</div>
        <div>LamaKerja: {employee.lamaKerja}</div>
        <div>Jenis Kelamin: {employee.gender}</div>
    </li>
)

export default Employee;