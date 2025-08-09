import React, { useEffect } from "react";
import confetti from "canvas-confetti";

interface ResultModalProps {
  winner: "X" | "O" | "Draw" | null;
  onClose: () => void;
}

export const ResultModal: React.FC<ResultModalProps> = ({ winner, onClose }) => {
  useEffect(() => {
    if (winner === "X") {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  }, [winner]);

  if (!winner) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-[#1f2937] p-6 rounded-lg shadow-lg text-center w-80 text-white">
        {winner === "X" && (
          <div>
            <div className="text-4xl mb-2">🎉</div>
            <h2 className="text-xl font-bold">You Win!</h2>
          </div>
        )}
        {winner === "O" && (
          <div>
            <div className="text-4xl mb-2">😢</div>
            <h2 className="text-xl font-bold">AI Wins!</h2>
          </div>
        )}
        {winner === "Draw" && (
          <div>
            <div className="text-4xl mb-2">🤝</div>
            <h2 className="text-xl font-bold">It's a Draw!</h2>
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-600 cursor-pointer"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};
