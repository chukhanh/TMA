import styled from 'styled-components';

export const StyledSelect = styled.select`
  color: var(--blue);
`;

export const StyledErrorMessage = styled.div`
  font-size: 1.5rem;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.5rem;
  &:before {
    content: "❌ ";
    margin: auto 0;
    font-size: 1rem;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

export const StyledLabel = styled.label`
  margin-top: 1rem;
`;