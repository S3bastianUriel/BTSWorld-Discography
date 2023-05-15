// import React from 'react';
import React, { useState, useContext } from 'react';

// Modal de los miembros
// import RMData from '@containers/RMData';
// import JinData from '@containers/JinData';
// import SugaData from '@containers/SugaData';
// import JhopeData from '@containers/JhopeData';
// import JiminData from '@containers/JiminData';
// import VData from '@containers/VData';
// import JungkookData from '@containers/JungkookData'; 

//MemberComponent
// import RMComponent from '@containers/RMComponent';
// import JinComponent from '@containers/JinComponent';
// import JhopeComponent from '@containers/JhopeComponent';
// import JiminComponent from '@containers/JiminComponent';
// import SugaComponent from '@containers/SugaComponent';
// import VComponent from '@containers/VComponent';
// import JungkookComponent from '@containers/JungkookComponent';


//Data de /profile
// import Profile from '@pages/Profile';

const Context = React.createContext();

function ConstProvider(props) {
    const [rmmodal, setrmModal] = React.useState(false) //FALSE para que el modal no aparezca al cargar la pagina
    const [jinmodal, setjinModal] = React.useState(false) //FALSE para que el modal no aparezca al cargar la pagina
    const [sugamodal, setsugaModal] = useState(false) //FALSE para que el modal no aparezca al cargar la pagina
    const [jhopemodal, setjhopeModal] = React.useState(false) //FALSE para que el modal no aparezca al cargar la pagina
    const [jiminmodal, setjiminModal] = React.useState(false) //FALSE para que el modal no aparezca al cargar la pagina
    const [vmodal, setvModal] = React.useState(false) //FALSE para que el modal no aparezca al cargar la pagina
    const [jungkookmodal, setjungkookModal] = React.useState(false) //FALSE para que el modal no aparezca al cargar la pagina
    // const [jungkookmodal, setjungkookModal] = React.useState(false) //FALSE para que el modal no aparezca al cargar la pagina
    const [menumodal, setmenuModal] = React.useState(false)
    

    return (
        <Context.Provider value={{
            rmmodal,
            setrmModal,
            // handlermModal,

            jinmodal,
            setjinModal,
            // handlejinModal,

            sugamodal,
            setsugaModal,
            // handlesugaModal,

            jhopemodal,
            setjhopeModal,
            // handlejhopeModal,

            jiminmodal,
            setjiminModal,
            // handlejiminModal,

            vmodal,
            setvModal,
            // handlevModal,

            jungkookmodal,
            setjungkookModal,
            // handlejungkookModal

            menumodal,
            setmenuModal
        }}>
            {props.children}
        </Context.Provider>
    );
}

export { Context, ConstProvider };