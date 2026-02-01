'use client';

import { useState } from 'react';
import { Alert } from './alert';

export function ContactForm({ labels, messages }) {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('pending');
    setError(null);
    const form = e.target;
    const formData = new FormData(form);
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (res.ok) {
        setStatus('ok');
        form.reset();
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (err) {
      setStatus('error');
      setError(err?.message || messages?.error);
    }
  };

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-lg bg-white/80 border border-pink-200/60 shadow-sm backdrop-blur-sm p-6 sm:p-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <label className="flex flex-col gap-1.5 text-neutral-700">
        <span className="text-sm font-medium">{labels?.name}</span>
        <input
          name="name"
          type="text"
          required
          className="input"
          placeholder={labels?.name}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-neutral-700">
        <span className="text-sm font-medium">{labels?.email}</span>
        <input
          name="email"
          type="email"
          required
          className="input"
          placeholder={labels?.email}
        />
      </label>
      <label className="flex flex-col gap-1.5 text-neutral-700">
        <span className="text-sm font-medium">{labels?.message}</span>
        <textarea
          name="message"
          required
          rows={5}
          className="input resize-y min-h-[120px]"
          placeholder={labels?.message}
        />
      </label>
      <button
        type="submit"
        className="btn bg-pink-600 text-white hover:bg-pink-700 disabled:bg-neutral-400 disabled:text-neutral-200 disabled:cursor-not-allowed"
        disabled
      >
        {labels?.send}
      </button>
      {status === 'ok' && <Alert type="success">{messages?.success}</Alert>}
      {status === 'error' && <Alert type="error">{error || messages?.error}</Alert>}
    </form>
  );
}
