"use client"

import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FiCopy, FiCheck } from 'react-icons/fi';

export default function RequestExample(data: any) {
  const apiKey = data.info.apiKey;
  const authUrl = data.info.authUrl;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-md shadow-lg w-full h-auto p-10 flex flex-col items-center" data-aos="fade-up" data-aos-delay="150">
      <h1 className="text-2xl font-medium mb-2">Request Example</h1>
      <div className="bg-gray-500 rounded-md p-4 mt-4 mb-8 w-full h-34 relative">
        <div className="flex items-center mb-6">
          <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
          <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
          <div className="rounded-full w-3 h-3 bg-green-500 mr-2"></div>
        </div>
        <pre className="text-sm font-mono text-white overflow-x-auto whitespace-pre">
          {`$ curl --location --request POST '${authUrl}/key/validate' \\\n-H ` }
            <span className="text-green-300">{`'x-api-key: ${apiKey}'`}</span>
          {'\n\n\n'}
        </pre>
        <CopyToClipboard text={`curl --location --request POST '${authUrl}/key/validate' \\\n-H 'x-api-key: ${apiKey}'`}>
          <button
            className="absolute right-4 top-4 p-1 rounded bg-gray-400 text-gray-200"
            onClick={handleCopy}
          >
            {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
