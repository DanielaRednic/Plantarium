import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom";
import cart from '../img/shop_cart.png'; 
import heart from '../img/heart.png';
import lupa from '../img/lupa.png';

const Container= styled.div`
    flex:1;
    margin:100px;
    min-width: 150px;
    height: 300px;
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    /* width: 100%; */
    background: #F5F5F5;
    border-radius: 25px;
    object-fit: contain;
    margin-top:5px;
`;

const Image= styled.img`
    height: 60%;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  top: 125px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Icon= styled.img`
    width:32px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    bottom: 20px;
    top: 100;
    transition: all 0.5s ease;

    &:hover {
        transform:scale(1.3);
    }
`;

const Discount= styled.div`
    position: absolute;
    background: #B21442;
    padding: 5px;
    border-radius: 25px;
    color: #fff;
    right: 10px;
    top: 10px;
    text-transform: capitalize;
    flex:1;
    align-items:right;

    &:hover {
        transform:scale(1.1);
    }
`;

const DiscountText=styled.text``
    
const SingleProductView = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
            <Icon src={cart}/>
            <Icon src={heart}/>
            <Link to={`/product/${item._id}`}> 
            <Icon src={lupa}/>
            </Link>
            </Info>
            {/* <Discount>
                <DiscountText>50% Off</DiscountText> 
            </Discount> */}
        </Container>
    )
}

export default SingleProductView