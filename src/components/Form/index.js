import { useEffect, useRef, useState } from 'react';
import Button from '../Button';
import './index.css';
import { rgbToHsl, rgbToHex } from './helpers';
import { useRecoilState , useSetRecoilState} from 'recoil';
import { pickedColorAtom } from '../../recoil/picked-color/atoms';
import { pixelDataAtom } from '../../recoil/pixel-data/atoms';

const Form = () =>  {
    const canvasRef = useRef(null);
    const [canvasContext, setCanvasContext] = useState();
    const [pixelData, setPixelData] = useRecoilState(pixelDataAtom);
    const  setPickedColor = useSetRecoilState(pickedColorAtom);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        setCanvasContext(context);

        const color = '#661afe';
        const gradientH = context.createLinearGradient(0, 0, context.canvas.width, 0);
        gradientH.addColorStop(0, '#fff');
        gradientH.addColorStop(1, color);
        context.fillStyle = gradientH;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);

        const gradientV = context.createLinearGradient(0, 0, 0, context.canvas.height);
        gradientV.addColorStop(0, 'rgba(0,0,0,0)');
        gradientV.addColorStop(1, '#000');
        context.fillStyle = gradientV;
        context.fillRect(0, 0, context.canvas.width, context.canvas.height); 

    }, []);

    const handleSubmit = () => {
        if (pixelData) {
            const chosenColor = rgbToHex(pixelData[0], pixelData[1], pixelData[2]);

            setPickedColor(chosenColor);
        }
    }

    const handleOnClick = (e) => {
        const canvasGap = canvasRef.current.getBoundingClientRect();
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const actualX = Math.floor(e.pageX - canvasGap.left);
        const actualY = Math.floor(e.pageY - canvasGap.top);

        const pixel = canvasContext.getImageData(actualX,actualY,context.canvas.width,context.canvas.height)['data'];   // Read pixel Color

        setPixelData([pixel[0],pixel[1],pixel[2]]);
    }

    return (
        <form className='Form-container'>
            <canvas width="458" height="458" ref={canvasRef} onClick={handleOnClick} id='canvas'/>
            <div className='Panel-container'>
                <div className='Color-panel' style={{background: pixelData ? `rgb(${pixelData[0]},${pixelData[1]},${pixelData[2]})` : ''}}/>
                <div  id='input'>{pixelData ? rgbToHsl(pixelData[0],pixelData[1],pixelData[2]) : ''}</div>
            </div>
            <Button onClick={handleSubmit}/>
        </form>
    );
}

export default Form;
