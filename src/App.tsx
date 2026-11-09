import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Heart,
  Copy,
  Check,
  Menu,
  X,
  Instagram,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { campaign, storyChapters } from "./content";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="section-label"><span />{children}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const reduceMotion = useReducedMotion();

  async function copyPix() {
    if (!campaign.pix.copyPasteCode) return;
    try {
      await navigator.clipboard.writeText(campaign.pix.copyPasteCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
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
        <button className="menu-toggle" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#historia" onClick={closeMenu}>A história</a>
          <a href="#jornada" onClick={closeMenu}>A jornada</a>
          <a href="#corrente" onClick={closeMenu}>Como ajudar</a>
          <a className="nav-cta" href="#contribuir" onClick={closeMenu}>Fazer parte <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grain" />
        <div className="hero-copy">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-inner">
            <SectionLabel>{campaign.eyebrow}</SectionLabel>
            <h1>{campaign.title.split(",")[0]},<br/><em>Juliana.</em></h1>
            <div className="hero-rule"><span /></div>
            <p className="hero-manifesto">{campaign.heroHeadline}</p>
            <p className="hero-description">{campaign.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#contribuir">FAÇA PARTE DESSA HISTÓRIA <ArrowUpRight size={16}/></a>
              <a className="text-link" href="#historia">CONHEÇA A JORNADA <ArrowDown size={15}/></a>
            </div>
          </motion.div>
        </div>
        <div className={campaign.heroImage ? "hero-photo has-photo" : "hero-photo"}>
          {campaign.heroImage ? (
            <img src={campaign.heroImage} alt="Retrato de Juliana, publicado com sua autorização." />
          ) : (
            <div className="photo-placeholder">
              <span>RETRATO AUTORIZADO DE JULIANA</span>
              <small>O espaço está reservado para uma fotografia real escolhida por ela.</small>
            </div>
          )}
          <div className="photo-caption"><span>UMA HISTÓRIA REAL</span><span>01 / 04</span></div>
        </div>
        <div className="hero-bottom"><span>DESLIZE PARA CONHECER</span><span>↓</span><span>VIVA A VIDA, JULIANA</span></div>
      </section>

      <section className="intro section-pad" id="historia">
        <div className="intro-side"><SectionLabel>01 — QUEM É JULIANA</SectionLabel><span className="vertical-note">UMA VIDA INTEIRA, ALÉM DOS DESAFIOS</span></div>
        <motion.div className="intro-content" initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
          <p className="large-serif">Antes de conhecer sua jornada de saúde, queremos que você conheça <em>a mulher.</em></p>
          <p className="body-copy">Seus afetos, seus sonhos, sua personalidade, as coisas que a fazem sorrir e as pessoas que caminham ao seu lado. Porque nenhuma história cabe em um diagnóstico.</p>
          <p className="pending-note">Este capítulo será escrito a partir das palavras de Juliana e das fotografias que ela escolher compartilhar.</p>
        </motion.div>
      </section>

      <section className="quote-band">
        <div className="quote-image" aria-hidden="true"><span>FÉ&nbsp; · &nbsp;CORAGEM&nbsp; · &nbsp;VIDA</span></div>
        <div className="quote-copy">
          <SectionLabel>UMA VOZ QUE É DELA</SectionLabel>
          <blockquote>“Venci todos eles.”</blockquote>
          <p>Uma frase compartilhada por Juliana. Sua história será contada respeitando sua voz, sua fé e sua maneira de olhar para a vida.</p>
        </div>
      </section>

      <section className="journey section-pad" id="jornada">
        <div className="section-heading">
          <SectionLabel>02 — A JORNADA</SectionLabel>
          <h2>Capítulos de uma<br/><em>história em movimento.</em></h2>
          <p>Uma linha do tempo construída com cuidado, a partir dos relatos e registros que Juliana autorizar compartilhar.</p>
        </div>
        <div className="timeline">
          {storyChapters.map((chapter, index) => (
            <motion.article
              className="timeline-item"
              key={chapter.number}
              initial={reduceMotion ? false : { opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <div className="timeline-number">{chapter.number}</div>
              <div className="timeline-card">
                <span className="timeline-kicker">CAPÍTULO {chapter.number}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.text}</p>
                <small>{chapter.note}</small>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="manifesto">
        <div className="manifesto-inner">
          <Sparkles className="manifesto-star" />
          <p className="manifesto-overline">NÃO É APENAS SOBRE UMA LUTA</p>
          <h2>É sobre a vida<br/>que <em>continua.</em></h2>
          <p className="manifesto-text">Sobre pessoas que se aproximam, mãos que se estendem e pequenos gestos que se transformam em cuidado.</p>
        </div>
      </section>

      <section className="support section-pad" id="corrente">
        <div className="support-heading">
          <SectionLabel>03 — A CORRENTE</SectionLabel>
          <h2>Quando muitas mãos<br/><em>se unem.</em></h2>
          <p>Estamos organizando esta campanha para apoiar as necessidades de Juliana ao longo de sua jornada. A finalidade detalhada e a meta serão publicadas após confirmação com ela e sua família.</p>
        </div>
        <div className="support-points">
          <div><Heart/><h3>Contribua</h3><p>Qualquer valor pode ser um gesto de solidariedade.</p></div>
          <div><MessageCircle/><h3>Compartilhe</h3><p>Leve a história de Juliana a outras pessoas.</p></div>
          <div><ShieldCheck/><h3>Acompanhe</h3><p>As atualizações e a prestação de contas serão compartilhadas com transparência.</p></div>
        </div>
      </section>

      <section className="donate" id="contribuir">
        <div className="donate-inner">
          <SectionLabel>04 — FAÇA PARTE DESSA HISTÓRIA</SectionLabel>
          <h2>Um gesto de cuidado.<br/><em>Uma corrente de esperança.</em></h2>
          <p>Se esta história tocar seu coração, você poderá contribuir ou compartilhá-la. Toda ajuda será recebida com gratidão.</p>
          <div className="pix-panel">
            <div className="pix-visual">
              <div className="qr-placeholder"><span>PIX</span><small>QR CODE OFICIAL<br/>SERÁ INSERIDO APÓS VALIDAÇÃO</small></div>
            </div>
            <div className="pix-details">
              <span className="timeline-kicker">CONTRIBUIÇÃO VIA PIX</span>
              <h3>Contribua no seu tempo, do seu jeito.</h3>
              <p>O pagamento será destinado à conta indicada pela família. Antes de confirmar, confira os dados do beneficiário exibidos pelo seu banco.</p>
              <div className="beneficiary"><small>RESPONSÁVEL PELO RECEBIMENTO</small><strong>{campaign.pix.beneficiaryDisplayName}</strong><span>PicPay · chave aleatória</span></div>
              <button className="button button-gold button-disabled" disabled title="Disponível após validação do código Pix"><Copy size={16}/> CÓDIGO PIX EM VALIDAÇÃO</button>
              <small className="security-note">A contribuição será habilitada após validação do QR Code e do código Pix Copia e Cola.</small>
            </div>
          </div>
          <a className="share-link" href="https://wa.me/?text=Quero%20compartilhar%20a%20campanha%20Viva%20a%20Vida%2C%20Juliana!" target="_blank" rel="noreferrer"><MessageCircle size={18}/> COMPARTILHAR PELO WHATSAPP <ArrowUpRight size={15}/></a>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#inicio"><span className="wordmark-mark">V.</span><span>VIVA A VIDA <b>JULIANA</b></span></a>
        <p>Uma história real. Uma corrente de solidariedade.</p>
        <span className="footer-signature">FEITO COM CUIDADO E RESPEITO.</span>
      </footer>
    </main>
  );
}