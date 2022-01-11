import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { Add, Remove } from "@mui/icons-material";
import React from "react";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {publicRequest} from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const Container =styled.div``;

const Wrapper =styled.div`
padding:50px;
display:flex;
`;

const ImageContainer =styled.div`
flex:1;
    margin:150px;
    min-width: 80px;
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

const Image =styled.img`

height:80%;

`;

const InfoContainer =styled.div`
flex:1;
padding:0px 50px;
`;

const Title =styled.h1`
color: #B26585;
font-weight: 600;
font-size: 50px;
`;

const Desc =styled.p`
color: #56A08E;
font-weight:400;
margin:20px 0px;
font-size: 30px;
`;

const Price =styled.span`
font-weight: 100;
margin:10px;
font-size: 25px;
font-weight:400;
padding: 5px;
color:#ffffff;
background-color:#B26585;
border-radius: 10px;
`;

const AddContainer =styled.div`
width: 50%;
display:flex;
align-items: center;
justify-content:space-between;
`;

const AmountContainer =styled.div`
display:flex;
align-items: center;
color:#B26585;
font-size: 30px;
cursor:pointer;

`;

const Amount =styled.span`
padding: 20px;
color:#B26585;
font-size: 30px;
width:30px;
height:30px;
border-radius: 10px;
border:5px;
border-color:#B21442;
display:flex;
align-items: center;
justify-content:center;
margin: 0px 5px;
`;

const Button =styled.button`
font-weight: 100;
margin:10px;
font-size: 20px;
font-weight:400;
padding: 5px;
color:#ffffff;
background-color:#B26585;
border-radius: 10px;
cursor:pointer;


&:hover{
    background-color:#B21442;
}
`;

const Product = () => {
    const location = useLocation();
    const id = (location.pathname.split("/")[2]);

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct =  async () => {
            try
            {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            }
            catch{}
        };
        getProduct();
    },[id]);

    const handleQuantity = (type) => {
        if(type === "dec")
        {
          quantity > 1 && setQuantity(quantity - 1);
        }
        else
        {
            setQuantity(quantity + 1)
        }
    };

    const handleClick = () => {
        dispatch(
          addProduct({ ...product, quantity})
        );
      };
    return (
        <Container>
            <Navbar/>
            <Banner/>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{fill: "#B26585" , fontSize:30}} onClick={()=>handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <Add style={{fill: "#B26585", fontSize:30}} onClick={()=>handleQuantity("inc")}/>
                        </AmountContainer>
                        <Button onClick={handleClick}>Add To Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Product
