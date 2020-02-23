import React, { useEffect } from 'react';
import styled from 'styled-components';
import DG from '2gis-maps';

const Holder = styled.div`
    width: 45%;
    height: 100%;
`;

const MapHolder = styled.div`
    width: 100%;
    height: 100%
`;

const Map = () => {
    useEffect(() => {
        const map = DG.map('map', {
            'center': [51.088811, 71.438828],
            'zoom': 13
        });
        DG.marker([51.087149, 71.446905]).addTo(map);
    });

    return (
        <Holder>
            <MapHolder id="map">

            </MapHolder>
        </Holder>
    )
}

export default Map;