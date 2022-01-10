import styled from "styled-components"
import Menu from "./Menu";
import Topo from "./Topo";
import Habito from "./Habito";


export default function Habitos() {
    return (
        <Corpo>
            <Topo />
            <Titulo>
                <p>Meus hábitos</p>
                <div>+</div>
            </Titulo>
            <Criar>
                <input />
                <Dias>
                    <div>D</div>
                    <div>S</div>
                    <div>T</div>
                    <div>Q</div>
                    <div>Q</div>
                    <div>S</div>
                    <div>S</div>
                </Dias>
                <Salvar>
                    <p>Cancelar</p>
                    <button>Salvar</button>
                </Salvar>
            </Criar>
            <Habito />
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
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    margin-top: 28px;
    box-sizing: border-box;
    padding-left: 17px;
    padding-right: 18px;
    p {
        font-family: Lexend Deca;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    div {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 4.63636px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Lexend Deca;
        font-size: 26.976px;
        line-height: 34px;
        color: #FFFFFF;
    }
`

const Criar = styled.div`
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 17px;
    margin-bottom: 29px;
    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        box-sizing: border-box;
        border-radius: 5px;
        margin-bottom: 8px;
    }
`

const Dias = styled.div`
    width: 234px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 29px;
    div {
        width: 30px;
        height: 30px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-family: Lexend Deca;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Salvar = styled.div`
    display: flex;
    margin-left: 148px;
    align-items: center;
    p {
        font-family: Lexend Deca;
        font-size: 15.976px;
        line-height: 20px;
        color: #52B6FF;
        margin-right: 23px;
    }
    button {
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        font-family: Lexend Deca;
        font-size: 15.976px;
        line-height: 20px;
        color: #FFFFFF;
    }
`