import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 44px;
    height: 100%;
    min-height: 100vh;
    background-color: #736DF7;
`

export const Image = styled.img`
    margin-top: 10px;
    width: 275px;
    height: 275px;
`

export const ContainerItens = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 750px;
    height: auto;
    padding: 44px 12px;
    margin-bottom: 20px;
    border-radius: 7.5px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    backdrop-filter: blur(22.5px);
`

export const H1 = styled.h1`
    font-style: normal;
    font-weight: 500;
    width: auto;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 22px;
    border-radius: 7.5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    color: #fff;
`

export const Button = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-decoration: none;
    margin-top: 10px;
    
    width: 157px;
    height: 34px;
    border-radius: 14px;
    background: #4D47D6;
    /* background-color: transparent; */
    font-size: 14px;
    color: #fff;
    a{
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        font-weight: initial;
    }

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
    padding: 10px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 7.5px;
  
    i{
    cursor: pointer;
    font-size: 18px;
    color: #fff;
    display: flex;

    }
    i:hover{
        color: red;
        opacity: 0.8;
        transition: 0.3s ease-in;
    }
    &:hover{
        opacity: 0.8;
        background-color: #4D47D6;
    }
`

export const UserParagrf = styled.div`
    width: 350px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        padding-left: 12px;
        line-height: 22px;
        color: #fff;
    }
`

//Paginação 
export const PaginationContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 22px 0px 20px 0px;
`

export const PaginationButton = styled.button`
    padding: 4.5px 8.5px;
    border-radius: 7.5px;
    border: none;
    background-color: #4D47D6;
    color: white;
    font-size: 14px;
    cursor: pointer;

    &:hover {
     opacity: 0.8;
   
  }
`
// Modal

export const H2 = styled.h2`
    display: flex;
    justify-content: center;
    align-self: center;
    font-style: normal;
    font-weight: 500;
    width: 50%;
    font-size: 24px;
    line-height: 40px;
    margin-bottom: 22px;
    border-radius: 7.5px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    color: #fff;
`

export const ContainerModal = styled.section `
    display: flex;
    gap: 15px;

    flex-direction: column;
    justify-content: center;
    border-radius: 7.5px;
    padding: 5px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    backdrop-filter: blur(22.5px);
`


export const InputModal = styled.section`
    display: flex;
    gap: 15px;
    flex-direction: column;
    > input{
        display: flex;
        align-self: center;
        width: 25%;
        height: 22px;      
        border-radius: 7.5px;
        padding-left: 15px;
        border: none;
        outline: none;
    }
`

export const ContainerButton = styled.div`
    display: flex;
    align-self: center;
    width: 25%;
    gap: 10px;
`

export const ButtonModalSalve = styled.button`
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 34px;
    border-radius: 14px;
    background: #5cd527;
    font-size: 14px;
    color: #fff;
`

export const ButtonModalCancel = styled.button`
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 34px;
    border-radius: 14px;
    background: #f44336;
    font-size: 14px;
    color: #fff;
`