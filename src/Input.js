import React from 'react';

const Input = (props) =>
    (<>
        <input type='button' onClick={props._changeName} value='Ubah nama'/>
        <br/>
        <label>Nama Baru :</label>
        <input
        type="text"
        onBlur={(event) => 
            props._changeName2(event.target.value)}
        />
        <br/>
        <label>Umur Baru :</label>
        <input
        type="number"
        onBlur={(event) =>
            props._changeAge2(event.target.value)}/>
    </>)

export default Input;