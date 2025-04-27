import { useState, useEffect } from 'react'

const useMarch8Th = () => {
  const [phase, setPhase] = useState<"boot" | "celebration" | "interaction">("boot");
  const [key, setKey] = useState(0);
  const [awaitClickPostBoot, setAwaitClickPostBoot] = useState(false);

  const handleComplete = () => {
    if (phase === "boot") {
      setAwaitClickPostBoot(true);
      
      const handleBodyClick = () => {
        document.body.style.cursor = '';
        document.body.removeEventListener('click', handleBodyClick);
        handleUserClick();
      };

      document.body.style.cursor = 'pointer';
      document.body.addEventListener('click', handleBodyClick);
    } else {
      setPhase("interaction");
    }
  };

  const handleUserClick = () => {
    setAwaitClickPostBoot(false);
    setKey((prev) => prev + 1);
    setPhase("celebration");
  };

  useEffect(() => {
    return () => {
      document.body.style.cursor = '';
      document.body.removeEventListener('click', handleUserClick);
    };
  }, []);

  return {
    handleUserClick,
    handleComplete,
    awaitClickPostBoot,
    key,
    phase
  };
};

export default useMarch8Th;