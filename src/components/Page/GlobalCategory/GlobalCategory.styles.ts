import styled from "@emotion/styled";
import Link from "next/link";
import { Grid } from "semantic-ui-react";

export const ContainerGlobalCategories = styled.div`
  padding: 30px 0;

  .ui.header {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ContainerCategories = styled(Grid)`
  .column {
    justify-content: center;
    display: grid !important ;
  }
`;

export const ContentLink = styled(Link)`
  border-radius: 5px;
  box-shadow: 0 2px 11px 0 rgb(0 0 0 / 17%);
  width: fit-content;

  .ui.header {
    padding: 10px 0;
    margin-top: 0;
  }
`;
