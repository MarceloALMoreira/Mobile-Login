import { styled } from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;
    height: 800px;
    background-color: rgb(2, 2, 26);

`
export const Image = styled.img`
    margin-top: 10px;
    width: 151px;
    height: 88px;
`
export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    padding: 44px 12px;
    margin-bottom: 20px;
    border-radius: 10px 10px 10px 10px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    backdrop-filter: blur(22.5px);
   `
export const H1 = styled.h1`
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 22px;
    border-bottom:  1px solid rgba(0, 0, 0, 0.8);
    color: #fff;
`
export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    padding-left: 18px;
    line-height: 22px;
    align-items: center;
    letter-spacing: -0.408px;
    color: #fff;
`
export const Input = styled.input`
    width: 342px;
    height: 38px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    padding-left: 18px;
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 28px;
    color: #FFF;

    margin-bottom: 34px;
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    margin-top: 120px;
    width: 342px;
    height: 54px;

    border-radius: 14px;
    border: 1px solid white;
    background-color: transparent;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: #fff;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5
    }
    svg{
        transform: rotateY(180deg)
    }

`
export const User = styled.li`

    margin-top: 15px;
    height: 28px;
    border: 1px solid white;
    /* background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none; */
  
    i{
    cursor: pointer;
    font-size: 24px;
    }
    i:hover{
        color: red;
        opacity: 0.8;
        transition: 0.3s ease-in;
    }
    p{
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;
        color: #fff;
    }
  
    &:hover{
        opacity: 0.8;
        background-color: greenyellow;
    }
`