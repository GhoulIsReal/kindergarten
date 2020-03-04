import React from "react";
import * as styled from "./SideBarStyles";
import { FormattedMessage } from "react-intl";
import { Link } from "react-scroll";

const SideBar = ({ IsChecked }) => {
  return (
    <div>
      <styled.SideBarItself id="sidebar" style={{ transform: IsChecked ? 'scale(1.0, 1.0)' : '', opacity: IsChecked ? '0.88' : '' }}>
        <styled.SideBarMenu>
          <Link
            activeClass="active"
            to="aboutUs"
            smooth={true}
            duration={500}
            style={{ marginLeft: "25px" }}
          >
            <styled.SideBarAnchors>
              <FormattedMessage id="mainScreen.aboutUs" />
            </styled.SideBarAnchors>
          </Link>
          <Link
            activeClass="active"
            to="programs"
            smooth={true}
            duration={700}
            style={{ marginLeft: "25px" }}
          >
            <styled.SideBarAnchors>
              <FormattedMessage id="mainScreen.programs" />
            </styled.SideBarAnchors>
          </Link>
          <Link
            activeClass="active"
            to="advantages"
            smooth={true}
            duration={900}
            style={{ marginLeft: "25px" }}
          >
            <styled.SideBarAnchors>
              <FormattedMessage id="mainScreen.advantages" />
            </styled.SideBarAnchors>
          </Link>
          <Link
            activeClass="active"
            to="contacts"
            smooth={true}
            duration={900}
            style={{ marginLeft: "25px" }}
          >
            <styled.SideBarAnchors>
              <FormattedMessage id="mainScreen.contacts" />
            </styled.SideBarAnchors>
          </Link>
        </styled.SideBarMenu>
      </styled.SideBarItself>
    </div>
  );
};

export default SideBar;
