'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

const PALAVRAS = [
  'REACT', 'JAVASCRIPT', 'PYTHON', 'HTML', 'CSS', 'PROGRAMACAO',
  'COMPUTADOR', 'TECLADO', 'MONITOR', 'INTERNET', 'ALGORITMO',
  'VARIAVEL', 'FUNCAO', 'OBJETO', 'ARRAY', 'NAVEGADOR', 'SERVIDOR',
  'BANCO', 'FRAMEWORK', 'BIBLIOTECA', 'COMPONENTE', 'ESTADO',
  'PROPRIEDADE', 'INTERFACE', 'USUARIO', 'APLICATIVO', 'SISTEMA',
  'REDE', 'SOFTWARE', 'HARDWARE', 'DESENVOLVEDOR', 'CODIGO',
  'DEBUG', 'GITHUB', 'TERMINAL', 'LINGUAGEM', 'LOGICA', 'ROTEADOR',
];

const MAX_ERROS = 6;
const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function sortearPalavra() {
  return PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];
}

export default function Forca() {
  const [palavra, setPalavra] = useState(PALAVRAS[0]);
  const [tentativas, setTentativas] = useState([]);

  useEffect(() => {
    setPalavra(sortearPalavra());
  }, []);

  const erros = tentativas.filter((letra) => !palavra.includes(letra)).length;
  const acertos = tentativas.filter((letra) => palavra.includes(letra));

  const venceu = palavra.split('').every((letra) => tentativas.includes(letra));
  const perdeu = erros >= MAX_ERROS;
  const jogoTerminou = venceu || perdeu;

  function tentarLetra(letra) {
    if (jogoTerminou || tentativas.includes(letra)) return;
    setTentativas((atual) => [...atual, letra]);
  }

  function reiniciar() {
    setPalavra(sortearPalavra());
    setTentativas([]);
  }

  return (
    <div className={styles.page}>
      <span className={styles.eyebrow}>Projeto</span>
      <h1 className={styles.title}>Jogo da Forca</h1>
      <p className={styles.subtitle}>
        Adivinhe a palavra escolhida antes que o desenho seja completado.
        Você tem {MAX_ERROS} tentativas erradas antes de perder.
      </p>

      <div className={styles.board}>

        <div className={styles.info}>
          <p className={styles.palavra}>
            {palavra.split('').map((letra, indice) => (
              <span key={indice} className={styles.letraSlot}>
                {tentativas.includes(letra) || jogoTerminou ? letra : '_'}
              </span>
            ))}
          </p>

          <p className={styles.contadorErros}>
            Erros: {erros} / {MAX_ERROS}
          </p>

          {venceu && (
            <div className={`${styles.mensagem} ${styles.mensagemVitoria}`}>
               Parabéns, você acertou! A palavra era <strong>{palavra}</strong>.
            </div>
          )}

          {perdeu && (
            <div className={`${styles.mensagem} ${styles.mensagemDerrota}`}>
               Você perdeu! A palavra era <strong>{palavra}</strong>.
            </div>
          )}

          <button type="button" className={styles.botaoReiniciar} onClick={reiniciar}>
            {jogoTerminou ? 'Jogar novamente' : 'Reiniciar'}
          </button>
        </div>
      </div>

      <div className={styles.teclado}>
        {ALFABETO.map((letra) => {
          const jaTentou = tentativas.includes(letra);
          const correta = jaTentou && palavra.includes(letra);
          const incorreta = jaTentou && !palavra.includes(letra);

          return (
            <button
              key={letra}
              type="button"
              disabled={jaTentou || jogoTerminou}
              onClick={() => tentarLetra(letra)}
              className={[
                styles.tecla,
                correta ? styles.teclaCorreta : '',
                incorreta ? styles.teclaIncorreta : '',
              ].join(' ')}
            >
              {letra}
            </button>
          );
        })}
      </div>

      <div className={styles.historico}>
        <p className={styles.historicoTitulo}>Letras já tentadas</p>
        <p className={styles.historicoLista}>
          {tentativas.length === 0 && (
            <span className={styles.historicoVazio}>Nenhuma letra tentada ainda.</span>
          )}
          {tentativas.map((letra) => (
            <span
              key={letra}
              className={
                palavra.includes(letra) ? styles.historicoCorreta : styles.historicoIncorreta
              }
            >
              {letra}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}