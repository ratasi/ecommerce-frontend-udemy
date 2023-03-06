import { colors } from "@/styles/color";
import { media } from "@/styles/media";
import styled from "@emotion/styled";

export const ContainerProductPage = styled.div`
  padding: 50px 0;
`;

export const ContainerImages = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const InfoProduct = styled.div`
  padding-right: 0;

  ${media.greatherThanM} {
    padding-right: 50px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  margin: 20px 0 !important;
`;

export const TitleProduct = styled.h1`
  font-size: 50px;
  color: transparent;
  background-image: ${colors.gradientPrimary};
  background-clip: text;
  -webkit-background-clip: text;
`;
