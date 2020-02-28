import styled from 'styled-components'

export const Container = styled.div`
    width: 60%;    
    background: #fff;
    box-shadow: #f8f8f8 2px 2px 20px 5px;
    margin: 120px auto;
    max-width: 950px;
    display: flex;
    flex-direction: column;   
    justify-content: center;
    align-items: center;
`
export const Table = styled.table`      
    width: 100%;
    border-collapse: collapse;        
`
export const Thead = styled.thead`    
    color: #fff;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    background: #3fabf2;    
`
export const Tr = styled.tr`
    height: 25px;
    width: 100%;
`
export const Th = styled.th`
    text-align: center;
`
export const Td = styled.td`
    height: 80px;  
    width: 5%;  
    color: #666; 
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
`
export const Tbody = styled.tbody`
    text-align: center;
   
`
export const AmountRemove = styled.button`
    color: #b82828;    
    width: 20px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    border: none;
    border-radius: 4px;
    background: none;
`
export const Amount = styled.input`
    color: #9c9c9c;
    height: 30px;
    width: 45px;
    border-radius: 2px;
    border: 1px solid #9c9c9c; 
    text-align: center;
    outline: 0;
`
export const AmountAdd = styled.button`
    color: #30ab32;    
    width: 20px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    border: none;
    border-radius: 4px;
    background: none;
`
export const ButtonBuy = styled.button`
    cursor: pointer;
    color: #9c9c9c;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    height: 30px;
    width: 90px;    
    background: none;   
    border-radius: 4px;
    border: 1px solid #9c9c9c;    

    :hover{
        color: #fff;
        background: #2cb5d4;
        border: none;
    }
`