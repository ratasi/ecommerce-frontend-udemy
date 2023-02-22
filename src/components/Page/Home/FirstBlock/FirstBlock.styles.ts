import { media } from "@/styles/media";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { Header, HeaderSubheader } from "semantic-ui-react";

export const ContainerFirstBlock = styled.div`
  padding: 20px 0;

  ${media.greatherThanL} {
    padding: 80px 0;
  }
`;

export const Title = styled(Header)`
  font-size: 35px !important;
  font-weight: 700;

  span {
    background-image: linear-gradient(
      90deg,
      rgba(131, 58, 180, 0.9) 0%,
      rgba(253, 29, 29, 0.9) 100%
    );
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    display: block;
  }
`;

export const SubHeader = styled(HeaderSubheader)`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.3;
  max-width: 400px;
  margin: 20px 0 30px 0;

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

export const LinkShop = styled(Link)`
  display: inline-block;
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 0.9) 0%,
    rgba(253, 29, 29, 0.9) 100%
  );
  color: #fff;
  font-size: 1.25rem;
  padding: 10px 20px;
  border-radius: 5px;

  :hover {
    color: #fff;
  }
`;

export const ImageCaps = styled(Image)`
  border-radius: 20px;
  width: 100%;
  height: auto;
`;
