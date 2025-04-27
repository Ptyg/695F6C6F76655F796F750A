import { useCallback, useEffect, useRef, useState } from 'react';
import { ROMANTIC_TEXTS, DESPERATION_PHRASES } from './utils/consts';
import useHearts from '~/hooks/use-hearts';

const useFebruary14th = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showTapHint, setShowTapHint] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [isFinalWarning, setIsFinalWarning] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const { spawnHearts } = useHearts();

  const noButtonRef = useRef<HTMLButtonElement>(null);
  const [noButtonPosition, setNoButtonPosition] = useState<string>("");
  
  const moveButtonRandomly = (button: HTMLElement) => {
    const movementFactor = 30 + (noClickCount * 10);
    const x = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * movementFactor + 20);
    const y = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * movementFactor);
    setNoButtonPosition(`translateX(${x}px) translateY(${y}px)`);
  };

  useEffect(() => {
    if (showQuestion) {
      setNoButtonPosition("");
    }
  }, [showQuestion]);

  useEffect(() => {
    const interval = setInterval(() => {
      spawnHearts(5);
    }, 1000);
    return () => clearInterval(interval);
  }, [spawnHearts]);

  useEffect(() => {
    if (currentIndex > 0) {
      setShowTapHint(false);
    }
    if (currentIndex === ROMANTIC_TEXTS.length - 1) {
      setShowQuestion(true);
    }
  }, [currentIndex]);

  const handleNextText = useCallback(() => {
    if (isTransitioning || currentIndex >= ROMANTIC_TEXTS.length - 1 || showFinalMessage) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
      setIsTransitioning(false);
    }, 500);
  }, [currentIndex, isTransitioning, showFinalMessage]);

  const handleAccept = useCallback(() => {
    for (let i = 0; i < 50; i++) {
      setTimeout(() => spawnHearts(5), i * 100);
    }
    setShowQuestion(false);
    setShowFinalMessage(true);
  }, [spawnHearts]);

  const handleReject = useCallback(() => {
    const newCount = noClickCount + 1;
    setNoClickCount(newCount);
    
    if (newCount >= DESPERATION_PHRASES.length - 1) {
      setIsFinalWarning(true);
    }
  }, [noClickCount]);

  const formatDisplayableText = useCallback(() => {
    const baseText = ROMANTIC_TEXTS[currentIndex];
    let additionalTextJSX = null;
  
    if (showQuestion && noClickCount > 0) {
      const additionalText = `~${DESPERATION_PHRASES[Math.min(noClickCount - 1, DESPERATION_PHRASES.length - 1)]}~`;
      additionalTextJSX = (
        <p className="mb-4 text-xl text-white mt-8">{additionalText}</p>
      );
    }
  
    return (
      <>
        {baseText.split("\n").map((line, index) => (
          <p key={index} className="text-xl text-white">
            {line}
          </p>
        ))}
        {additionalTextJSX}
      </>
    );
  }, [currentIndex, showQuestion, noClickCount]);
  
  return {
    moveButtonRandomly,
    formatDisplayableText,
    handleNextText,
    handleAccept,
    handleReject,
    noButtonPosition,
    noButtonRef,
    showTapHint,
    isTransitioning,
    showQuestion,
    noClickCount,
    isFinalWarning,
    showFinalMessage
  };
};

export default useFebruary14th;