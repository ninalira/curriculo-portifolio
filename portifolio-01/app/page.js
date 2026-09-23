import styles from './page.module.css';
import Link from 'next/link';

const acessos = [
  {
    titulo: 'Sobre',
    descricao: 'Formação e atividades extracurriculares.',
    href: '/sobre',
    cor: 'yellow',
  },
  {
    titulo: 'Projetos',
    descricao: 'Alguns trabalhos que já fiz.',
    href: '/projetos',
    cor: 'lightblue',
  },
  {
    titulo: 'Jogo da Forca',
    descricao: 'Um projeto para aprender e se diverti.',
    href: '/forca',
    cor: 'turquoise',
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <span className={styles.eyebrow}>Currículo & Portfólio</span>
        <h1 className={styles.heroTitle}>Nina Lira</h1>
        <p className={styles.heroSubtitle}>
          Desenvolvedora em formação. Com interesse em data science e engenharia de requisitos.
        </p>
      </section>

      <section className={styles.grid}>
        {acessos.map((item) => (
          <Link key={item.titulo} href={item.href} className={`${styles.card} ${styles[item.cor]}`}>
            <h2 className={styles.cardTitle}>{item.titulo}</h2>
            <p className={styles.cardDescricao}>{item.descricao}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}