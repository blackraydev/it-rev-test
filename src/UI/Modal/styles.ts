import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COLORS.MODAL_BG};
`;

export const Modal = styled.div`
  padding: 50px 25px;
  border-radius: 25px;
  background: ${COLORS.DEEP_BLUE};
  display: flex;
  flex-direction: column;
  width: 550px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 15px;
`;
