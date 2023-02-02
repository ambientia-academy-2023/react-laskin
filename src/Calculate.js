//Hooks jolla voidaan laskea kahden annetun
//kokonaisluvun summa
import React, { useState} from 'react';

function Calulate() {
    const [num1, setnum1] = useState('');
    const [num2, setnum2] = useState('');
    const [sum, setsum] = useState('');
    console.log(num1);

    const calculateSum=function(){
        let n1=parseInt(num1);
        let n2=parseInt(num2);
        setsum(n1+n2);
        console.log(sum);
    }

    return (
        <div>
            <h1>Summa</h1>
            <table>
                <thead></thead>
                <tbody>
                    <tr> <td><label>Anna kokonaisluku</label></td> <td>
                        <input onChange={e=>setnum1(e.target.value)} type="text"></input></td></tr>
                    <tr> <td><label>Anna toinen kokonaisluku</label></td> <td>
                        <input onChange={e=>setnum2(e.target.value)} type="text"></input></td></tr>
                    <tr> <td></td> <td><button onClick={calculateSum}>Laske summa</button></td></tr>
                </tbody>
            </table>
            <label>Lukujen {num1} ja {num2} summa = {sum}</label>
            
        </div>
        
    );
}

export default Calulate;