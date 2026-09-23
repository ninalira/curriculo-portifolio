import './globals.css';
import styles from './layout.module.css';
import Link from 'next/link';

export const metadata = {
  title: 'Nina Lira | Currículo & Portfólio',
  description: 'Currículo, portfólio e projeto Jogo da Forca em Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo}>
              NL
            </Link>
            <nav className={styles.nav}>
              <Link href="/">Início</Link>
              <Link href="/forca" className={styles.navHighlight}>
                Jogo da Forca
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

      </body>
    </html>
  );
}