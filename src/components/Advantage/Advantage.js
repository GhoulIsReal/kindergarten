import React from 'react';
import * as styled from './AdvantageStyles';
import { AdvantagesBlurredBG } from '../AdvantagesHolder/AdvantagesHolderStyles';

const Advantage = ({ heading, description }) => {
    return (
        <styled.AdvantageCard>
            <styled.AdvantageCardHeading>{heading}</styled.AdvantageCardHeading>
            <styled.AdvantageCardDescription>{description}</styled.AdvantageCardDescription>
            <AdvantagesBlurredBG />
        </styled.AdvantageCard>    
    )
}

export default Advantage;