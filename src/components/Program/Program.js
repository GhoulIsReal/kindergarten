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

const InnerProgramDesc = () => {
    return (
        <styled.ProgramDescription>В нашем мини саде обучение проходит через игру - ведь играя можно научить ребёнка всему на свете: иностранным языкам, наукам, полезным навыкам.<br /> Ваш ребенок: <br />⁃получит необходимые навыки общения со сверстниками; <br /> ⁃расширит свои знания об окружающей среде; <br /> ⁃приобретет самостоятельность и инициативность; <br /> ⁃разовьет творческие способности и навыки самообслуживания.</styled.ProgramDescription>
    )
}

export { Program, InnerProgramDesc };