import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background: #fff;
    box-shadow: #f8f8f8 2px 2px 20px 5px;
    border-radius: 8px;
    margin: 120px auto;
    max-width: 420px;
    display: flex;
    flex-direction: column;
   
`
export const Title = styled.label`
    color: #3fabf2;
    font-size: 34px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin: 35px;
`

export const Ul = styled.ul`
    display: flex;
    padding: 15px;    
    flex-direction: column;
    list-style-type: none;   
    text-align:center;
`
export const Li = styled.li` 
    cursor: pointer;  
    height: 40px;
    width: 100%;   
    color: #7d7d7d;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 200px;
    display: inline-block;
    margin-bottom: 10px;   
    padding: 10px;   
    :hover{
        color: #fff;
        background: #3fabf2;
    }
`

export const ItemProduct = styled.label`
    color: #878787;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 200px;
    margin-bottom: 10px;
` 