
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { SCRIPT_URL } from '../constants';
import { FormData } from '../types';

interface RegistrationFormProps {
  onSuccess: (data: { name: string }) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    cargo: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load data from localStorage on initial render
  useEffect(() => {
    try {
      const savedData = localStorage.getItem('registrationFormData');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    } catch (error) {
      console.error('Failed to parse form data from localStorage', error);
      // If parsing fails, it's safer to clear the stored data
      localStorage.removeItem('registrationFormData');
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('registrationFormData', JSON.stringify(formData));
    } catch (error) {
      console.error('Failed to save form data to localStorage', error);
    }
  }, [formData]);


  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.substring(0, 11);
    if (value.length > 10) {
      value = value.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 5) {
      value = value.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d\d)(\d{0,5}).*/, '($1) $2');
    } else {
      value = value.replace(/^(\d*)/, '($1');
    }
    setFormData({ ...formData, telefone: value });
  };
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'telefone') {
        handlePhoneChange(e);
    } else {
        setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Formato de e-mail inválido.';
    }
    if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório.';
    if (formData.telefone.replace(/\D/g, '').length < 10) newErrors.telefone = 'Telefone inválido.';
    if (!formData.cargo.trim()) newErrors.cargo = 'Cargo é obrigatório.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // Com no-cors, não podemos verificar a resposta. Assumimos sucesso.
      setTimeout(() => {
        onSuccess({ name: formData.nome });
        // Clear localStorage after successful submission
        localStorage.removeItem('registrationFormData');
      }, 1000); // Simula um tempo de processamento
    } catch (error) {
      console.error('Fetch error:', error);
      setErrors({ form: 'Ocorreu um erro ao enviar. Tente novamente.' });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-dark-800 p-8 rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold text-center text-white mb-2">Acesso Imediato e Gratuito</h2>
      <p className="text-center text-slate-400 mb-6">Preencha para começar a dominar seus dados.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-4">
          <div>
            <input type="text" id="nome" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome completo" required className="w-full bg-slate-900 border border-slate-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-amber-500" />
            {errors.nome && <p className="text-red-400 text-sm mt-1">{errors.nome}</p>}
          </div>
          <div>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="voce@dominio.com" required className="w-full bg-slate-900 border border-slate-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-amber-500" />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(XX) 9XXXX-XXXX" required maxLength={15} className="w-full bg-slate-900 border border-slate-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-amber-500" />
            {errors.telefone && <p className="text-red-400 text-sm mt-1">{errors.telefone}</p>}
          </div>
          <div>
            <input type="text" id="cargo" name="cargo" value={formData.cargo} onChange={handleChange} placeholder="Seu cargo atual" required className="w-full bg-slate-900 border border-slate-700 text-white rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-amber-500" />
            {errors.cargo && <p className="text-red-400 text-sm mt-1">{errors.cargo}</p>}
          </div>
        </div>
        {errors.form && <p className="text-red-400 text-center text-sm mt-4">{errors.form}</p>}
        <button type="submit" id="submit-button" disabled={isSubmitting} className="w-full bg-brand-amber-500 text-brand-dark-900 font-bold py-3 px-4 rounded-md mt-6 hover:bg-brand-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark-800 focus:ring-brand-amber-500 transition-all duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed">
          {isSubmitting ? 'Enviando...' : 'ACESSAR O CURSO AGORA'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;