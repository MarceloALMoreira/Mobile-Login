import { styled } from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 44px;
    height: 100%;
    min-height: 100vh;
    background-color: #736DF7;
    /* background-color: rgb(2, 2, 26); */

`

export const Image = styled.img`
    margin-top: 5px;
    width: 185px;
`

export const ContainerItens = styled.div`
    display: flex;
    flex-direction: column;
    padding: 44px 12px;
    margin-bottom: 20px;
    border-radius: 7.5px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 10px;
`

export const InputLabel = styled.p`
    margin-bottom: 5px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    padding-left: 12px;
    line-height: 22px;
    align-items: center;
    letter-spacing: -0.408px;
    color: #fff;
`

export const Input = styled.input`
    width: 320px;
    height: 32.5px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 7.5px;
    border: none;
    outline: none;
    padding-left: 22px;
    font-style: normal;
    font-weight: 200;
    font-size: 16px;
    line-height: 28px;
    color: #FFF;

    margin-bottom: 22px;
    transition: 0.3s ease;

        &:hover{
    border: 1px solid #FFF;
    transition: 0.3s ease;
    }
    &:placeholder-shown{
        color: #736DF7;
    }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    margin-top: 57px;
    width: 157px;
    height: 34px;
    text-decoration: none;
    background: #4D47D6;
    border-radius: 7.5px;
    border: none;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    color: #fff;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5
    }

`

export const LinkUser = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    margin-top: 57px;
    width: 157px;
    height: 34px;
    text-decoration: none;
    background: rgba(1, 1, 1, -5.8);
    border-radius: 7.5px;
    border: 1px solid white;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    color: #fff;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5
    }

`

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 15px;
    width: 342px;
    height: 38px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
  
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