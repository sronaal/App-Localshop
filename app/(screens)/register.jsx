import styled from 'styled-components/native'
export default function Register(){

    const banner = {uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNpKQXNQPJKf8EGnePmk4t93UbZVCOUmrkJRJY2qOV8m4-VZn5BrsKdYYWdEfCFcYz7JUmZX_I7K6mA6OS0xVFFDpNSKXUIiZflJDWbfqm95JMltO6nLmf5eCbaoWX683mEoqzsNF2dK7oOj4HVG_FLHN8vawa0pMHza-Gn1mTFIGmGZPKNZEAaKEsvQHjkWK83Ug8ZNlqm32yVoGSQKB3-LsPNr4FbYGT4X8ZZSOVCvaQaAwVu7Xl5pwIJQK5EP90rHFr6FLxO5o'}

    return (
        <Container>
            <ImageBanner source={banner}/>
            <ContainerContent>
                <Title>Únete a nuestra comunidad</Title>
                <Subtitle>Descubre la mejor comidad casera cerca de ti</Subtitle>
            </ContainerContent>
        </Container>
    )
}


const Container = styled.View`
    flex: 1;  
`
const ContainerContent = styled.View`
    flex: 1;
    padding: 20px;
`

const ImageBanner = styled.ImageBackground`
    width: 100%;
    aspect-ratio: 1.5;
`
const Title = styled.Text`
    margin-top: 40px;
    font-weight: bold;
    color: #23272F;
    font-size: 45px;
`

const Subtitle = styled.Text`
    margin-top: 10px;
    font-size: 20px;
    color: #9A9692;

`
const Texto = styled.Text``