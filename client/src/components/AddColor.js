import React, { useState } from 'react';
import axiosWithAuth from '../axiosWithAuth';

const initialColor = {
    color: "",
    code: { hex: "#ff8080" }
};

const AddColor = ({colors, updateColors}) => {
    const [colorToAdd, setColorToAdd] = useState(initialColor);

    const updateColorName = event => {
        setColorToAdd({ ...colorToAdd, color: event.target.value});
    }

    const updateHexcode = event => {
        const pickedColor = document.getElementById('color-pick').value;
        console.log(pickedColor);
        setColorToAdd({ ...colorToAdd, code: { hex: pickedColor }});
        // setColorToAdd({ ...colorToAdd, code: { hex: event.change.value }});
    }

    const refreshColors = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/colors')
        .then(newColorListResults => {
            // console.log('new colors: ', newColorListResults.data);
            updateColors(newColorListResults.data);
        })
    }

    const submitColor = event => {
        event.preventDefault();
        // console.log('colorToAdd: ', colorToAdd);
        axiosWithAuth()
            .post(`http://localhost:5000/api/colors`, colorToAdd)
            .then(results => {
                // console.log('post: ', results);
                // console.log('post colors: ', colors);
                refreshColors();
            })
            .catch(error => {
                console.log('post Error: ', error);
            })
    };

    return (
        <section className='add-color'>
            <div>add color</div>
            <form className='add-color-form' onSubmit={submitColor}>
                <label>color name:
                    <input 
                        type='text' 
                        name='colorname' 
                        placeholder='color name'
                        value={colorToAdd.color}
                        onChange={updateColorName}
                    />
                </label>

                <label>hex code:
                    <input 
                        id='color-pick'
                        type='color' 
                        name='hexcode' 
                        placeholder='hexcode'
                        value={colorToAdd.code.hex}
                        onChange={updateHexcode}
                    />
                </label>

                <div className='button-row'>
                    <button type='submit'>save</button>
                    <button>cancel</button>
                </div>
            </form>
        </section>
    )
}

export default AddColor;