import linkit from '../Assets/Group 8.png'
import styled from 'styled-components'
import { Link } from "react-router-dom" 

export default function Cadastro() {
    
    return (
        <Container>
            <img src={linkit} alt='logo'/>
            <form>
                <input type="email" placeholder='email'/>
		        <input type="password" placeholder='senha'/>
                <input type='text' placeholder='nome' />
                <input type='url' placeholder='foto' />
		        <button type="submit">Entrar</button>
            </form>
            <Link to='/'>
                <Redirecionar>
                    Já tem uma conta? Faça login!
                </Redirecionar>
            </Link>
        </Container>
    )
}

const Container = styled.div `
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 68px;
    img {
        margin-bottom: 32.62px;
    }
    form {
        input {
            width: 303px;
            height: 45px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-family: Lexend Deca;
            font-size: 19.976px;
            line-height: 25px;
            color: #DBDBDB;
            margin-bottom: 6px;
            margin-left: 36px;
        }
        button {
            width: 303px;
            height: 45px;
            background-color: #52B6FF;
            border-radius: 4.63636px;
            font-family: Lexend Deca;
            font-size: 20.976px;
            line-height: 26px;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 36px;
            border: none;
            margin-bottom: 25px;
        }
    }
`
const Redirecionar = styled.p `
    font-family: Lexend Deca;
    font-size: 13.976px;
    line-height: 17px;
    text-decoration-line: underline;
    color: #52B6FF;
`