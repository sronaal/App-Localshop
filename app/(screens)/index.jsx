import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import styled from 'styled-components/native';



export default function Welcome() {


    const imageBanner = { uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXF47eSgwWUm26VeozwsuX_ZGDtoX1Xl-5sZphu4b8w6ZhmmU2VbVZf3AJS8oMubuCOFYD7nPTSw4WFrRpcu843IEvdAhbkdArjwStTfpiY9bpQ3mi0Ez8q5v1F-dFVJ2FFjxm_esFQMlJR36W8FakcHXbKcGUFnOoqX6jxw88cyfSwpWBA7y0WalmjAIiqjaZl4Z_s5v3Pk02ZGMEd1to_qoej2WRSg2Qm4ChaAnJw1PqUsuRPbGOpLGrekIO26inZtjNpPmOZOs' }

    return (
        <Container>
            <Backgroud source={imageBanner}>
                <Gradient colors={['transparent', 'rgba(255, 255, 255, 0.8)']} />
                <ContainterText>
                    <Title>El sabor de la casa en la vuelta de la esquina</Title>
                    <Subtitle>Comida casera hecha por tus vecinos, hecha con amor para que la disfrutes</Subtitle>
                </ContainterText>
                <ContainerButton>
                    <ButtonComprar>
                        <ButtonText>Quiero comprar</ButtonText>
                    </ButtonComprar>
                    <ButtonVender>
                        <ButtonTextVender>Quiero vender</ButtonTextVender>
                    </ButtonVender>
                    <TextLink>
                        ¿Ya tienes una cuenta?
                        <ButtonIniciar onPress={() => router.push('/login')}>
                            <Link>Iniciar Sesión</Link>
                        </ButtonIniciar>
                    </TextLink>

                </ContainerButton>
            </Backgroud>
        </Container>
    )
}


const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center; 
    
`
const Backgroud = styled.ImageBackground`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
const Gradient = styled(LinearGradient)`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%; 

`
const ContainterText = styled.View`
    margin: 40% 0px 100px 0px;
    align-items: center;
`
const Title = styled.Text`
    font-size: 36px;
    text-align: center;
    color: #1C150E;
    font-weight: 900;
    margin-bottom: 10px;
`
const Subtitle = styled.Text`
    font-size: 16px;
    text-align: center;
    font-weight: 700;
    color: #1C150E;
    align-items: center;
`

const ContainerButton = styled.View`
    margin-top: 50%;
    text-align: center;;
`
const ButtonComprar = styled.TouchableOpacity`
    background-color: #EE8C2B;
    padding: 15px 90px;
    border-radius: 30px;
`

const ButtonVender = styled.TouchableOpacity`
    background-color: #fff;
    border: 1px solid gray;;
    padding: 15px 90px;
    border-radius: 30px;
    margin-top: 15px;
`


const ButtonTextVender = styled.Text`
    color: #000;
`
const ButtonText = styled.Text` 
    color: #FFF;
`

const TextLink = styled.Text`
    margin-top: 20px;
    text-align: center;
    color: #635E58;
   
`
const ButtonIniciar = styled.TouchableOpacity`
   margin-top: 8px;
   margin-left: 10%;
   padding-left: 10px;
`
const Link = styled.Text`
    

`



