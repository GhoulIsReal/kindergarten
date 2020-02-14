import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import mainImage from './mainpicture.jfif'

const ContainerHeaderAndBanner = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column;
`;

const BannerHolder = styled.div`
    width: 100vw;
    flex: 1;
    background: url(${mainImage}) center center no-repeat;  
    background-size: 100% 100%;
`;

const Banner = () => {
    return(
        <div>
            <ContainerHeaderAndBanner>
                <Header></Header>
                <BannerHolder>
                </BannerHolder>
            </ContainerHeaderAndBanner>
        </div>
    )
};

export default Banner;