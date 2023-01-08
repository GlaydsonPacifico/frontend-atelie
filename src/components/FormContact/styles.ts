import styled from 'styled-components';

export const Container = styled.section``;

export const FormContainer = styled.form`
  margin-top: 8rem;
  gap: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 300;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    background: ${({ theme }) => theme.colors.secondary};
    transition: 0.5s;
    width: fit-content;

    &:disabled {
      opacity: 0.5;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1.5rem;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  outline: none;
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.primary};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.texLight};
  }

  @media (max-width: 450px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1.5rem;
  font-size: 1.3rem;
  border-radius: 0.5rem;
  outline: none;
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.primary};
  resize: none;

  grid-column: 1 / 3;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.texLight};
  }

  @media (max-width: 450px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;
