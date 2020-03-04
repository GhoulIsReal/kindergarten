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

const InnerProgramDesc2 = () => {
    return (
        <styled.ProgramDescription>Ваш малыш уже подрос, он учится ходить и активно познает окружающий мир? Приглашаем Вас и Вашего малыша на увлекательные развивающие занятия с психологом-педагогом. <br /> В программе: <br /> ⁃пальчиковые игры; <br /> ⁃бэби-фитнес; <br /> ⁃развитие речи; <br /> ⁃творчество для малышей: лепка, рисование, аппликации; <br /> ⁃сказкотерапия.</styled.ProgramDescription>
    )
}

const InnerProgramDesc3 = () => {
    return (
        <styled.ProgramDescription>Данный курс поможет вашему ребенку быть в топе лучших учеников школы! Ведь в начальных классах идет закладка фундамента для дальнейшей успешной учёбы. Наши преподаватели помогут вашим детям подготовиться по следующим направлениям: <br />⁃ментальная арифметика; <br />⁃красивый почерк; <br />⁃скорочтение; <br />⁃русский язык; <br />⁃английский язык; <br />⁃казахский язык; <br />⁃репетиторство по предметам.</styled.ProgramDescription>
    )
}

export { Program, InnerProgramDesc, InnerProgramDesc2, InnerProgramDesc3 };