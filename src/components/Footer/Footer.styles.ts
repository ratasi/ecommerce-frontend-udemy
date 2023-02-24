import { colors } from "@/styles/color";
import { media } from "@/styles/media";
import styled from "@emotion/styled";
import { Header } from "semantic-ui-react";

export const ContainerFooter = styled.footer`
  background: ${colors.gradientFourth};
  padding: 40px 20px;
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;

  .ui.header {
    color: #fff;
    margin: 0 0 0 10px;
  }
`;

export const ContentBlocks = styled.div`
  display: block;
  width: 100%;

  p {
    color: #fff;
    margin-top: 10px;
  }

  ${media.greatherThanM} {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

export const Title = styled(Header)`
  color: #fff !important;
`;

export const BlockFooter = styled.div`
  margin: 20px 0;

  a {
    color: #fff;
    display: block;
    margin: 10px 0;
  }
`;
