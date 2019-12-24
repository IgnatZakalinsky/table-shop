import React, {useState} from 'react';

interface IInputColor {
    color: string;
    percent: number;
}

interface ITimeTestProps {

}

const ColorTest: React.FC<ITimeTestProps> = (
    {

    }
) => {
    const [color, setColor] = useState('#00ff00');

    const [inputs, setInputs] = useState<IInputColor[]>([]);
    // addInput, mapGradient, moveGradient, startMoving

    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            color

            <input type={'color'} value={color} onChange={e => setColor(e.currentTarget.value)}/>
            <div style={{width: '100px', height: '100px', background: color}}/>

            <div
                style={{
                    width: '300px',
                    height: '100px',
                    background: 'linear-gradient(90deg, #000000 -12%, #0000ff 13%, #00ff00 50%, #ff0000 88%, #000000 112%)',
                }}
            />
        </div>
    );
};

export default ColorTest;
