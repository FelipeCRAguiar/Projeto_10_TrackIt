import styled from "styled-components"
import checkmark from '../Assets/Vector.png'

export default function Habitohoje() {
    return (
        <Habito>
            <div>
                <Nome>Habito 1</Nome>
                <Sequencia>Sequência atual: 4 dias</Sequencia>
                <Sequencia>Seu recorde: 5 dias</Sequencia>
            </div>
            <Checkmark>
                <img src={checkmark} alt="check" />
            </Checkmark>
        </Habito>
    )
}

const Habito = styled.div`
    width: 340px;
    height: 94px;
    left: 17px;
    top: 177px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 17px;
    display: flex;
    box-sizing: border-box;
    padding-right: 13px;
    padding-left: 15px;
    justify-content: space-between;
    align-items: center;
`

const Nome = styled.p`
    font-family: Lexend Deca;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 7px;
`
const Sequencia = styled.p`
    font-family: Lexend Deca;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`
const Checkmark = styled.div`
    width: 69px;
    height: 69px;
    background-color: #8FC549;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`