import { colors } from "@/styles/color";
import styled from "@emotion/styled";
import { Button, ModalActions } from "semantic-ui-react";

export const ContainerQuantityCart = styled.div`
  padding-top: 20px;
`;

export const ContainerAddCart = styled.div`
  .ui.button {
    background: linear-gradient(125.53deg, #ff9979 0%, #811fff 100%);
    color: #fff;
    border-radius: 10px;
  }
`;

export const ButtonCheckout = styled(Button)`
  background-color: ${colors.gradientFive} !important;
`;

export const ModalActionsContainer = styled(ModalActions)`
  .button {
    border-radius: 10px;
  }

  .ui.primary.button {
    background: ${colors.gradientFive};
  }
`;
