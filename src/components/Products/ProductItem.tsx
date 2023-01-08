import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProductContainer } from './styles';

interface ProductProps {
  name: string;
  price: number;
  img: string;
}

export default function ProductItem({ name, price, img }: ProductProps) {
  return (
    <ProductContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{name}</h1>
          <h2>R$ {price}</h2>
        </div>
      </section>
      <button type="button">
        <Link href="/gallery">
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProductContainer>
  );
}
