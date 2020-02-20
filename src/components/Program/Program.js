import React from 'react';
import * as styled from './ProgramStyles';

const Program = ({ image, heading, description }) => {
    return (
        <div>
            <styled.ProgramItself>
                <styled.ProgramImg src={image}></styled.ProgramImg>
                <styled.ProgramSectionRightCol>
                    <styled.ProgramHeading>{heading}</styled.ProgramHeading>
                    <styled.ProgramDescription>{description}</styled.ProgramDescription>
                </styled.ProgramSectionRightCol>
            </styled.ProgramItself>
        </div>
    )
}

export default Program;