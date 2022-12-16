import { Fragment } from 'react';
import Navigation from '../Navigation';

import * as S from './styles';

function Header() {
    return (
        <S.Header>
            <img />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#00cbd2"
                    fillOpacity="1"
                    d="M0,256L34.3,234.7C68.6,213,137,171,206,144C274.3,117,343,107,411,128C480,149,549,203,617,229.3C685.7,256,754,256,823,234.7C891.4,213,960,171,1029,181.3C1097.1,192,1166,256,1234,277.3C1302.9,299,1371,277,1406,266.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
                ></path>
            </svg>
            <Navigation />
            <S.ContactContainer>
                <S.CellphoneContainer>
                    <i className="fa-brands fa-whatsapp"></i>
                    <S.Cellphone>31 - 91556-1578</S.Cellphone>
                </S.CellphoneContainer>
                <S.CellphoneContainer>
                    <i className="fa-brands fa-whatsapp"></i>
                    <S.Cellphone>31 - 52789-8791</S.Cellphone>
                </S.CellphoneContainer>
            </S.ContactContainer>
        </S.Header>
    );
}

export default Header;
