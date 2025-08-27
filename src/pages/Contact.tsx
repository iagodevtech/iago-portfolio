import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import LikeCallToAction from '../components/LikeCallToAction';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status após 3 segundos
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'iagodevtech@gmail.com',
      link: 'mailto:iagodevtech@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Telefone',
      value: '+55 (21) 95922-0456',
      link: 'https://w.app/iagodevtech',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Localização',
      value: 'Rio de Janeiro, RJ - Brasil',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/iagodevtech',
      color: '#333',
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/iago-alves-b502a518b/',
      color: '#0077b5',
    },
    {
      icon: <FaXTwitter />,
      name: 'X (Twitter)',
      url: 'https://x.com/Iagodevtech',
      color: '#000000',
    },
  ];

  return (
    <div className="contact">
      <section className="contact-hero">
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="contact-title">Entre em Contato</h1>
          <p className="contact-subtitle">
            Vamos conversar sobre seu próximo projeto ou oportunidade
          </p>
        </motion.div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Vamos Conversar!</h2>
              <p>
                Estou sempre interessado em novos projetos, oportunidades de
                colaboração ou apenas uma conversa sobre tecnologia. Sinta-se à
                vontade para entrar em contato!
              </p>

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="contact-detail"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      <a href={info.link} className="contact-link">
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
                <h4>Conecte-se comigo</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={
                        {
                          '--social-color': social.color,
                        } as React.CSSProperties
                      }
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Envie uma mensagem</h3>

                <div className="form-group">
                  <label htmlFor="name">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Assunto *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Sobre o que você gostaria de conversar?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Conte-me mais sobre seu projeto ou ideia..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <span className="loading">Enviando...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Enviar Mensagem
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    className="success-message"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Mensagem enviada com sucesso! Entrarei em contato em breve.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="error-message"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Erro ao enviar mensagem. Tente novamente.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Like Call to Action */}
      <LikeCallToAction />
    </div>
  );
};

export default Contact;
