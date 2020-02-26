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
`;

const MapHolder = styled.div`
    width: 100%;
    height: 100%
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