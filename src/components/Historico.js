import styled from "styled-components"
import Topo from "./Topo"
import Menu from "./Menu"


export default function Historico() {
    return (
        <>
            <Topo />
            <Titulo>Histórico</Titulo>
            <Aviso>Em breve você poderá ver o histórico dos seus hábitos aqui!</Aviso>
            <Menu />
        </>
    )
}

const Titulo = styled.p`
    font-family: Lexend Deca;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-left: 17px;
    margin-top: 28px;
    margin-bottom:  17px;
`
const Aviso = styled.p`
    margin-left: 17px;
    margin-right: 22px;
    width: 338px;
    display: flex;
    flex-wrap: wrap;
    font-family: Lexend Deca;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`