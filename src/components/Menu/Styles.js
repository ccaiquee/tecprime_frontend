import styled, { css } from 'styled-components'

export const Nav = styled.nav`
    height: 50px;
    padding: 0 30px;
    background: linear-gradient(-40deg, #ff5d5d, #ff5d5d);
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Div = styled.div`
    margin-right: 30px;   
     
`
export const Title = styled.label`
    color: #fff;
    top: 222px;     
    margin-right: 30px;
    font-size: 35px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
`
export const Category = styled.label`
    cursor: pointer;
    color: #fff;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
`
export const Container = styled.div`
   
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const Badge = styled.div`
    cursor: pointer;

    ${props => props.hasUnread && css`
        &::after {
            width: 10px;
            height: 10px;
            right: 0;
            left: 8px;
            top: -3px;
            margin-left: 20px;
            position: absolute;                                  
            background: #fff;
            border-radius: 50%;
            content: '';            
        }
    `}
     ${css`
        .arrow {
            height: 12px;
            widows: 12px;
            position: relative;            
            margin: 0px auto;
        }`}
`
export const ImageShopCart = styled.img`
    height: 30px;
    widows: 30px;
`
export const ImageArrow = styled.img`
    height: 10px;
    widows: 10px;
    position: relative;            
    margin: 0px auto;
`
export const Loggout = styled.label`
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    padding-left: 25px;

    :hover{
        color: #c9c9c9;
    }
`