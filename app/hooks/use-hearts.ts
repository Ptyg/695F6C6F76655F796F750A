import { useCallback, useEffect, useRef } from 'react';

const useHearts = () => {
  const heartsRef = useRef<HTMLSpanElement[]>([]);
  
  const spawnHearts = useCallback((count: number, maxHearts: number = 30) => {
    const heartsToSpawn = Math.min(count, maxHearts); 
    const now = Date.now();
    
    Array.from({ length: heartsToSpawn }).forEach((_, i) => {
      const heart = document.createElement("span");
      heart.textContent = "❤️";

      const baseLeft = Math.random() * 100;
      const verticalOffset = Math.random() * 200;
      const horizontalOffset = (Math.random() - 0.5) * 100;
      const sizeVariation = 0.8 + Math.random() * 0.6;
      const animationDuration = 3 + Math.random() * 4;
      const delay = i * 50 + Math.random() * 100;

      Object.assign(heart.style, {
        position: "fixed",
        left: `${baseLeft}%`,
        transform: `translateX(${horizontalOffset}px)`,
        top: `calc(100vh + ${verticalOffset}px)`,
        fontSize: `${1.5 * sizeVariation}rem`,
        color: `hsl(${Math.random() * 30 + 330}, 70%, 65%)`,
        pointerEvents: "none",
        animation: `floatUpHeart-${now} ${animationDuration}s ease-in ${delay}ms forwards`,
        zIndex: "9999",
        opacity: "0",
      });

      if (!document.getElementById(`heart-float-style-${now}`)) {
        const style = document.createElement("style");
        style.id = `heart-float-style-${now}`;
        style.innerHTML = `
          @keyframes floatUpHeart-${now} {
            0% {
              transform: translateY(0) translateX(${horizontalOffset}px);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            100% {
              transform: translateY(calc(-100vh - ${verticalOffset}px)) translateX(${horizontalOffset}px);
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }

      document.body.appendChild(heart);
      heartsRef.current.push(heart); // Add heart to the ref array

      setTimeout(() => {
        heart.remove();
        heartsRef.current = heartsRef.current.filter((h) => h !== heart); // Cleanup from ref when removed
        if (i === heartsToSpawn - 1) {
          setTimeout(() => {
            const style = document.getElementById(`heart-float-style-${now}`);
            if (style) style.remove();
          }, animationDuration * 1000);
        }
      }, (animationDuration * 1000) + delay);
    });
  }, []);

  // Cleanup all hearts when component is not active
  const cleanupHearts = () => {
    heartsRef.current.forEach((heart) => {
      heart.remove();
    });
    heartsRef.current = []; // Reset the ref array
  };

  const useClickToSpawn = (count: number, maxHearts: number = 30) => {
    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const isInteractive = target.tagName === 'BUTTON' || 
                            target.tagName === 'INPUT' || 
                            target.tagName === 'SELECT' || 
                            target.tagName === 'TEXTAREA';
        
        if (!isInteractive) {
          spawnHearts(count, maxHearts);
        }
      };

      document.body.style.cursor = "pointer";
      document.addEventListener('click', handleClick);
      
      return () => {
        document.body.style.cursor = "";
        document.removeEventListener('click', handleClick);
      };
    }, [count, spawnHearts]);
  };

  const useEndlessHearts = (count: number, maxHearts: number = 30, interval: number = 800) => {
    useEffect(() => {
      const id = setInterval(() => {
        spawnHearts(count, maxHearts);
      }, interval);
      
      return () => clearInterval(id);
    }, [count, interval, spawnHearts]);
  };

  // Clean up hearts when component is not active
  useEffect(() => {
    return () => cleanupHearts(); // Cleanup when component unmounts or is inactive
  }, []);

  return {
    spawnHearts,
    useClickToSpawn,
    useEndlessHearts
  };
};

export default useHearts;
