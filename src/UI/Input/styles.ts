import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  color: ${COLORS.LIGHT_GRAY};
  font-size: 18px;
  margin-bottom: 10px;
  padding-left: 5px;
`;

export const Input = styled.input`
  transition: 0.2s;
  width: 100%;
  padding-left: 15px;
  border-radius: 15px;
  height: 45px;
  font-size: 16px;
  margin-bottom: 20px;
  background: ${COLORS.DEEP_BLUE};
  border: 1px solid ${COLORS.BG};
  color: ${COLORS.WHITE};

  &::placeholder {
    color: ${COLORS.GRAY};
  }

  &:focus {
    border: 1px solid ${COLORS.PINK};
  }
`;
