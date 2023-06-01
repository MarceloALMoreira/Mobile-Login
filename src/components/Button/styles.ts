import styled from 'styled-components'

// interface ButtonProps{
//     isBack: boolean
// }

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
    /* background:  ${(props) => props ? 'transparent' : '#4D47D6'} ; */
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