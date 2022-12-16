import { Fragment } from 'react';

import Header from './components/Header';
import Carrossel from './containers/Carrossel';
import AboutCompany from './components/About-Company';
import Form from './containers/Form';
import SvgWave from './components/Svg-Wave';
import Footer from './components/Footer';

import sendEmailFields from './model';

function App() {
    return (
        <Fragment>
            <Header />
            <Carrossel />
            <AboutCompany />
            <Form title="Orçamento Rápido" inputFields={sendEmailFields} />
            <SvgWave />
            <Footer />
        </Fragment>
    );
}

export default App;
