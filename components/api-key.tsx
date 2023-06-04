'use client'

import { useState } from "react";

export default function ApiKey(data: any) {
  const apiKey = data.info.api_key;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-20" data-aos="fade-up" data-aos-delay="150">
      <div className="bg-white rounded-md p-4 shadow-lg flex items-center">
        <div>
          <div className="mb-2">
            <span className="text-2xl font-semibold">API Key</span>
          </div>     
          <div className="mt-2">
            <button onClick={() => handleCopy()} className="ml-auto">
              <span className="block font-semibold">{apiKey}</span>
              <svg className="hidden sm:inline" width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 7H11C10.4239 7 10 7.42386 10 8V10H8C7.42386 10 7 10.4239 7 11V16C7 16.5761 7.42386 17 8 17H13C13.5761 17 14 16.5761 14 16V14H16C16.5761 14 17 13.5761 17 13V8C17 7.42386 16.5761 7 16 7ZM8 11H10V13C10 13.5761 10.4239 14 11 14H13V16H8V11ZM11 13V8H16V13H11Z" fill="#8EE8C9"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {copied && <div className="text-green-500">Copied to clipboard!</div>}
    </div>
  );
}