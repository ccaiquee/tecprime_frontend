import styled from 'styled-components'

export const Container = styled.div`
    width: 60%;
    background: #fff;
    box-shadow: #f8f8f8 2px 2px 20px 5px;
    border-radius: 6px;
    margin: 120px auto;
    max-width: 430px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    width: 90%;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;    
    margin: 20px;
`
export const Logo = styled.img`
     height: 70px;
     width: 220px;
    color: #ff5e5e;
    font-size: 34px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-top: 15px;
    margin-bottom: 20px;
`
export const Register = styled.label`
    cursor: pointer;
    color: #9c9c9c;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    float: right;
    margin-right: 30px auto;
    margin-bottom: 15px;
    text-align: end;

    :hover{
        color: #40d3e3;
    }
`
