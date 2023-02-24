import { colors } from "@/styles/color";
import { media } from "@/styles/media";
import styled from "@emotion/styled";

export const ContainerBanner = styled.section`
  padding: 20px;
  display: block;
  align-items: center;
  background: ${colors.gradientThird};
  border-radius: 20px;
  max-width: 1000px;
  margin: 0 auto;

  ${media.greatherThanM} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px 40px;
  }
`;

export const ContainerText = styled.div`
  padding: 20px;

  .ui.header,
  p {
    color: #fff;
  }

  .ui.button {
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.8);
    color: #2b6cb0;
  }
`;

export const ContainerImage = styled.div`
  text-align: center;

  img {
    border-radius: 20px;
    max-width: 100%;
    height: auto;
  }
`;
