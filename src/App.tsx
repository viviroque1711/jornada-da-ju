import { useState } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Heart, Copy, Check, Menu, X,
  MessageCircle, ShieldCheck, Sparkles, Quote
} from "lucide-react";
import { campaign, storySections, voiceQuotes, campaignNeeds } from "./content";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="section-label"><span />{children}</div>;
}

function StoryImage({ src, alt, caption, className = "" }: { src: string; alt: string; caption: string; className?: string }) {
  return (
    <figure className={`story-image ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  async function copyPix() {
    try {
      await navigator.clipboard.writeText(campaign.pix.copyPasteCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      const field = document.createElement("textarea");
      field.value = campaign.pix.copyPasteCode;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      field.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(field);
      setCopied(ok);
      window.setTimeout(() => setCopied(false), 2400);
    }
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#inicio" onClick={closeMenu}>
          <span className="wordmark-mark">V.</span>
          <span>VIVA A VIDA <b>JULIANA</b></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#minha-historia" onClick={closeMenu}>Minha história</a>
          <a href="#jornada" onClick={closeMenu}>Minha jornada</a>
          <a href="#corrente" onClick={closeMenu}>Como ajudar</a>
          <a className="nav-cta" href="#contribuir" onClick={closeMenu}>Contribua <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-inner">
            <SectionLabel>{campaign.eyebrow}</SectionLabel>
            <h1>Nunca foi<br/><em>sobre um diagnóstico.</em></h1>
            <div className="hero-rule"><span /></div>
            <p className="hero-manifesto">Eu tinha planos, projetos e sonhos. Até que um diagnóstico mudou tudo.</p>
            <p className="hero-description">{campaign.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contribuir">CAMINHE COMIGO <ArrowUpRight size={16}/></a>
              <a className="text-link" href="#minha-historia">LEIA MINHA HISTÓRIA <ArrowDown size={15}/></a>
            </div>
          </motion.div>
        </div>
        <div className="hero-photo has-photo">
          <img src={campaign.heroImage} alt="Juliana sorrindo ao lado de suas calopsitas." fetchPriority="high"/>
          <div className="photo-caption"><span>EU SOU A JULIANA</span><span>MINHA HISTÓRIA, MINHA VOZ</span></div>
        </div>
        <div className="hero-bottom"><span>DESÇA E CONHEÇA MINHA JORNADA</span><span>↓</span><span>VIVA A VIDA, JULIANA</span></div>
      </section>

      <section className="intro section-pad" id="minha-historia">
        <div className="intro-side">
          <SectionLabel>01 — QUEM EU SOU</SectionLabel>
          <span className="vertical-note">ANTES DE CADA DIAGNÓSTICO, EXISTE UMA VIDA INTEIRA</span>
        </div>
        <StoryImage
          src="/jornada-da-ju/images/juliana-portrait.webp"
          alt="Retrato de Juliana em um momento pessoal."
          caption="Eu, muito além dos capítulos difíceis."
          className="intro-photo"
        />
        <motion.div className="intro-content" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <p className="large-serif">Antes de conhecer minhas batalhas, quero que você conheça <em>a mulher.</em></p>
          {storySections[0].paragraphs.map((paragraph) => <p className="body-copy" key={paragraph}>{paragraph}</p>)}
          <p className="signature">Com carinho,<br/><strong>Juliana</strong></p>
        </motion.div>
      </section>

      <section className="opening-quote">
        <Quote className="quote-mark" />
        <p>Nunca foi sobre um diagnóstico.</p>
        <span>— JULIANA BATISTA</span>
      </section>

      <section className="journey section-pad" id="jornada">
        <div className="section-heading">
          <SectionLabel>02 — MINHA JORNADA</SectionLabel>
          <h2>Uma vida de capítulos.<br/><em>Muitas razões para continuar.</em></h2>
          <p>Vou contar, com minhas palavras, alguns dos momentos que marcaram esse caminho.</p>
        </div>
        <div className="story-chapters">
          {storySections.slice(1).map((chapter, index) => (
            <motion.article
              className={index % 2 === 0 ? "story-chapter" : "story-chapter reverse"}
              key={chapter.id}
              id={chapter.id}
              initial={reduceMotion ? false : { opacity: 0, y: 36 }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.16 }}
              variants={fadeUp}
            >
              <StoryImage src={chapter.image} alt={chapter.imageAlt} caption={chapter.imageCaption}/>
              <div className="chapter-copy">
                <span className="chapter-number">{chapter.number}</span>
                <span className="timeline-kicker">{chapter.kicker}</span>
                <h3>{chapter.title}</h3>
                {chapter.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="voice-wall">
        <div className="voice-inner">
          <SectionLabel>03 — PALAVRAS QUE SÃO MINHAS</SectionLabel>
          <h2>Minha fé. Minha voz.<br/><em>Meu jeito de seguir.</em></h2>
          <div className="voice-grid">
            {voiceQuotes.map((quote, index) => (
              <motion.div
                className="voice-card"
                key={quote}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <span>0{index + 1}</span>
                <p>“{quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="continuing section-pad">
        <div className="continuing-image">
          <img src="/jornada-da-ju/images/juliana-hospital-heart.webp" alt="Juliana sorrindo no hospital e fazendo um coração com a mão." loading="lazy"/>
          <span>UM DIA DE CADA VEZ</span>
        </div>
        <div className="continuing-copy">
          <SectionLabel>04 — POR QUE ESTOU CONTANDO</SectionLabel>
          <h2>Hoje, eu preciso de uma corrente que caminhe <em>comigo.</em></h2>
          <p>{campaignNeeds.purpose}</p>
          <p>{campaignNeeds.inspiration}</p>
          <p>Se você se sentir tocado pela minha história e puder contribuir, qualquer valor será recebido com gratidão. Se não puder, compartilhar esta página também é uma forma de caminhar comigo.</p>
          <a className="button button-gold" href="#contribuir">QUERO RECEBER SUA AJUDA <ArrowUpRight size={16}/></a>
        </div>
      </section>

      <section className="support section-pad" id="corrente">
        <div className="support-heading">
          <SectionLabel>05 — UMA CORRENTE DE SOLIDARIEDADE</SectionLabel>
          <h2>Um gesto pode chegar<br/><em>mais longe do que imaginamos.</em></h2>
          <p>Eu gostaria de contar com as pessoas que se sentirem motivadas pela minha história. Uma contribuição, por menor que seja, pode aliviar parte do peso financeiro desta caminhada. E compartilhar também ajuda minha mensagem a chegar mais longe.</p>
        </div>
        <div className="support-points">
          <div><Heart/><h3>Contribua</h3><p>Qualquer valor é bem-vindo e será destinado à campanha.</p></div>
          <div><MessageCircle/><h3>Compartilhe</h3><p>Ajude minha história a chegar a quem pode caminhar comigo.</p></div>
          <div><ShieldCheck/><h3>Faça parte</h3><p>Seu gesto me ajuda a continuar e permite que esta história alcance outras pessoas.</p></div>
        </div>
      </section>

      <section className="donate" id="contribuir">
        <div className="donate-inner">
          <SectionLabel>06 — SUA SOLIDARIEDADE FAZ PARTE DA MINHA HISTÓRIA</SectionLabel>
          <h2>Se puder, caminhe<br/><em>um trecho comigo.</em></h2>
          <p>Você pode contribuir com qualquer valor pelo Pix. O recebimento é feito pela minha mãe, Lourdes Aparecida Batista, que está responsável por esta arrecadação.</p>
          <div className="pix-panel">
            <div className="pix-visual">
              <img className="pix-qr" src={campaign.pix.qrImage} alt="QR Code Pix da campanha Viva a Vida, Juliana."/>
              <span>APONTE A CÂMERA DO CELULAR</span>
            </div>
            <div className="pix-details">
              <span className="timeline-kicker">PIX — VALOR LIVRE</span>
              <h3>Contribua do seu jeito.</h3>
              <p>Leia o QR Code ou copie o código Pix. Antes de confirmar, confira se o nome exibido pelo seu banco é <strong>Lourdes Aparecida Batista</strong>.</p>
              <div className="beneficiary">
                <small>RESPONSÁVEL PELO RECEBIMENTO</small>
                <strong>{campaign.pix.beneficiaryDisplayName}</strong>
                <span>Chave Pix aleatória · valor livre</span>
              </div>
              <button className="button button-gold" onClick={copyPix}>
                {copied ? <Check size={16}/> : <Copy size={16}/>}
                {copied ? "CÓDIGO PIX COPIADO" : "COPIAR CÓDIGO PIX"}
              </button>
              <small className="security-note">Depois de copiar, abra o aplicativo do seu banco, escolha Pix Copia e Cola, confira os dados e confirme somente se o beneficiário estiver correto.</small>
            </div>
          </div>
          <a className="share-link" href="https://wa.me/?text=Quero%20compartilhar%20a%20campanha%20Viva%20a%20Vida%2C%20Juliana!%20Conhe%C3%A7a%20a%20hist%C3%B3ria%20e%20fa%C3%A7a%20parte%20dessa%20corrente." target="_blank" rel="noreferrer"><MessageCircle size={18}/> COMPARTILHAR MINHA HISTÓRIA <ArrowUpRight size={15}/></a>
        </div>
      </section>

      <section className="final-message">
        <Sparkles/>
        <p>Eu já atravessei muitos capítulos.</p>
        <h2>Mas minha história<br/><em>continua sendo escrita.</em></h2>
        <span>Obrigada por caminhar comigo.</span>
        <strong>JULIANA BATISTA</strong>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#inicio"><span className="wordmark-mark">V.</span><span>VIVA A VIDA <b>JULIANA</b></span></a>
        <p>Uma história real. Uma corrente de solidariedade.</p>
        <div className="footer-contact">
          <a href="https://wa.me/5511973967161" target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp">
            <MessageCircle size={14}/> Fale conosco pelo WhatsApp
          </a>
          <span className="footer-signature">Desenvolvido por <a href="https://roquebusinessevolution.com/" target="_blank" rel="noreferrer">Roque Business Evolution</a></span>
        </div>
      </footer>
    </main>
  );
}
