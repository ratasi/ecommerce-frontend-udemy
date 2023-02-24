import { media } from "@/styles/media";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { GridColumn, Header } from "semantic-ui-react";

export const ContainerBestSellers = styled.div`
  padding: 40px 0;

  .ui.grid {
    justify-content: center;
    row-gap: 10px;
  }
`;

export const Title = styled(Header)`
  text-align: center;
  margin: 20px 0 40px 0 !important;

  span {
    background-image: linear-gradient(
      to right,
      rgb(134, 239, 172),
      rgb(59, 130, 246),
      rgb(147, 51, 234)
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

export const ContainerProduct = styled(GridColumn)`
  box-shadow: 0 15px 15px rgb(183 148 244 / 50%);
  border-radius: 24px;
  min-width: 40%;
  margin: 0 10px;
  display: inline-block;
  padding: 0 !important;
  overflow: hidden;

  > div {
    padding: 10px;
  }

  .ui.header {
    margin: 5px 0;
  }

  ${media.greatherThanM} {
    min-width: 20%;
  }
`;

export const ImageProduct = styled(Image)`
  border-radius: 20px;
  width: 100%;
  height: auto;
`;

export const LinkProduct = styled(Link)`
  width: 100%;
  padding: 15px;
  background: linear-gradient(
      90deg,
      rgba(129, 0, 216, 0.7) 2.16%,
      rgba(235, 49, 251, 0.63) 132.3%
    ),
    #1cb67e;
  color: #fff;
  font-weight: 600;
  border-radius: 0;
  display: inline-block;
  margin-bottom: -1px;
  text-align: center;

  :hover {
    color: #fff;
  }
`;
