import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
`;

export const OpenFormText = styled.p`
  transition: 0.2s;
  cursor: pointer;
  color: ${COLORS.LIGHT_GRAY};
  font-size: 18px;

  &:hover {
    color: ${COLORS.PINK};
  }
`;
