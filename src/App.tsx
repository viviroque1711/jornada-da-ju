import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, Heart, Copy, Check, Menu, X,
  MessageCircle, ShieldCheck, Quote, Volume2, VolumeX
} from "lucide-react";
import { campaign, storySections, voiceQuotes, campaignNeeds, faithDecision } from "./content";

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
      <img src={src} alt={alt} loading="eager" decoding="async" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeQuote, setActiveQuote] = useState<number | null>(null);
  const [videoMuted, setVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
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
          <a className="nav-cta" href="#contribuir" onClick={closeMenu}>Caminhe comigo <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="hero-inner">
            <SectionLabel>{campaign.eyebrow}</SectionLabel>
            <h1>Nunca foi<br/><em>sobre um</em><br/><em>diagnóstico.</em></h1>
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

      <section className="faith-commitment">
        <motion.div
          className="faith-inner"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <SectionLabel>MINHA FÉ, MINHA DECISÃO</SectionLabel>
          <h2>{faithDecision.title}</h2>
          {faithDecision.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <span className="faith-signature">— JULIANA</span>
        </motion.div>
      </section>

      <section className="opening-quote">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Quote className="quote-mark" />
          <p>Nunca foi sobre um diagnóstico.</p>
          <span>— JULIANA BATISTA</span>
        </motion.div>
      </section>

      <section className="journey section-pad" id="jornada">
        <motion.div
          className="section-heading"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
        >
          <SectionLabel>02 — MINHA JORNADA</SectionLabel>
          <h2>Uma vida de capítulos.<br/><em>Muitas razões para continuar.</em></h2>
          <p>Vou contar, com minhas palavras, alguns dos momentos que marcaram esse caminho.</p>
        </motion.div>
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

      {campaign.video.src && (
        <section className="video-interlude" aria-label="Um vídeo especial da Juliana">
          <video
            className="video-interlude-background"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={campaign.video.poster}
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src={campaign.video.src} type="video/mp4" />
          </video>
          <video
            className="video-interlude-portrait"
            autoPlay
            loop
            playsInline
            preload="metadata"
            poster={campaign.video.poster}
            muted={videoMuted}
            ref={videoRef}
            aria-label="Juliana em um momento pessoal, falando à câmera"
          >
            <source src={campaign.video.src} type="video/mp4" />
          </video>
          <div className="video-interlude-shade" />
          <button
            className="video-audio-toggle"
            type="button"
            onClick={() => {
              const nextMuted = !videoMuted;
              if (videoRef.current) videoRef.current.muted = nextMuted;
              setVideoMuted(nextMuted);
            }}
            aria-label={videoMuted ? "Ativar o áudio do vídeo" : "Silenciar o vídeo"}
          >
            {videoMuted ? <Volume2 size={15}/> : <VolumeX size={15}/>}
            {videoMuted ? "OUVIR A JULIANA" : "SILENCIAR"}
          </button>
          <motion.div
            className="video-interlude-copy"
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <SectionLabel>{campaign.video.eyebrow}</SectionLabel>
            <h2>{campaign.video.headline}</h2>
            <p>{campaign.video.caption}</p>
          </motion.div>
          <span className="video-interlude-note">UM MOMENTO DA MINHA VIDA, ALÉM DO TRATAMENTO</span>
        </section>
      )}

      <section className="voice-wall">
        <div className="voice-inner">
          <SectionLabel>03 — PALAVRAS QUE SÃO MINHAS</SectionLabel>
          <h2>Minha fé. Minha voz.<br/><em>Meu jeito de seguir.</em></h2>
          <p className="voice-intro">Cada uma dessas frases guarda um pedaço da minha caminhada. Toque em cada uma para conhecer o que ela representa para mim.</p>
          <div className="voice-grid">
            {voiceQuotes.map((item, index) => (
              <motion.article
                className={activeQuote === index ? "voice-card voice-card-open" : "voice-card"}
                key={item.phrase}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
              >
                <button
                  className="voice-card-trigger"
                  type="button"
                  aria-expanded={activeQuote === index}
                  onClick={() => setActiveQuote(activeQuote === index ? null : index)}
                >
                  <span className="voice-card-number">0{index + 1}</span>
                  <span className="voice-card-phrase">“{item.phrase}”</span>
                  <span className="voice-card-action">{activeQuote === index ? "FECHAR" : "TOQUE PARA EXPLORAR"} <span aria-hidden="true">{activeQuote === index ? "−" : "+"}</span></span>
                </button>
                {activeQuote === index && (
                  <motion.div
                    className="voice-card-detail"
                    initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.detail}</p>
                  </motion.div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="continuing section-pad">
        <motion.div
          className="continuing-image"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/jornada-da-ju/images/juliana-white-blazer.webp?v=20261109-1" alt="Retrato de Juliana com cabelo escuro e blazer branco." loading="lazy"/>
          <span>UM DIA DE CADA VEZ</span>
        </motion.div>
        <div className="continuing-copy">
          <SectionLabel>04 — POR QUE ESTOU CONTANDO</SectionLabel>
          <h2>Há momentos em que aceitar ajuda também é <em>coragem.</em></h2>
          <p>{campaignNeeds.purpose}</p>
          <p>{campaignNeeds.inspiration}</p>
          <p>{campaignNeeds.request}</p>
          <a className="button button-gold" href="#contribuir">QUERO AJUDAR COMO POSSO <ArrowUpRight size={16}/></a>
        </div>
      </section>

      <section className="support section-pad" id="corrente">
        <div className="support-heading">
          <SectionLabel>05 — UMA CORRENTE DE SOLIDARIEDADE</SectionLabel>
          <h2>Um gesto pode chegar<br/><em>mais longe do que imaginamos.</em></h2>
          <p>Eu e minha família estamos fazendo o melhor que podemos. Mesmo assim, há momentos em que precisamos aceitar uma mão estendida. Se você se sentir tocado pela minha história e puder ajudar, sua presença será muito importante. Faça isso somente dentro das suas possibilidades.</p>
        </div>
        <div className="support-points">
          {[
            { icon: <Heart/>, title: "Sua ajuda importa", text: "Se estiver ao seu alcance, qualquer contribuição será recebida com gratidão." },
            { icon: <MessageCircle/>, title: "Compartilhe", text: "Ajude minha história a chegar a quem pode caminhar comigo." },
            { icon: <ShieldCheck/>, title: "Esteja comigo", text: "Um gesto de carinho ou uma mensagem de esperança também fazem diferença." }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.12, duration: 0.65 }}
              whileHover={reduceMotion ? undefined : { y: -6 }}
            >
              {item.icon}<h3>{item.title}</h3><p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="donate" id="contribuir">
        <div className="donate-inner">
          <SectionLabel>06 — SUA SOLIDARIEDADE FAZ PARTE DA MINHA HISTÓRIA</SectionLabel>
          <h2>Se puder, caminhe<br/><em>um trecho comigo.</em></h2>
          <p>Se estiver ao seu alcance, você pode contribuir com qualquer valor pelo Pix. Cada gesto será recebido com gratidão. O recebimento é feito pela minha mãe, Lourdes Aparecida Batista, que está responsável por esta arrecadação.</p>
          <div className="pix-panel">
            <div className="pix-visual">
              <img className="pix-qr" src={campaign.pix.qrImage} alt="QR Code Pix da campanha Viva a Vida, Juliana."/>
              <span>APONTE A CÂMERA DO CELULAR</span>
            </div>
            <div className="pix-details">
              <span className="timeline-kicker">PIX — VALOR LIVRE</span>
              <h3>Sua ajuda, do seu jeito.</h3>
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
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
        >
          <span className="brand-stamp" aria-label="Viva a Vida, Juliana">V.</span>
          <p>Eu já atravessei muitos capítulos.</p>
          <h2>Mas minha história<br/><em>continua sendo escrita.</em></h2>
          <span>Obrigada por caminhar comigo.</span>
          <strong>JULIANA BATISTA</strong>
        </motion.div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#inicio"><span className="wordmark-mark">V.</span><span>VIVA A VIDA <b>JULIANA</b></span></a>
        <div className="footer-center">
          <p>Uma história real. Uma corrente de solidariedade.</p>
          <a className="footer-whatsapp" href="https://wa.me/5511973967161" target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp">
            <MessageCircle size={15}/> Fale conosco pelo WhatsApp
          </a>
        </div>
        <div className="footer-credit">
          <span>DESENVOLVIDO POR</span>
          <a href="https://roquebusinessevolution.com/" target="_blank" rel="noreferrer">ROQUE BUSINESS EVOLUTION</a>
        </div>
      </footer>
    </main>
  );
}
