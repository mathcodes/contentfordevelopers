import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';

function YouTubeToText({
  outputText,
  handleButtonClick,
  handleInputChange,
  inputText,
  outputRef,
  clearOutputText,
}) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 1000);
  };

  return (
    <div>
      <div className="w-full max-w-md mx-auto rounded-lg shadow-lg">
        <div className="px-6 py-4 bg-gray-100 dark:bg-gray-800">
          <h2 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">
            YouTube Transcription Styler
          </h2>
          <p className="text-black dark:text-white dark:text-gray-400">
            Paste your text below and click "Convert" to see the results:
          </p>
        </div>
        <div className="px-6 py-4">
          <div className="mb-4">
            <label htmlFor="input-text" className="block mb-2 font-bold text-gray-700 dark:text-white">
              Input Text
            </label>
            <textarea
              id="input-text"
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none h-50 focus:outline-none focus:shadow-outline"
              value={inputText}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleButtonClick}
              className="px-4 py-2 text-sm text-black transition-all duration-500 border border-pink-500 rounded-lg dark:text-white bg-gradient-to-r from-blue-500 to-purple-500 sm:text-lg hover:from-blue-600 hover:to-purple-600"
            >
              Convert
            </button>

            <button
              onClick={clearOutputText}
              className="px-4 py-2 ml-2 text-sm text-white transition-all duration-500 bg-gray-500 border border-gray-500 rounded-lg sm:text-lg hover:bg-gray-600"
            >
              Clear Output
            </button>
            <div className="relative ">
              <button
                onClick={handleCopy}
                className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <FiCopy />
              </button>
              {tooltipVisible && (
                <div className="absolute top-0 px-2 py-1 text-white bg-gray-800 rounded shadow left-full">
                  Copied!
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="output-text" className="block mb-2 font-bold text-gray-700 dark:text-white">
              Output Text
            </label>
            <textarea
              id="output-text"
              ref={outputRef}
              className="w-full h-40 px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
              value={outputText}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default YouTubeToText;