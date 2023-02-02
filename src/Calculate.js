//Hooks jolla voidaan laskea kahden annetun
//kokonaisluvun summa
import React, { useState } from 'react';

function Calulate() {
    const [num1, setnum1] = useState('0');
    const [num2, setnum2] = useState('0');
    const [sum, setsum] = useState('');
    const [exp, setexp] = useState('');
    const [error, seterror] = useState('');
    console.log(num1);

    const calculateSum = function () {
        seterror("");
        let n1 = parseInt(num1);
        let n2 = parseInt(num2);
        setsum(n1 + n2);
        setexp('summa');
        console.log(sum);
    }
    const calculateDiv = function () {
        seterror("");
        let n1 = parseInt(num1);
        let n2 = parseInt(num2);
        setsum(n1 - n2);
        setexp('erotus');
        console.log(sum);
    }
    const calculateMul = function () {
        let n1 = parseInt(num1);
        let n2 = parseInt(num2);
        setsum(n1 * n2);
        setexp('tulo');
        console.log(sum);
    }

    const calculateQuo = function () {
        let n1 = parseInt(num1);
        let n2 = parseInt(num2);
        if(n2 != 0){
        let q=  n1/n2;
        setsum(parseFloat(q).toFixed(2));
        setexp('osamäärä');
        console.log(sum);
        }
        else {
            console.log("Et voi jakaa nollalla");
            seterror("Et voi jakaa nollalla");
        }
    }
    return (
        <div>
            <h1>Summa</h1>
            <table>
                <thead></thead>
                <tbody>
                    <tr><td><label>Anna kokonaisluku</label></td>
                        <td><input value={num1} onChange={e => setnum1(e.target.value)}></input></td></tr>
                    <tr><td><label>Anna toinen kokonaisluku</label></td>
                        <td><input value={num2} onChange={e => setnum2(e.target.value)}></input></td></tr>
                    <tr><td></td> <td><button onClick={calculateSum}>Laske summa</button></td></tr>
                    <tr><td></td> <td><button onClick={calculateDiv}>Laske erotus</button></td></tr>
                </tbody>
            </table>
            <label>Valitse laskutoimitus</label><br/>
            <input type="radio" name="choice" onChange={calculateSum} /> Summa<br/>
            <input type="radio" name="choice" onChange={calculateDiv} /> Erotus<br/>
            <input type="radio" name="choice" onChange={calculateMul} /> Tulo<br/>
            <input type="radio" name="choice" onChange={calculateQuo} /> Osamäärä<br/>
            <hr></hr>
            <label>Lukujen {num1} ja {num2} {exp} = {sum}</label> <br/>
            <label>{error}</label>
        </div>

    );
}

export default Calulate;