import React from 'react';
import { FormattedMessage } from 'react-intl';
import * as styled from './ContactsStyles';
import Map from '../Map/Map';

const Contacts = () => {
    return (
        <div>
            <styled.ContactsSection>
                <styled.ContactsHolder>
                    <styled.ContactsHeading><FormattedMessage id="contactsSection.heading"/></styled.ContactsHeading>
                    <styled.ContactsAndMapHolder>
                        <styled.ContactsParagraphsDiv>
                            <styled.ContactsAddress><FormattedMessage id="contactsSection.address"/></styled.ContactsAddress>
                            <styled.CommunicType>
                                <styled.CommunicTypeLabel><FormattedMessage id="contactsSection.label"/></styled.CommunicTypeLabel>
                                <styled.CommunicInfo><FormattedMessage id="contactsSection.communicInfo"/></styled.CommunicInfo>
                            </styled.CommunicType>
                            <styled.CommunicType>
                                <styled.CommunicTypeLabel> </styled.CommunicTypeLabel>
                                <styled.CommunicInfo><FormattedMessage id="contactsSection.communicInfo2"/></styled.CommunicInfo>
                            </styled.CommunicType>
                        </styled.ContactsParagraphsDiv>
                        <Map />
                    </styled.ContactsAndMapHolder>
                </styled.ContactsHolder>
            </styled.ContactsSection>
        </div>
    )
}

export default Contacts;