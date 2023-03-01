import { colors } from "@/styles/color";
import styled from "@emotion/styled";
import Link from "next/link";
import { Header } from "semantic-ui-react";

export const ContainerCategory = styled.div`
  padding: 50px 0;
`;

export const Title = styled(Header)`
  text-align: center;
  margin-bottom: 30px !important;
`;

export const ContainerTextPrice = styled.div`
  .ui.large.header,
  .ui.medium.header {
    margin: 10px 0;
    text-align: center;
  }
`;

export const ContainerImage = styled.div`
  text-align: center;
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
`;

export const LinkButton = styled(Link)`
  padding: 10px 15px;
  width: 100%;
  text-align: center;
  display: inline-block;
  background: ${colors.gradientFourth};
  color: #fff;
  border-radius: 10px;

  :hover {
    color: #fff;
  }
`;
