import styled from "styled-components"
import Topo from "./Topo"
import Menu from "./Menu"
import Habitohoje from "./Habitohoje"


export default function Hoje() {
    return (
        <Corpo>
            <Topo />
            <Titulo>
                <Dia>Segunda, 17/05</Dia>
                <Sub>Nenhum hábito concluído ainda</Sub>
            </Titulo>
            <Habitohoje />
            <Menu />
        </Corpo>
    )
}

const Corpo = styled.body`
    background-color: #f2f2f2;
    width: 375px;
    height: 1080px;
`

const Titulo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 17px;
    margin-top: 28px;
    margin-bottom: 28px;
`
const Sub = styled.p`
    font-family: Lexend Deca;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
`

const Dia = styled.p`
    font-family: Lexend Deca;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`