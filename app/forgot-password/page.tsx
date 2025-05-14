'use client';

import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setStatus('sent');
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">Forgot Password</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>
      {status === 'sent' && (
        <p className="mt-4 text-green-600 text-center">
          ✅ If that email exists, a reset link has been sent.
        </p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600 text-center">
          ❌ Something went wrong. Try again later.
        </p>
      )}
    </div>
  );
}
