import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';

import Form from './Form';

export function FormContact() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Algo te agradou?
            <br />
            Envie uma mensagem
          </>
        }
        description={
          <>
            Preencha o formulário abaixo
            <br />
            irei retornar em breve
          </>
        }
      />

      <Form />
    </Container>
  );
}
