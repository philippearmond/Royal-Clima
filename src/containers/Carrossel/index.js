import { useEffect, useState } from 'react';

import * as S from './styles';
import './icon.css';

import arCondicionado from '../../assets/ar-condicionado.jpeg';
import arCondicionado2 from '../../assets/ar-condicionado2.jpeg';
import maintenance from '../../assets/maintenance-type1.jpeg';
import maintenance2 from '../../assets/maintenance-type2.jpeg';

function Carrossel() {
    const [renderImg, setRenderImage] = useState(2);
    const [increaseIntervalTime, setIncreaseIntervalTime] = useState(false);

    const images = [arCondicionado, arCondicionado2, maintenance, maintenance2];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log('triggered');
    //         let count = 1;

    //         setRenderImage((previousState) => {
    //             return parseFloat(previousState) - parseFloat(count);
    //         });

    //         if (renderImg === 0) {
    //             setRenderImage((previousState) => {
    //                 return previousState + images.length;
    //             });
    //         } else if (renderImg > 2) {
    //             setRenderImage(
    //                 (previousState) => previousState - images.length - 1
    //             );
    //         }
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [renderImg]);
    useEffect(() => {
        const interval = setInterval(
            () => {
                setRenderImage((previousState) => {
                    if (renderImg === 0)
                        return (previousState = images.length - 1);
                    if (renderImg > images.length - 1)
                        return (previousState = 0);
                    return previousState - 1;
                });
                // onChangeImage('left'); // refatorar metodo abaixo pra conseguir enxugar ao maximo, dps aplica-lo aqui pois ta bugando o state debaixo por n usar previousstate
            },
            increaseIntervalTime ? 20000 : 3000
        );
        return () => clearInterval(interval);
    }, [renderImg]);

    function onChangeImage(direction) {
        setIncreaseIntervalTime(true);

        const renderImgIndex = changeHandler(direction);
        console.log(renderImgIndex);
        setRenderImage(renderImgIndex);
    }

    function changeHandler(direction) {
        let renderImgIndex = renderImg;

        if (direction === 'left') {
            if (renderImgIndex !== 0) {
                renderImgIndex--;
            } else {
                renderImgIndex = images.length - 1;
            }
        }

        if (direction === 'right') {
            if (renderImgIndex !== images.length - 1) {
                renderImgIndex++;
            } else {
                renderImgIndex = 0;
            }
        }

        return renderImgIndex;
    }

    return (
        <S.CarrosselContainer image={images[renderImg]}>
            <S.IconContainer>
                <i
                    className="fa-solid fa-circle-chevron-left"
                    onClick={() => onChangeImage('left')}
                ></i>
                <i
                    className="fa-solid fa-circle-chevron-right"
                    onClick={() => onChangeImage('right')}
                ></i>
            </S.IconContainer>
        </S.CarrosselContainer>
    );
}

export default Carrossel;
