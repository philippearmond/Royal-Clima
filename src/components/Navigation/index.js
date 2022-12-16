import * as S from './styles';

function Navigation() {
    const options = [
        'Home',
        'Quem Somos',
        'Serviços',
        'Orçamento Rápido',
        'PMOC',
    ];
    return (
        <S.Navigation>
            <S.NavContainer>
                {options.map((option) => (
                    <S.MenuItem key={option}>{option}</S.MenuItem>
                ))}
            </S.NavContainer>
        </S.Navigation>
    );
}

export default Navigation;
