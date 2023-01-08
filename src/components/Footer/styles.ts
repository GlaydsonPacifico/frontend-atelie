import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  margin-top: 10rem;
  box-shadow: 0 0 5px rgba(83, 51, 237, 1);
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.colors.secondary};
      text-transform: uppercase;
      font-size: 1.2rem;
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.secondary};
        width: 3rem;
        height: 3rem;
        transition: 0.5s;

        &:hover {
          color: ${({ theme }) => theme.colors.primary};
        }
      }
    }

    @media (max-width: 900px) {
      button {
        font-size: 1.2rem;
      }

      > section {
        gap: 0.5rem;
        svg {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`;
