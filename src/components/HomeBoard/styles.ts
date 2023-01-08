import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  align-items: center;
`;

export const ContainerImage = styled.div`
  width: 70rem;
  height: 35rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 35rem;
    margin: 0 auto;
  }

  @media (max-width: 1450px) {
    width: 65rem;
    height: 40rem;

    > img {
      width: 65rem;
      height: 40rem;
    }
  }

  @media (max-width: 1050px) {
    width: 55rem;
    height: 30rem;

    > img {
      width: 55rem;
      height: 30rem;
    }
  }

  @media (max-width: 900px) {
    width: 50rem;
    height: 30rem;

    > img {
      width: 50rem;
      height: 30rem;
    }

    @media (max-width: 800px) {
      width: 45rem;
      height: 25rem;

      > img {
        width: 45rem;
        height: 25rem;
      }
    }

    @media (max-width: 730px) {
      width: 40rem;
      height: 20rem;

      > img {
        width: 40rem;
        height: 20rem;
      }
    }
  }

  @media (max-width: 700px) {
    width: 30rem;
    height: 20rem;

    > img {
      width: 30rem;
      height: 20rem;
    }
  }

  @media (max-width: 500px) {
    width: 20rem;
    height: 15rem;

    > img {
      width: 20rem;
      height: 15rem;
    }
  }
`;
