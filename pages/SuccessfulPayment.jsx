import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../requestMethods";
import styled from "styled-components"
import React from "react";
import { Link } from "react-router-dom";

const Background = styled.div``;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.25),
        rgba(255, 255, 255, 0.25)
    ),
    url("https://wallpapercave.com/wp/TZaDkqN.jpg")center;

    display:flex;
    align-items:center;
    justify-content:center;
    background-size:cover;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: #fff;
border:none;
border-radius:25px;
`;
const Button = styled.button`
width:100%;
border:none;
border-radius:15px;
padding:15px 20px;
background-color:#B26585;
color:#fff;
font-weight:600;
cursor:pointer;
`;

const SuccessfulPayment = () => {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.products;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  console.log(location);
  return (
    <Background>
    <Container>
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {orderId
          ? `Order has been created successfully. Your order number is ${orderId}`
          : `Payment successful. Your order is being prepared...`}
          <Link to="/">
        <Button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</Button>
            </Link>
      </div>
    

    </Wrapper>
    </Container>

    </Background>
  )
};

export default SuccessfulPayment;