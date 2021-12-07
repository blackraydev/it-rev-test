import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Button = styled.button`
  transition: 0.2s;
  cursor: pointer;
  font-size: 18px;
  width: 125px;
  height: 50px;
  background: ${COLORS.PINK};
  border-radius: 15px;
  color: ${COLORS.WHITE};

  &:hover {
    background: ${COLORS.LIGHT_PINK};
  }

  &:disabled {
    cursor: unset;
    background: ${COLORS.GRAY};
  }
`;
