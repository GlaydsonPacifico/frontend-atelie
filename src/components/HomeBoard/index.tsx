import { Container, ContainerImage } from './styles';
import img from '../../assets/imageHome.jpg';
import { TypeWriter } from '../TypeWriter';
import { SectionTitle } from '../SectionTitle';

export function HomeBoard() {
  return (
    <Container data-aos="fade-up">
      <SectionTitle
        title={<h1>Casa D&#39;Artes</h1>}
        description={
          <TypeWriter value="O atelier, localizado na cidade de Itapetim - PE, é um desejo antigo de Ana Simões, parte de uma família com extremo interesse artístico musical e por trabalhos manuais. 
          Composta pelos dotes dos irmãos e pai da família Vieira Simões,  a Casa D'artes brinda - nos com peças como bonecas de pano, objetos regionais em madeira e barro, esculturas e recordações da cidade.
          Arte que envolve num abraço caloroso quem quiser chegar!" />
        }
      />
      <ContainerImage>
        <img src={img} alt="" />
      </ContainerImage>
    </Container>
  );
}
