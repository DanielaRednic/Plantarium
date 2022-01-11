import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import "../resources/home.css";
import "../resources/footer.css";
import { Add, Remove } from '@mui/icons-material';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { addProduct, removeProduct, clearCart } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Container =styled.div``;

const Wrapper =styled.div`
/* padding: 20px; */
`;

const Title =styled.h1`
/* margin:20px; */
background-color: #B26585;
color:#fff;
font-weight: 500;
text-align:center;
`;

const Top =styled.div`
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
color:#B26585;
`;

const TopButton =styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
/* border:${(props) => props.type === "filled" && "none"};
background-color:${(props) => props.type === "filled" ? "#B26585" : "transparent"};
color:${(props) => props.type === "filled" && "white"}; */
border-radius:15px;
border:none;
background-color:#B26585;
color:#fff;
`;

const TopTexts =styled.div``;

const TopText =styled.span`
text-decoration:underline;
cursor:pointer;
margin:0px 10px;
font-weight:bold;
`;

const Bottom =styled.div`
display:flex;
justify-content:space-between;
`;

const Info =styled.div`
flex:3;
`;


const Product = styled.div`
display:flex;
justify-content:space-between;
`;

const ProductDetails = styled.div`
flex:2;
display:flex;
margin-left:30px;
`;

const Image = styled.img`
height:auto;
width:10vh;

`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction:column;
justify-content:space-around;
margin-left:10px;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductType = styled.span``;

const ProductFlower = styled.span``;

const PriceDetails = styled.span`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const ProductAmountContainer = styled.div`
display: flex;
align-items:center;
`;

const ProductAmount = styled.div`
font-size: 24px;
margin:5px;
color:#8DC2B6;
`;

const ProductPrice = styled.div`
font-size:30px;
font-weight:400;
color:#B21442;
`;

const Hr = styled.hr`
background-color:#B26585;
border:none;
height: 1px;
margin-top:5px;
margin-bottom:5px;
margin-left:15px;
`;

const Summary =styled.div`
flex:1;
border: 0.5px solid;
border-color:#B26585;
border-radius: 15px;
padding: 20px;
height:50vh;
`;

const SummaryTitle = styled.div`
font-weight: 500;
color:#B21442;
`;

const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content:space-between;

`;

const SummaryItemText = styled.span`
color:#8DC2B6;
`;

const SummaryItemPrice = styled.span`
color:#8DC2B6;
`;

const CheckOutButton = styled.button`
width:100%;
border:none;
background-color:#B26585;
color:#fff;
padding: 10px;
font-weight: 600;
cursor: pointer;
font-size:16px;
border-radius: 10px;
/* justify-content:center; */
`;

const ClearCartButton = styled.button`
width:100%;
border:none;
background-color:#B26585;
color:#fff;
margin-top: 20px;
padding: 10px;
font-weight: 600;
cursor: pointer;
font-size:16px;
border-radius: 10px;
/* justify-content:center; */
`;


const Cart = () => {
    let cart = useSelector((state) => state.cart);
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const [stripeToken, setStripeToken] = useState(null);
    const history = useHistory();
    // const handleQuantity = ();

    const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: (cart.total) * 100,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && cart.total >=1 && makeRequest();
  }, [stripeToken, cart.total, history]);

  const handleQuantity = (type) => {
    if(type === "dec")
    {
      quantity > 1 && setQuantity(quantity - 1);
      removeProduct({ ...product, quantity})
    }
    else
    {
        setQuantity(quantity + 1)
        addProduct({ ...product, quantity})
    }
  const handleAddClick = () => {
    dispatch(
      handleQuantity = (type) => {
        if(type === "inc")
           {
              setQuantity(quantity + 1)
              addProduct({ ...product, quantity})
           }   
      }
    );
  }
  };
  // const handleRemoveClick = () => {
  //   dispatch(
  //     handleQuantity = (type) => {
  //       if(type === "desc")
  //          {
  //           quantity > 1 && setQuantity(quantity - 1);
  //           removeProduct({ ...product, quantity})
  //          }   
  //     }
  //   );
  // };
  // };


// const handleAddClick = () => {
//     dispatch(
      
//     );
//   };
  const handleRemoveClick = () => {
    dispatch(
      removeProduct({ ...product, quantity})
    );
  };

  const handleClearCart = () => {
    dispatch(
      clearCart({ ...cart})
    );
  };


    return (
        <Container>
            <Navbar/>
            {/* <Banner/> */}
            <Wrapper>
                <Title>Cart</Title>
                <Top>
                <Link to={`/`}>
                    <TopButton>Continue Shopping</TopButton>
                </Link>
                    <TopTexts>
                        <TopText>Shopping Bag ({cart.quantity})</TopText>
                        <TopText>Wishlist ()</TopText>
                    </TopTexts>
                    {/* <TopButton>Checkout Now</TopButton> */}
                </Top>
                <Bottom>
                    <Info>
                    {cart.products.map((product) => (
              <Product>
                <ProductDetails>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductID>
                      <b>ID:</b> {product._id}
                    </ProductID>
                    <ProductType>
                        <b>Type:</b> {product._type}
                    </ProductType>
                    <ProductFlower>
                        <b>Has Flowers:</b> {product._flowers}
                    </ProductFlower>
                  </Details>
                </ProductDetails>
                <PriceDetails>
                {/* onClick={handleClick} */}
                  <ProductAmountContainer>
                    {/* <Remove style={{fill: "#8DC2B6"}} /> */}
                    <ProductAmount>{product.quantity}</ProductAmount>
                    {/* <Add style={{fill: "#8DC2B6"}} /> */}
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetails>
              </Product>
            ))}
                        <Hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name="Plantarium"
                            image="https://cdn.discordapp.com/attachments/899622649741852672/914952611290038313/logo-color.png"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <CheckOutButton>CHECKOUT NOW</CheckOutButton>
                        </StripeCheckout>
                            <ClearCartButton onClick={handleClearCart}>CLEAR CART</ClearCartButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
                    }

export default Cart
