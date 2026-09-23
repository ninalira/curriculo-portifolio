import styles from './page.module.css';
import Link from 'next/link';

const projetos = [
  {
    titulo: 'Jogo dos Dados',
    descricao:
      'Projeto de aprendizado da cadeira de Programação Web-Mobile.',
    tags: ['Next.js', 'React'],
    href: '#',
    interno: true,
    imagem: '/projeto2.png',
  },
  {
    titulo: 'Sistema para empresa de móveis planejados',
    descricao:
      'Atualmente, estou desenvolvendo um projeto em grupo. Onde estamos criando uma aplicação web para melhora a comunicação da empresa com o cliente.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    href: '#',
    interno: false,
    imagem: null,
  },
  {
    titulo: 'Projeto Acesso Inclusivo',
    descricao:
      'Projeto de controle de acesso inclusivo na Universidade Católica de Pernambuco. Com o intuito de facilitar o acesso de pessoas com deficiência nas catracas da universidade e gerar autonomia para esse alunos. Destravamento de uma tranca automatizada via leitura de tags RFID.',
    tags: ['C', 'Arduino'],
    href: '#',
    interno: false,
    imagem: '/projeto1.png',
  },
  {
    titulo: 'Delivery de pizza',
    descricao:
      'No meus estudo de Programação Orientada a Objetos, em grupos criamos um sistema em terminal para gestão de um delivery de pizza e eventos, com relatórios de desempenho.',
    tags: ['Java'],
    href: '#',
    interno: false,
    imagem: null,
  },
  {
    titulo: 'Banco de dados para clínica veterinária',
    descricao:
      'Durante a cadeira de Projeto de Banco de Dados, criei uma banco para uma clinica veterinária, desde a modelagem, a verificação da normalização e a implementação no MySQL.',
    tags: ['MySQL'],
    href: '#',
    interno: false,
    imagem: null,
  },
];

export default function Projetos() {
  return (
    <div className={styles.page}>
      <span className={styles.eyebrow}>Portfólio</span>

      <h1 className={styles.title}>Projetos</h1>

      <p className={styles.subtitle}>
        Alguns trabalhos que fiz durante os estudos.
      </p>

      <div className={styles.list}>
        {projetos.map((projeto) => (
          <article key={projeto.titulo} className={styles.card}>

            {/* A área da imagem só aparece quando o projeto possui uma imagem */}
            {projeto.imagem && (
              <div className={styles.imagemWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  className={styles.imagem}
                />
              </div>
            )}

            <div className={styles.cardConteudo}>
              <h2 className={styles.cardTitle}>
                {projeto.titulo}
              </h2>

              <p className={styles.cardDescricao}>
                {projeto.descricao}
              </p>

              <ul className={styles.tagList}>
                {projeto.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>

              {projeto.interno ? (
                <Link
                  href={projeto.href}
                  className={styles.cardLink}
                >
                </Link>
              ) : (
                <span className={styles.cardLinkDisabled}></span>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}