import { styled } from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;

    background-color: rgb(2, 2, 26);

`
export const Image = styled.img`
    margin-top: 30px;
    width: 250px;
    height: 146px;
`
export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 36px;
    height: 645px;

    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
`
export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 80px;

    color: #fff;
`
export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
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
    font-size: 24px;
    line-height: 28px;
    color: #FFF;

    margin-bottom: 34px;
`
export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    margin-top: 77px;
    width: 342px;
    height: 54px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;

    color: #fff;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5
    }

`