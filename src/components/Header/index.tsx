import NavLink from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Casa D'Artes" path="/" />
      </ul>
      <ul>
        <NavLink title="Galeria" path="/gallery" />
        <NavLink title="Contato" path="/contact" />
      </ul>
    </Container>
  );
}
