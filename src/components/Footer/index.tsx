import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { Container } from './styles';

export function Footer() {
  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <Container>
      <div className="container">
        <button onClick={handleScrollTop} type="button">
          Voltar ao topo
        </button>
        <section>
          <AiOutlineInstagram
            onClick={() =>
              handleRedirect('https://www.instagram.com/casa_d_artes22/')
            }
          />
          <AiOutlineWhatsApp
            onClick={() =>
              handleRedirect(
                'https://api.whatsapp.com/send?phone=5581993450832'
              )
            }
          />
        </section>
      </div>
    </Container>
  );
}
