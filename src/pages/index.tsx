import { useEffect } from 'react';
import Aos from 'aos';

import { HomeContainer } from '../styles/HomeStyles';
import { Header } from '../components/Header';
import { HomeBoard } from '../components/HomeBoard';
import { PersonalBoard } from '../components/PersonalBoard';
import { Footer } from '../components/Footer';
import { Products } from '../components/Products';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomeBoard />
        <PersonalBoard />
        <Products />
      </main>
      <Footer />
    </HomeContainer>
  );
}
