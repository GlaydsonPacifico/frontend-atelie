import { Footer } from '../../components/Footer';
import { FormContact } from '../../components/FormContact';
import { Header } from '../../components/Header';
import { Container } from './styles';

export default function Contact() {
  return (
    <Container>
      <Header />
      <div className="container">
        <FormContact />
      </div>
      <Footer />
    </Container>
  );
}
