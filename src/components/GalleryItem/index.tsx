import Link from 'next/link';
import { Container } from './styles';

interface GalleryItemProps {
  id: string
  name: string;
  price: number;
  imgUrl: string;
}

export function GalleryItem({ name, price, imgUrl }: GalleryItemProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href="#">
        <a>
          <div className="overlay" />
          <section>
            <h1>{name}</h1>
            <h2>{price}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}
