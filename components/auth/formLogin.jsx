import styled from 'styled-components/native'
export default function FormLogin(){

    return (
        <Container>
           <Label>Nombre completo</Label>
           <InputName 
           placeholder='Ingrese su nombre completo'
           placeholderTextColor='#AA8A6A'
           />
           <Label>Contraseña</Label>
           <InputName 
           placeholder='Ingrese su contraseña'
           placeholderTextColor='#AA8A6A'
           />
        </Container>
    )
}

const Container = styled.View`
  
   width: 420px;
   height: auto;
`
const Label = styled.Text`
    font-size: 20px;
    color: #2f2d2c;
    margin-bottom: 4px;
`
const InputName = styled.TextInput`
    border: 1px solid #bebdbd;
    padding: 14px;
    border-radius: 8px;
    color: #635E59;
`