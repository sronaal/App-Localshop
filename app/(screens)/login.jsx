import styled from 'styled-components/native'
import logo from '../../assets/images/hamburger.png'
import FormLogin from '../../components/auth/formLogin'
export default function Index(){



    return (
        <Container>
            <Logo source={logo}/>
            <Title>¡Que bueno verte!</Title>
            <Subtitle>Inicia sesión para continuar</Subtitle>
            <FormLogin/>
        </Container>
    )
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
const Logo = styled.Image`
    width: 100px;
    height: 100px;
`

const Title = styled.Text`
    font-size: 40px;
    font-weight: bold;
`
const Subtitle = styled.Text`
    font-size: 18px;
    color: #B59A7E;
    margin-top: 2px;
    margin-bottom: 50px;
`
