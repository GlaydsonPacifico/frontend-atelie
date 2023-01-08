import { SectionTitle } from '../SectionTitle';
import { TypeWriter } from '../TypeWriter';
import PersonalItem from './PersonalItem';
import { Container } from './styles';

export function PersonalBoard() {
  return (
    <Container>
      <SectionTitle
        title="Alguns de Nossos Artesãos"
        description={<TypeWriter value="Descrição dos nossos artesãos" />}
      />
      <section>
        <PersonalItem
          name="Ana Simões"
          specialty="Pintura"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <PersonalItem
          name="Paulo Simões"
          specialty="Esculturas"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <PersonalItem
          name="Fia Simões"
          specialty="Crochê"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <PersonalItem
          name="Gabriela Simões"
          specialty="Música"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </section>
    </Container>
  );
}
