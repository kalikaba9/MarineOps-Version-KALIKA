import { useState, ChangeEvent } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';

interface FormData {
  subject: string;
  email: string;
  message: string;
}

interface Status {
  type: 'success' | 'error' | '';
  message: string;
}

export default function Contact() {

  const [formData, setFormData] = useState<FormData>({
    subject: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<Status>({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    if (!formData.subject || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "" });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "43c9a8e4-658d-4d15-a09b-ddc00c0fa252",
          subject: formData.subject,
          email: formData.email,
          message: formData.message,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Success" });
        setFormData({ subject: "", email: "", message: "" });
      } else {
        throw new Error("Erreur d'envoi");
      }
    } catch (error) {
      setStatus({ type: "error", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
    <div className="pt-16">
   <div className="max-w-6xl mx-auto">
  {/* Header */}
  <div className="mb-12 pt-16">
    <h1 className="text-center text-4xl md:text-3xl tet mb-4">
      {t('contact.title')}
    </h1>
    <p className="text-gray-600 text-lg text-center">
      {t('contact.subtitle')}
    </p>
  </div>

  {/* Content Flex */}
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Left Column */}
    <div className="flex-1 flex flex-col gap-8">
      {/* Contact Information */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 flex-1">
        <h2 className="text-xl font-bold tete mb-2">{t('contact.info.title')}</h2>
        <p className="text-gray-600 mb-8">{t('contact.info.subtitle')}</p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-gray-600" />
            <span className="text-gray-900">+1 438-993-7031</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-gray-600" />
            <span className="text-gray-900">sale@blymarket.ca</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-gray-600" />
            <span className="text-gray-900">Port de Marseille, France</span>
          </div>
        </div>
      </div>

      {/* Emergency Support */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 flex-1">
        <h2 className="text-xl font-bold tete mb-4">{t('contact.emergency.title')}</h2>
        <p className="text-gray-600 leading-relaxed">
          {t('contact.emergency.desc')}
        </p>
      </div>
    </div>

    {/* Right Column - Contact Form */}
    <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col">
      <h2 className="text-xl font-bold tete mb-2">{t('contact.form.title')}</h2>
      <p className="text-gray-600 mb-8">{t('contact.form.subtitle')}</p>

      <div className="space-y-6 flex-1">
        {/* Form Elements */}
        <div>
          <label className="block text-gray-900 font-medium mb-3">{t('contact.form.subject')}</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t('contact.form.subject.placeholder')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-900 font-medium mb-3">{t('contact.form.email')}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('contact.form.email.placeholder')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="block text-gray-900 font-medium mb-3">{t('contact.form.message')}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contact.form.message.placeholder')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none flex-1"
          ></textarea>
        </div>

                {status.message && (
                  <div className={`p-4 rounded-lg ${status.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {status.message}
                  </div>
                )}

        <button 
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="w-full bg-[#000080] text-white py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          {t('contact.form.submit')}
        </button>
      </div>
    </div>
  </div>
</div>
 </div>
    </>
  );
}
