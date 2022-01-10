import styled from "styled-components"

export default function Topo() {
    return (
        <Container>
            <p>TrackIt</p>
            <img />
        </Container>
    )
}

const Container = styled.div `
    width: 375px;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: 18px;
    padding-right: 10px;
    p {
        font-family: Playball;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }    
`