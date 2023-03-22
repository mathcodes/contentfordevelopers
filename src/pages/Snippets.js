import React, { useState } from 'react';
import YouTubeToText from '../components/snippets/youTubeToText';
import NavBar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Snippets = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    // Process the input text
    const processedTextLogic = inputText.replace(/(\r\n|\n|\r)/gm, " ").replace(/\d+:\d+\n?/gm, "");
    // Set the output text
    setOutputText(processedTextLogic);
    return processedTextLogic;
  };

  const clearOutputText = () => {
    setOutputText('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setTooltipVisible(true);
    console.log('Copied to clipboard');
    console.log(tooltipVisible);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 1000);
  };




  return (
    <div className="container mx-auto">
      <NavBar/>
      <div className="m-30">

      <YouTubeToText
      inputText={inputText}
      outputText={outputText}
      handleButtonClick={handleButtonClick}
      handleInputChange={handleInputChange}
      clearOutputText={clearOutputText}
      handleCopy={handleCopy}
      setTooltipVisible={setTooltipVisible}

      />
      </div>
      <Footer/>
    </div>
  );
};

export default Snippets;
