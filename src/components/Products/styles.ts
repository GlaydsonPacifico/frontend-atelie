import styled from 'styled-components';

interface ProductsProps {
  imgUrl: string;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > {
    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }

  > button {
    background: ${({ theme }) => theme.colors.secondary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }

    a {
      text-transform: uppercase;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.texLight};
    }

    @media (max-width: 500px) {
      padding: 1rem;
      a {
        font-size: 1rem;
      }
    }
  }
`;

export const ProductContainer = styled.div<ProductsProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section {
      div.text {
        right: -12rem;
      }

      > div.overlay {
        opacity: 0.25;
      }
    }

    > button a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  > button {
    margin: 0 0 3rem 5rem;
    height: 4rem;
    width: 12rem;
    background: none;
    border: none;

    a {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: 0.5s;
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    position: relative;

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.backgroundCard};
      opacity: 0.5;
    }

    > div.text {
      position: absolute;
      top: 3rem;
      right: -10rem;
      transition: 0.5s;
      width: fit-content;
    }

    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-size: 2rem;
    }
    h2 {
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 1.5rem;
      font-weight: 300;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 0 2rem 3rem 0;
    }

    > section > div.text {
      text-align: right;
      right: 0;
      left: -10rem;
    }

    &:hover {
      > section > div.text {
        left: -12rem;
      }
    }
  }

  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }

    @media (max-width: 1000px) {
      > section {
        width: 100%;

        > div.text {
          background: white;
          opacity: 75%;
          padding: 1rem;
          border-radius: 0.5rem;
          left: 1rem;
          top: 1rem;
        }
      }

      > button a {
        padding-left: 1rem;
      }

      > button {
        background: white;
        opacity: 75%;
        padding: 1rem;
        border-radius: 0.5rem;
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:nth-child(even) {
        flex-direction: row;

        > section {
          width: 100%;

          > div.text {
            left: 1rem;
            top: 1rem;
            text-align: left;
          }
        }
        > button {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          margin: 0;
        }

        &:hover {
          > section > div.text {
            left: 1rem;
          }
        }
      }
    }
  }

  @media (max-width: 700px) {
    height: 17rem;
  }

  @media (max-width: 400px) {
    > button {
      height: auto;

      a {
        font-size: 1.5rem;
      }
    }

    > section > div.text {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1rem;
        font-weight: 700;
      }
    }
  }
`;
