import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { TypeWriter } from '../../components/TypeWriter';
import { Container } from './styles';

export default function About() {
  return (
    <Container>
      <Header />
      <TypeWriter value='Teste' />
      <Footer />
    </Container>
  );
}
