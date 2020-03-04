import React, { useEffect } from 'react';
import styled from 'styled-components';
import DG from '2gis-maps';
import media from '../../mediaQueries';

const Holder = styled.div`
    width: 45%;
    height: 100%;
    ${media.ipadPortrait`
        width: 80%;
        height: 25vh;
    `}
    @media all and (device-width: 1024px) and (device-height: 768px) and (orientation:landscape) {
        height: 44vh;
    }
    @media all and (device-width: 768px) and (device-height: 1024px) and (orientation:portrait) {
        height: 29vh;
    }
    ${media.mobileL`
        width: 100%;
        height: 35vh;
    `}
    ${media.mobileM`
        height: 45vh;
    `}
`;

const MapHolder = styled.div`
    width: 100%;
    height: 100%;
`;

const Map = () => {
    let map = DG.DomUtil.get('map');
    useEffect(() => {
        if(map == null){
            map = DG.map('map', {
                'center': [51.088811, 71.438828],
                'zoom': 13
            });
            DG.marker([51.087149, 71.446905]).addTo(map);
        }
    });

    return (
        <Holder>
            <MapHolder id="map">

            </MapHolder>
        </Holder>
    )
}

export default Map;