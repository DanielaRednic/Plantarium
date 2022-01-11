import styled from "styled-components"
import React from "react";
import "../resources/home.css";
import "../resources/footer.css";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
width: 25%;
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
flex-direction:column;

`;

const Input = styled.input`
flex:1;
min-width:40%;
margin:10px 0px;
padding: 10px;
/* text-transform:capitalize; */
border-color:#d1d1d1;
border-radius:15px;
`;

const Button = styled.button`
width:40%;
border:none;
border-radius:15px;
padding:15px 20px;
background-color:#B26585;
color:#fff;
font-weight:600;
cursor:pointer;
&::disabled{
    color: #B26585;
    cursor: not-allowed;
}
`;

const BotText = styled.a`
margin:5px 0px;
font-size:14px;
border:none;
text-decoration:underline;
border-radius:25px;
cursor:pointer;
color: #B26585;
`;

const Error =styled.span`
color: red;
`

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error} = useSelector((state) => state.user)

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password}); 

    }
    return (
        <Background>
            <Navbar/>
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} maxLength="25"/>
                    <Input 
                    placeholder="password" 
                    type = "password" 
                    onChange={(e) => setPassword(e.target.value)} maxLength="25"/>
                    <Button onClick = {handleClick} disabled={isFetching}>LOGIN</Button>
                    {error ? <Error>Something went wrong...</Error> : null}
                    {/* <Link >Forgot password?</Link> */}
                    <Link to="/register">
                        <BotText>Create a new account</BotText>
                        </Link>
                </Form>
            </Wrapper>
        </Container>
        </Background>
    )
}
export default Login