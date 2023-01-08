import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 5rem;

    @media (max-width: 1450px) {
      gap: 1rem;
    }
    @media (max-width: 1000px) {
      gap: 0.7rem;
    }
    @media (max-width: 700px) {
      gap: 2rem;
      flex-direction: column;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.colors.backgroundCard};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    transition: 0.5s;

    h1 {
      color: ${({ theme }) => theme.colors.texLight};
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.colors.texLight};
      font-size: 2rem;
      font-weight: 300;
      margin-bottom: 2rem;
    }

    p {
      color: ${({ theme }) => theme.colors.texLight};
      font-size: 1.5rem;
      font-weight: 300;
    }
  }

  &:hover > div {
    filter: brightness(1.5);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div {
    margin-top: 4rem;
  }

  @media (max-width: 1450px) {
    > div {
      height: 20rem;
      padding-top: 3rem;

      transition: 0.5s;

      > h1 {
        font-size: 2rem;
        margin-bottom: 0.5rem;
      }

      > h2 {
        font-size: 1.5rem;
        margin-bottom: 1.3rem;
      }

      > p {
        font-size: 1.1rem;
      }
    }
  }

  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      > h1 {
        font-size: 1.5rem;
      }

      > h2 {
        font-size: 1.2rem;
      }

      > p {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }
    &:hover > div {
      transform: translateY(0);
    }
    > div {
      height: 10rem;
    }

    > h1 {
      font-size: 1rem;
    }

    > h2 {
      font-size: 0.7rem;
    }

    > p {
      font-size: 0.5rem;
    }
  }
`;
