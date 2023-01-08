import { FormEvent, useState } from 'react';
import { FormContainer, Input, TextArea } from './styles';


export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        required
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        placeholder="E-mail"
        required
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        required
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}
