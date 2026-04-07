import { useState } from 'react';
import { groupInfo } from '../data/siteContent';

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  });
  const [feedback, setFeedback] = useState({ type: '', text: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = Object.fromEntries(Object.entries(formData).map(([key, value]) => [key, value.trim()]));

    if (Object.values(payload).some((value) => !value)) {
      setFeedback({
        type: 'error',
        text: 'Merci de remplir tous les champs avant d’envoyer votre message.',
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setFeedback({
        type: 'error',
        text: 'Merci de renseigner une adresse email valide.',
      });
      return;
    }

    const subject = encodeURIComponent(`Koanda Group - ${payload.sujet}`);
    const body = encodeURIComponent(
      `Nom : ${payload.nom}\nEmail : ${payload.email}\nTéléphone : ${payload.telephone}\nSujet : ${payload.sujet}\n\nMessage :\n${payload.message}`,
    );

    window.location.href = `mailto:${groupInfo.contactEmail}?subject=${subject}&body=${body}`;

    setFeedback({
      type: 'success',
      text: 'Votre messagerie va s’ouvrir avec un email prérempli pour Koanda Group.',
    });
  };

  return (
    <form className="contact-form-card" onSubmit={handleSubmit}>
      <p className="mini-text">Formulaire</p>
      <h3>Parlez-nous de votre besoin</h3>

      <label>
        Nom complet
        <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Votre nom" />
      </label>

      <label>
        Email
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="nom@entreprise.com" />
      </label>

      <label>
        Téléphone
        <input type="text" name="telephone" value={formData.telephone} onChange={handleChange} placeholder="+226 xx xx xx xx" />
      </label>

      <label>
        Sujet
        <input type="text" name="sujet" value={formData.sujet} onChange={handleChange} placeholder="Ex. : partenariat, candidature, presse" />
      </label>

      <label>
        Message
        <textarea rows={6} name="message" value={formData.message} onChange={handleChange} placeholder="CV + 3 lignes sur votre motivation, demande commerciale ou question presse" />
      </label>

      {feedback.text ? <p className={`form-feedback ${feedback.type}`}>{feedback.text}</p> : null}

      <button className="button button-primary button-full" type="submit">
        Envoyer la demande
      </button>
    </form>
  );
}

export default ContactForm;
