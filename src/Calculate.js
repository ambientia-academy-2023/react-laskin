//Hooks jolla voidaan laskea kahden annetun
//kokonaisluvun summa
import React, { useState} from 'react';

function Calulate() {

    return (
        <div>
            <h1>Summa</h1>
            <table>
                <thead></thead>
                <tbody>
                    <tr> <td><label>Anna kokonaisluku</label></td> <td><input type="text"></input></td></tr>
                    <tr> <td><label>Anna toinen kokonaisluku</label></td> <td><input type="text"></input></td></tr>
                    <tr> <td></td> <td><button>Laske summa</button></td></tr>
                </tbody>
            </table>
        
            
        </div>
        
    );
}

export default Calulate;