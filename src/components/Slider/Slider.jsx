import React from 'react';
// import estilos from './Slider.module.css';
import estilos from '@styles/Slider.module.scss';

import arrow from '@icons/flechita.svg';


function Slider({ imagenes }) {

    //Variables y Estados
    const [imagenActual, setImagenActual] = React.useState(0);
    const cantidad = imagenes?.length;

    //Return prematuro para evitar errores
    if (!Array.isArray(imagenes) || cantidad === 0)
    return;

    const siguienteImagen = () => {
        setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
    };

    const anteriorImagen = () => {
        setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
    };

    return( <div className={estilos.container}>
        {/* <button className="backImage" onClick={anteriorImagen}> ← </button> */}
        <div className={estilos.backImage} onClick={anteriorImagen}> 
            <img src={arrow} alt="left-arrow"/>
        </div>

        {imagenes.map((imagen, index) => {
            return (           
                <div className={imagenActual === index
                                ? `${estilos.slide} ${estilos.active}` 
                                : estilos.slide}>

              {/* <div className={imagenActual === index
                                ? `${estilos.slide} ${estilos.active}` 
                                : estilos.slide}> */}



                                { imagenActual === index &&  (
                    <img key={index} src={imagen} alt="imagen" />
                    )}                    
                </div>
            );
        })}
        {/* <button className="nextImage" onClick={siguienteImagen}> → </button> */}
        <div className={estilos.nextImage} onClick={siguienteImagen}> 
            <img src={arrow} alt="right-arrow"/>
        </div>

  </div>
    );
}

export default Slider;






                        /*Codigo bueno*/


// import React from 'react';
// // import estilos from './Slider.module.css';
// import estilos from '@styles/Slider.module.css';

// function Slider({ imagenes }) {

//     //Variables y Estados
//     const [imagenActual, setImagenActual] = React.useState(0);
//     const cantidad = imagenes?.length;

//     //Return prematuro para evitar errores
//     if (!Array.isArray(imagenes) || cantidad === 0)
//     return;

//     const siguienteImagen = () => {
//         setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
//     };

//     const anteriorImagen = () => {
//         setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
//     };

//     return( <div className={estilos.container}>
//         <button className="backImage" onClick={anteriorImagen}> ← </button>
//         {imagenes.map((imagen, index) => {
//             return (
//                 <div className={imagenActual === index
//                                 ? `${estilos.slide} ${estilos.active}` 
//                                 : estilos.slide}> 
//                                 { imagenActual === index &&  (
//                     <img key={index} src={imagen} alt="imagen" />
//                     )}                    
//                 </div>
//             );
//         })}
//         <button className="nextImage" onClick={siguienteImagen}> → </button>
//   </div>
//     );
// }

// export default Slider;