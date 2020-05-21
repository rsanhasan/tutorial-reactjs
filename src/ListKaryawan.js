import React from 'react';
import Employee from './Karyawan';

const ListEmployee = ({employees}) =>
(
    <ul>
        {employees.map((singleEmployee) =>
            <Employee key={singleEmployee._id} employee={singleEmployee}/>
        )}
    </ul>
)

export default ListEmployee;