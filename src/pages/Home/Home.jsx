import { Helmet, HelmetProvider } from 'react-helmet-async';
import css from './Home.module.css';

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook welcome page</h1>
      </div>
    </HelmetProvider>
  );
}
