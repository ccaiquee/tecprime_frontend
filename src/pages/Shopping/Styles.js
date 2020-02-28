import styled from 'styled-components'

export const Container = styled.div`
    width: 60%;    
    background: #fff;
    box-shadow: #f8f8f8 2px 2px 20px 5px;
    margin: 120px auto;
    max-width: 650px;
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
export const Amount = styled.input`
    color: #9c9c9c;
    height: 30px;
    width: 45px;
    border-radius: 2px;
    border:none;
    text-align: center;
    outline: 0;
    :disabled {
        background: #ebebeb;
    }
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
export const Update = styled.button`
    cursor: pointer;
    color: #6e6e6e;
    margin: 7px;
    background: none;
    border: none;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`
export const Icon = styled.img`
    cursor: pointer;
    height: 14px;
    width: 14px;    
    margin-right: 18px;
`
export const Fooster = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    
    justify-content: space-between;
    margin-top: 50px;
    margin-bottom: 15px;
`

export const Checkout = styled.button`
    cursor: pointer;
    height: 30px;
    width: 80px;
    color: #fff;
    border: none;
    border-radius: 4px;
    background: #65d42f;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    margin-top: 50px;
    margin-bottom: 15px;

    :hover{
        background: #57bf24
    }
`