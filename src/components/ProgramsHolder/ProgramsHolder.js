import React from 'react';
import * as styled from './ProgramsHolderStyles';
import { FormattedMessage } from 'react-intl';
import Program from '../Program/Program';

const ProgramsHolder = ({ programsCollection }) => {
    const programsArray = programsCollection.map((program, i) => <Program key={i} image={program.image} heading={program.heading} description={program.description}/>)

    return (
        <div>
            <styled.ProgramsWrapper>
                <styled.ProgramsHolderHeadingKeeper><styled.ProgramsHolderHeading><FormattedMessage id="programsSection.heading"/></styled.ProgramsHolderHeading></styled.ProgramsHolderHeadingKeeper>
                <styled.ProgramsHoldingDiv>
                    { programsArray }
                </styled.ProgramsHoldingDiv>
            </styled.ProgramsWrapper>
        </div>
    )
}

export default ProgramsHolder;