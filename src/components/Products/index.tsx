import Link from 'next/link';
import { useEffect, useState } from 'react';
import api from '../../services/api';

import { SectionTitle } from '../SectionTitle';
import ProductItem from './ProductItem';
import { Container } from './styles';

export function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.get("/product/listProducts")
    .then((res) => console.log(res.data))
    .catch((err) => {
      console.log("Ops! Ocorreu um erro" + err);
    })
  }, [])
  
  return (
    <Container data-aos="fade-up">
      <SectionTitle title="Alguns de nossos produtos" />

      <section>
        <ProductItem
          name="Produto 1"
          price={30.5}
          img="https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
        <ProductItem
          name="Produto 2"
          price={30.5}
          img="https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
        <ProductItem
          name="Produto 3"
          price={30.5}
          img="https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
      </section>
      <button type="button">
        <Link href="/gallery">
          <a>Ver todos os produtos</a>
        </Link>
      </button>
    </Container>
  );
}
