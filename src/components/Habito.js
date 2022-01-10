import styled from "styled-components"
import lixo from '../Assets/lixo.png'


export default function Habito() {
    return (
        <Container>
            <Lixo>
                <img src={lixo} alt="lixo" />
            </Lixo>
            <p>Habito 1</p>
            <Dias>
                <div>D</div>
                <div>S</div>
                <div>T</div>
                <div>Q</div>
                <div>Q</div>
                <div>S</div>
                <div>S</div>
            </Dias>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 17px;
    margin-bottom: 10px;
    p {
        font-family: Lexend Deca;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
        margin-bottom: 8px;
    }
`

const Dias = styled.div`
    width: 234px;
    display: flex;
    justify-content: space-between;
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

const Lixo = styled.div`
    position: absolute;
    top: 11px;
    right: 10px;
    img {
        width: 13px;
        height: 15px;
    }
`