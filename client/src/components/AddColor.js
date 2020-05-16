import React, { useState } from 'react';

const AddColor = () => {
    const [colorName, setColorName] = useState('');
    const [hexcode, setHexcode] = useState('');

    const updateColorName = event => {
        setColorName(event.target.value);
    }

    const updateHexcode = event => {
        setHexcode(event.target.value);
    }

    const submitColor = event => {
        event.preventDefault();
    }

    return (
        <section className='add-color'>
            <div>add color</div>
            <form className='add-color-form' onSubmit={submitColor}>
                <label>color name:
                    <input 
                        type='text' 
                        name='colorname' 
                        placeholder='color name'
                        value={colorName}
                        onChange={updateColorName}
                    />
                </label>

                <label>hex code:
                    <input 
                        type='text' 
                        name='hexcode' 
                        placeholder='hexcode'
                        value={hexcode}
                        onChange={updateHexcode}
                    />
                </label>

                <button>save</button>
                <button>cancel</button>
            </form>
        </section>
    )
}

export default AddColor;