import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Menu() {
    return (
        <Container>
            <Link to='/habitos'>
                <p>Habitos</p>
            </Link>
            <Link to='/historico'>
                <p>Historico</p>
            </Link>
        </Container>
    )
}

const Container = styled.div `
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 375px;
    height: 70px;
    bottom: 0px;
    background-color: #FFFFFF;
    p {
        font-family: Lexend Deca;
        font-size: 17.976px;
        line-height: 22px;
        color: #52B6FF;
    }
`