import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 4.5rem;
  }

  > h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: 300;
    font-size: 3.5rem;
  }

  @media (max-width: 1450px) {
    h1 {
      font-size: 4rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3.5rem;
      margin-bottom: 0;
    }

    h2 {
      font-size: 3rem;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
`;
