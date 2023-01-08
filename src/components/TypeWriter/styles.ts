import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.5rem;
  text-align: justify;
  display: inline-block;
  margin: 0;
  margin-bottom: 3rem;
`;

export const blinkTextCursor = keyframes`
  from {border-color: rgba(163, 138, 247, 1)}
  to {border-color: transparent}
  `;

export const TextCursor = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  display: inline;

  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;
