import { colors } from "@/styles/color";
import { media } from "@/styles/media";
import styled from "@emotion/styled";
import Link from "next/link";

export const ContainerProductsButton = styled.div`
  padding: 40px 0;
  display: grid;
  grid-template-columns: 20% 1fr 20%;

  .ui.divider:not(.vertical):not(.horizontal) {
    border-top: 4px solid #dce7ed;
  }

  ${media.greatherThanM} {
    padding: 80px 0;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const LinkProduct = styled(Link)`
  text-align: center;
  margin: 0 30px;
  background: ${colors.gradientPrimary};
  color: #fff;
  font-size: 1.25rem;
  padding: 10px 20px;
  border-radius: 5px;

  :hover {
    color: #fff;
  }
`;
