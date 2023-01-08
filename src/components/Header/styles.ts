import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  height: 4rem;
  margin-bottom: 5rem;
  box-shadow: 0 0 5px rgba(83, 51, 237, 1);

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: ${props =>
      props.isActive
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    transition: 0.5s;

    &:hover {
      font-size: 1.5rem;
      font-weight: 800;
      color: ${props =>
        props.isActive
          ? props.theme.colors.primary
          : props.theme.colors.primary};
    }
  }
`;
