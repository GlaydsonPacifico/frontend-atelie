import { ItemContainer } from './styles';

interface PersonalProps {
  name: string;
  specialty: string;
  description: string;
}

export default function PersonalItem({
  name,
  specialty,
  description
}: PersonalProps) {
  return (
    <ItemContainer data-aos="fade-up">
      <div>
        <h1>{name}</h1>
        <h2>{specialty}</h2>
        <p> {description}</p>
      </div>
    </ItemContainer>
  );
}
