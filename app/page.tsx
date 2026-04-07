'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">AI Chatbot</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded mr-2"
      />
      <button 
        onClick={() => setResponse('Testing...')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
      {response && <p className="mt-4">{response}</p>}
    </div>
  );
}
