import React from 'react';
import * as styled from './AdvantagesHolderStyles';
import { FormattedMessage } from 'react-intl';
import Advantage from '../Advantage/Advantage';

const AdvantagesHolder = ({ advantagesCollection }) => {
    const advantagesArray = advantagesCollection.map((advantage, i) => <Advantage key={i} heading={advantage.heading} description={advantage.description}/>)

    return (
        <div>
            <styled.AdvantagesSectionHolder>
                <styled.AdvantagesHeading>
                    <FormattedMessage id="advantagesSection.heading"/>
                    <styled.AdvantagesBlurredBG />
                </styled.AdvantagesHeading>
                <styled.AdvantagesHolderBlock>
                    <styled.AdvantagesHolder>
                        { advantagesArray }
                    </styled.AdvantagesHolder>
                </styled.AdvantagesHolderBlock>
            </styled.AdvantagesSectionHolder>
        </div>
    )
}

export default AdvantagesHolder;