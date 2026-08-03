import React, { useRef, useState } from 'react';
import { useDevEyes } from '../../context/DevEyesContext';

function syntaxHighlight(raw) {
  return raw
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/("(?:[^"\\]|\\.)*")/g, '<span style="color:#e6db74">$1</span>')
    .replace(/\b(className|href|onClick|src|alt|key|id|type|style|ref)\b/g, '<span style="color:#a6e22e">$1</span>')
    .replace(/\b(import|export|default|const|let|var|function|return|from|if|else|true|false|null)\b/g, '<span style="color:#f92672">$1</span>')
    .replace(/(&lt;\/?[A-Za-z][A-Za-z0-9]*)/g, '<span style="color:#66d9ef">$1</span>')
    .replace(/\b(\d+)\b/g, '<span style="color:#ae81ff">$1</span>');
}

export default function DevEyes({ label, code, children }) {
  const { devEyes } = useDevEyes();
  const ref = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  if (!devEyes) return <>{children}</>;

  const handleMouseEnter = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    const flip = rect ? rect.bottom + 260 > window.innerHeight : false;
    setTooltip({ x: e.clientX, y: e.clientY, flip });
  };

  const handleMouseMove = (e) => {
    if (!tooltip) return;
    const rect = ref.current?.getBoundingClientRect();
    const flip = rect ? rect.bottom + 260 > window.innerHeight : false;
    setTooltip({ x: e.clientX, y: e.clientY, flip });
  };

  return (
    <div
      ref={ref}
      className="relative"
      style={{ outline: '1.5px dashed #2dd4bf', outlineOffset: '3px', borderRadius: '4px' }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTooltip(null)}
    >
      {children}
      {tooltip && (
        <div
          className="fixed z-[9999] w-80 rounded-lg shadow-2xl font-mono text-xs overflow-auto max-h-52 pointer-events-none"
          style={{
            top: tooltip.flip ? tooltip.y - 220 : tooltip.y + 14,
            left: Math.min(tooltip.x + 10, window.innerWidth - 330),
            background: '#272822',
            border: '1px solid #3e3d32',
            padding: '12px 14px',
          }}
        >
          <p style={{ color: '#75715e', marginBottom: '8px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {label}
          </p>
          <pre
            style={{ color: '#f8f8f2', whiteSpace: 'pre-wrap', wordBreak: 'break-all', margin: 0 }}
            dangerouslySetInnerHTML={{ __html: syntaxHighlight(code) }}
          />
        </div>
      )}
    </div>
  );
}
