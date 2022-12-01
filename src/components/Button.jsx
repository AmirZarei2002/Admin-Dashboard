import React from 'react';

export default function Button({ bgColor, color, size, borderRadious, text }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadious }}
      className={`text-${size} p-3 rounded-lg hover:drop-shadow-lg`}
    >
      {text}
    </button>
  );
}
