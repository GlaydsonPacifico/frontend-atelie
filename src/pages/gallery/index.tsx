import { Footer } from '../../components/Footer';

import { Header } from '../../components/Header';
import { GalleryItem } from '../../components/GalleryItem';
import { Container } from './styles';

export default function Gallery() {
  return (
    <Container>
      <Header />
      <main className="container">
        <GalleryItem
          id="1"
          name="Produto 01"
          price={30.5}
          imgUrl="https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
        <GalleryItem
          id="1"
          name="Produto 01"
          price={30.5}
          imgUrl="https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
        <GalleryItem
          id="1"
          name="Produto 01"
          price={30.5}
          imgUrl="https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
        <GalleryItem
          id="1"
          name="Produto 01"
          price={30.5}
          imgUrl="https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
      </main>
      <Footer />
    </Container>
  );
}
