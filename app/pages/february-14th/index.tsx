import React from "react";
import useFebruary14th from "./use-february-14th";
import cn from "~/utils/style-merge";

const February14ThPage: React.FC = () => {
  const february14thProps = useFebruary14th();

  return (
    <div
      className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-blue-400 relative cursor-pointer"
      onClick={!february14thProps.showFinalMessage ? february14thProps.handleNextText : undefined}
    >
      <div className="text-center space-y-6">
        {february14thProps.showFinalMessage ? (
          <div className="text-pink-600 text-2xl animate-heartbeat">
            💞 ~System Override Accepted. I love you~ ;3 💞
          </div>
        ) : (
          <>
            <div
              className={cn(
                "text-pink-500 text-2xl transition-opacity duration-500",
                february14thProps.isTransitioning ? "opacity-0" : "opacity-100"
              )}
            >
              {february14thProps.formatDisplayableText()}
            </div>

            {february14thProps.showTapHint && !february14thProps.showQuestion && (
              <p className="text-pink-600 mt-4 text-lg animate-pulse">
                Tap anywhere to continue...
              </p>
            )}
              {february14thProps.showQuestion && (
                <div className="mt-8 space-y-6 animate-fade-in">
                  <div className="flex justify-center gap-6 relative">
                    <button
                      onClick={february14thProps.handleAccept}
                      className={cn(
                        "bg-gradient-to-br from-pink-500 to-red-600 text-white px-8 py-3 rounded-full",
                        "shadow-md hover:shadow-lg transition-all duration-300",
                        "transform hover:scale-105 active:scale-95",
                        "font-bold text-lg tracking-wide",
                        february14thProps.noClickCount > 0 && "animate-pulse"
                      )}
                    >
                      YES
                    </button>

                    {!february14thProps.isFinalWarning && (
                      <button
                        ref={february14thProps.noButtonRef}
                        onClick={(e) => {
                          february14thProps.handleReject();
                          february14thProps.moveButtonRandomly(e.currentTarget);
                        }}
                        onMouseEnter={(e) => {
                          if (february14thProps.noClickCount > 0) {
                            february14thProps.moveButtonRandomly(e.currentTarget);
                          }
                        }}
                        className={cn(
                          "bg-gradient-to-br from-gray-200 to-gray-300 text-gray-700 px-8 py-3 rounded-full",
                          "shadow-md hover:shadow-lg",
                          "font-bold text-lg tracking-wide",
                          "relative transition-transform duration-300 ease-out",
                          february14thProps.noClickCount > 0 ? "cursor-alias" : "cursor-pointer"
                        )}
                        style={{
                          transform: february14thProps.noButtonPosition
                        }}
                      >
                        NO
                      </button>
                    )}
                  </div>
                </div>
              )}
          </>
        )}
      </div>
    </div>
  );
};

export default February14ThPage;
