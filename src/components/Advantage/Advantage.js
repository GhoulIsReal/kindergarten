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

const InnerAdvantageDesc = () => {
    return (
        <styled.AdvantageCardDescription>В результате ребенок: <br />- Готов к поступлению в топ-школы Астаны; <br />- Обладает знаниями, превышающими базовый уровень; <br />- Владеет лидерскими навыками: целеустремлен, самостоятелен и коммуникабелен.</styled.AdvantageCardDescription>
    )
}

export { Advantage, InnerAdvantageDesc };