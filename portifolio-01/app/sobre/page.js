import styles from './page.module.css';

const habilidades = [
  'Java',
  'React',
  'Next.js',
  'C/C++',
  'Python',
  'SQL',
  'Lógica de programação',
];

const formacao = [
  {
    periodo: '2024.2 — atual',
    titulo: 'Ciências da Computação',
    local: 'Universidade Católica de Pernambuco',
    descricao: 'Cursando, com foco e dedicação.',
  },
  {
    periodo: '2020 — 2022',
    titulo: 'Ensino Médio ',
    local: 'Colégio Marista São Luís',
    descricao: 'Me formei em 2022, já visando a área de tecnologia.',
  },
];

const atividades = [
  {
    titulo: 'Participação em programa de mentoria da Avanade',
    descricao:
      'Durante meu segundo período de graduação, fui mentorada por uma profissional da área, que me ajudou e me guiou no inicio do curso.',
  },
  {
    titulo: 'Mentora no projeto Padawan na Unicap',
    descricao:
      'Participei do projeto de extenção, onde mentorei duas caloura do curso de ciência da computação na Unicap. Ajudando elas se adaptarem à universidade e ao curso.',
  },
  {
    titulo: 'Participando do SWITAB',
    descricao:
      'Atualmente estou participando do projeto SWITAB-SupportingWomen In Technology Across Borders, me conectando com outras mulheres da área, sendo mentorada por uma profissional, me permitiu fazer visitas a empresas de tecnologia e mentorando outras meninas.',
  },
];

export default function Sobre() {
  return (
    <div className={styles.page}>
      <span className={styles.eyebrow}>Sobre mim</span>
      <h1 className={styles.title}>Um pouco da minha trajetória</h1>

      <p className={styles.paragraph}>
        Sou estudante de Ciência da Computação, 
      </p>

      <div className={styles.skillList}>
        {habilidades.map((h) => (
          <span key={h} className={styles.skill}>
            {h}
          </span>
        ))}
      </div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Formação acadêmica</h2>
        <ol className={styles.timeline}>
          {formacao.map((item) => (
            <li key={item.titulo} className={styles.timelineItem}>
              <span className={styles.timelinePeriodo}>{item.periodo}</span>
              <h3 className={styles.timelineTitulo}>{item.titulo}</h3>
              <p className={styles.timelineLocal}>{item.local}</p>
              <p className={styles.timelineDescricao}>{item.descricao}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Atividades extracurriculares</h2>
        <ul className={styles.chipList}>
          {atividades.map((atividade) => (
            <li key={atividade.titulo} className={styles.chip}>
              <h3 className={styles.chipTitulo}>{atividade.titulo}</h3>
              <p className={styles.chipDescricao}>{atividade.descricao}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}