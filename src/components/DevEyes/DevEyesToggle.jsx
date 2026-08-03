import React from 'react';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { useDevEyes } from '../../context/DevEyesContext';

export default function DevEyesToggle() {
  const { devEyes, setDevEyes } = useDevEyes();

  return (
    <button
      onClick={() => setDevEyes((v) => !v)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold shadow-lg transition-all duration-200"
      style={{
        background: devEyes ? '#0d9488' : '#1e293b',
        color: '#fff',
        boxShadow: devEyes ? '0 0 20px 4px rgba(45,212,191,0.35)' : undefined,
      }}
      title="Toggle Dev Eyes"
    >
      {devEyes ? <HiEye className="w-5 h-5" /> : <HiEyeOff className="w-5 h-5" />}
      <span className="hidden sm:inline">Dev Eyes</span>
    </button>
  );
}
