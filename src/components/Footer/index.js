import { Fragment } from 'react';
import * as S from './styles';

function Footer() {
    const socialMediaItems = [
        {
            icon: 'icon',
            url: 'algo@royalclima.com.br',
        },
        {
            icon: 'icon',
            url: 'royalclima@gmail.com',
        },
        {
            icon: 'icon',
            url: 'royalclima@yahoo.com.br',
        },
    ];

    return (
        <S.Footer>
            <S.ContentContainer>
                <img />
                <S.TelephoneContainer>
                    <h5>Telefones:</h5>
                    <span>(31) 9 9555-5555</span>
                    <span>(31) 2555-5555</span>
                </S.TelephoneContainer>
                <S.Adress>
                    Endereço: Rua São Roque 1111 sala 208 Sagrada Familia Belo
                    Horizonte
                </S.Adress>
                <S.SocialMediaContainer>
                    {socialMediaItems.map(({ icon, url }, index) => {
                        return (
                            <div key={index}>
                                <span>{icon}</span>
                                <span>{url}</span>
                            </div>
                        );
                    })}
                </S.SocialMediaContainer>
                <div>Baloes de qualidade</div>
            </S.ContentContainer>
        </S.Footer>
    );
}

export default Footer;
