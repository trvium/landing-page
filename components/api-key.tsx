'use client'

import { useState } from "react";

export default function ApiKey(data: any) {
  const apiKey = data.info.apiKey;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-md shadow-lg w-full h-auto p-10 mb-5 flex flex-col items-center" data-aos="fade-up" data-aos-delay="75">
      <h1 className="text-2xl font-medium mb-2">API Key</h1>
      <p className="text-md font-medium text-center break-all mb-2">{apiKey}</p>

      <button onClick={() => handleCopy()}>
        <svg className="sm:inline" width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 7H11C10.4239 7 10 7.42386 10 8V10H8C7.42386 10 7 10.4239 7 11V16C7 16.5761 7.42386 17 8 17H13C13.5761 17 14 16.5761 14 16V14H16C16.5761 14 17 13.5761 17 13V8C17 7.42386 16.5761 7 16 7ZM8 11H10V13C10 13.5761 10.4239 14 11 14H13V16H8V11ZM11 13V8H16V13H11Z" fill="#8EE8C9"/>
        </svg>
      </button>
      {copied && <div className="flex justify-center text-green-500">Copied to clipboard!</div>}
    </div>
  );
}
