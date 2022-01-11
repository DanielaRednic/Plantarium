import styled from "styled-components"
import React from "react";
import "../resources/home.css";
import "../resources/footer.css";
import Navbar from "../components/Navbar";
import { useRef } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { register } from "../redux/apiCalls";

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

const Title = styled.h1`
font-size:24px;
font-weight:600;
color:#B26585;
`;

const Form = styled.form`
display:flex;
flex-wrap:wrap;

`;

const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 10px 0px 0px;
padding: 10px;
border-color:#d1d1d1;
border-radius:15px;
`;

const Agreement = styled.span`
font-size: 12px;
margin:20px 0px;
color:#B26585;
`;

const Button = styled.button`
width:25%;
border:none;
border-radius:15px;
padding:15px 20px;
background-color:#B26585;
color:#fff;
font-weight:600;
cursor:pointer;
`;

const Error =styled.span`
color: red;
`

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain !== password) {
        
        } else {
            register(dispatch, { username, email, password });
            history.push("/login");
        }
    };
    return (
        <Background>
        <Navbar/>
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form onSubmit={handleClick}>
                    {/* <Input placeholder="name"/>
                    <Input placeholder="last name"/> */}
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} maxLength="25"/>
                    <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} type="email" maxLength="35"/>
                    <Input placeholder="password" type="password" required onChange={(e) => setPassword(e.target.value)} maxLength="25"/>
                    <Input placeholder="confirm password" type="password" required onChange={(e) => setPasswordAgain(e.target.value)} maxLength="25"/>
                    
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button type="submit">Create Account</Button>
                    {error ? <Error>Passwords do not match</Error> : null}
                </Form>
            </Wrapper>
        </Container>
        </Background>
    )
}
export default Register