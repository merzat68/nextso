"use client";

import "./texts.scss";
export default function Texts({ text }) {
  return (
    <div className="texts-container">
      <h1 dangerouslySetInnerHTML={{ __html: text }}></h1>
    </div>
  );
}
