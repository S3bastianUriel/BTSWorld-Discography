// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './routes/App';

// ReactDOM.render(<App />, document.getElementById('app'));




        /*con el que vine trabajando hace meses*/
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import { Provider } from '@context/AppContext';
// import App from './routes/App';

// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App tab="home" />);





/*19-09-2022 Codigo con el que mi proyecto funciona*/
import React from 'react';
import * as ReactDOM from 'react-dom/client';       /*REACT version 18*/
// import ReactDOM from 'react-dom/client';
// import { Provider } from '@context/AppContext';
import App from './routes/App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    // <Provider>
      <React.StrictMode>
          <App tab="home" />
      </React.StrictMode>
    // {/* </Provider> */}
);







/*Añadido de acuerdo al curso de Curso INTRO REACT*/
// import React from 'react';
// import * as ReactDOM from 'react-dom/client';       /*REACT version 18*/
// import App from './routes/App';


//REACT version 18-REACT version 18-REACT version 18-REACT version 18-REACT version 18

/*const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/




/*Añadido de acuerdo al curso de Curso PRACTICO REACT*/

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '@routes/App';

// ReactDOM.render(<App />, document.getElementById('root'));





