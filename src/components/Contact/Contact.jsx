
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
/* import { toast } from 'react-toastify'; */
import emailjs from '@emailjs/browser'
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.styles.css"

const ContactComponent = () => {
    const { t } = useTranslation();
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const formStyle = width < 768 ? 'formStylesCondensed' : 'form';
    const labelStyle = width < 768 ? 'labelsCondensed' : 'labels';

    const [from_name, setFromName] = useState('');
    const [from_email, setFromEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            from_name,
            from_email,
            reply_to: from_email,
            website,
            message
        };

        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((result) => {
                console.log(result.text);
                // Manejar el éxito aquí (limpiar form, mostrar mensaje, etc.)
            }, (error) => {
                console.log(error.text);
                // Manejar el error aquí
            });

        setFromName('');
        setFromEmail('');
        setMessage('');
    };

    return (
        <>
            <Helmet>
                <title>Santiago Ferreira - Contacto</title>
            </Helmet>
            <section className='contactMain h-auto md:h-screen'>
                <h1 className='title'>{t('contact')}</h1>
                <form onSubmit={handleSubmit} className={formStyle}>
                    <label htmlFor="name" className={labelStyle}><span style={{ color: 'red' }}>*</span> {t('formName')}:</label>
                    <input
                        type="text"
                        id="from_name"
                        value={from_name}
                        onChange={(e) => setFromName(e.target.value)}
                        required
                        className='inputs'
                    />

                    <label htmlFor="email" className={labelStyle}><span style={{ color: 'red' }}>*</span> {t('formEmail')}:</label>
                    <input
                        type="email"
                        id="from_email"
                        value={from_email}
                        onChange={(e) => setFromEmail(e.target.value)}
                        required
                        className='inputs'
                    />

                    <label htmlFor="email" className={labelStyle}>{t('formWebsite')}:</label>
                    <input
                        type="website"
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className='inputs'
                    />

                    <label htmlFor="message" className={labelStyle}><span style={{ color: 'red' }}>*</span> {t('formMessage')}:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className='textArea'
                    ></textarea>

                    <button type="submit" className='submit'>Enviar</button>
                </form>
            </section>
        </>
    );
};

export default ContactComponent;