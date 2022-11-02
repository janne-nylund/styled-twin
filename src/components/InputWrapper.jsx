import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputWrapper = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};
