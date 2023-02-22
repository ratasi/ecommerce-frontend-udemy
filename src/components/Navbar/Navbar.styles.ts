import { media } from "@/styles/media";
import styled from "@emotion/styled";
import Link from "next/link";
import { MenuItem, MenuMenu } from "semantic-ui-react";

export const ContainerNavbar = styled.div`
  transition: box-shadow 0.2 ease-in-out;
  box-shadow: 0px 3px 8px #ced2d2;
  padding: 10px 0;

  .ui.secondary.menu {
    margin-bottom: 0;
  }
`;

export const ContainerLogo = styled(Link)`
  display: flex;
  align-items: center;

  span {
    padding-left: 10px;
    color: #000;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const ContainerMenuDesktop = styled(MenuMenu)`
  display: none !important;

  ${media.greatherThanM} {
    display: flex !important;
  }
`;

export const ContainerBurguerMenu = styled(MenuItem)`
  display: flex !important;
  align-items: center !important ;
  justify-content: flex-end;

  i {
    font-size: 2.8rem;
    display: contents;
  }

  ${media.greatherThanM} {
    display: none !important;
  }
`;
