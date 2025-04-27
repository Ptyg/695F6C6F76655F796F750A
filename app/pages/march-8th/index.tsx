import React, { useState } from 'react';
import Terminal from './components/terminal';
import CodeDisplay from './widgets/code-display';
import { CODE_LINES, ROMANTIC_TEXT } from './utils/consts';
import Controls from './widgets/controls';
import Prompt from './components/prompt';
import useMarch8Th from './use-march8th';
import cn from '~/utils/style-merge';

const March8thPage: React.FC = () => {
  const props = useMarch8Th()
  const isCelebrationOrLater = props.phase === "celebration" || props.phase === "interaction"
  
  return (
    <div className={cn(
      "bg-gray-900 min-h-screen flex flex-col items-center justify-center p-4 transition-all duration-700 relative",
      isCelebrationOrLater ? 'bg-pink-50' : 'bg-gray-900'
    )}>
      <Terminal className={cn(
        isCelebrationOrLater ? "bg-pink-100 border-pink-400" : "border-green-500",
      )}>
        <CodeDisplay
          key={props.key}
          texts={props.phase === "boot" ? CODE_LINES : ROMANTIC_TEXT}
          onComplete={props.handleComplete}
          className={props.phase === "boot" ? "text-green-400" : "text-pink-700"}
        />
        {props.awaitClickPostBoot && (
          <Prompt message="System is ready. Click anywhere to continue..." />
        )}

        {props.phase === 'interaction' && (
          <Prompt
            message="You know, I love when it's more hearts ❤️"
            className='font-mono text-pink-600 animate-pulse mt-4 text-center'
          />
        )}
      </Terminal>

      {props.phase === "interaction" && (
        <div className="fixed bottom-4 left-0 right-0 flex justify-center">
          <Controls />
        </div>
      )}
    </div>
  );
};

export default March8thPage;