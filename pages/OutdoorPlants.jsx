import styled from "styled-components";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import React from "react";
import "../resources/home.css"
import "../resources/footer.css"
import ProductsList from "../components/ProductsList";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Container =styled.div``;
const Title =styled.h1`
margin:20px;
color:#B26585;
`;
const FilterContainer =styled.div`
display:flex;
justify-content:space-between;

`;
const Filter =styled.div`
margin:20px;
`;

const FilterText = styled.span`
font-size: 20px;
font-weight:600;
padding: 5px;
color:#ffffff;
background-color:#B26585;
border-radius: 10px;
`;

const Select = styled.select`
margin:10px;
font-size: 20px;
font-weight:600;
padding: 5px;
color:#ffffff;
background-color:#B26585;
border-radius: 10px;`;
const Option =styled.option`
font-size: 20px;
font-weight:600;
padding: 5px;
color:#ffffff;
background-color:#B26585;
border-radius: 10px;
`;


const OutdoorPlants = () => {
    const location = useLocation();
    const cat = (location.pathname.split("/")[1]);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState({});

    const handleFilters = (e) =>{
    const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };
console.log(filters);
    return (
        <Container>
            <Navbar/>
            <Banner/>
            <Title>Outdoor Plants</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Product Filter:</FilterText>
                    <Select name="categories" onChange={handleFilters}>
                        <Option value="outdoor-plants" default>All Plants</Option>
                        <Option value="trees">Trees</Option>
                        <Option value="roses">Roses</Option>
                        <Option value="seeds">Seeds</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="latest">Latest Additions</Option>
                        <Option value="h-l">Prices High to Low</Option>
                        <Option value="l-h">Prices Low to High</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <ProductsList cat={cat} filters={filters} sort={sort}/>
            <Footer/>
        </Container>
    )
}

export default OutdoorPlants