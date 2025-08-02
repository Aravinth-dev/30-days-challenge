import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";

type Props = {
  mood: string;
  setMood: (mood: string) => void;
  handleGenerate: () => void;
  generate: boolean;
  isLoading: boolean;
};

const MoodInput = ({ mood, setMood, handleGenerate, generate, isLoading}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-12 bg-[#f9f9f9] p-8 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-center text-[#2d2d2d]">How are you feeling today?</h2>

      <div className="mt-8">
        <label htmlFor="moodInput" className="text-lg font-medium text-gray-700">
          Enter your mood
        </label>
        <Input
          id="moodInput"
          ref={inputRef}
          type="text"
          placeholder="e.g., relaxed, overwhelmed, excited"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          disabled={generate}
          className="mt-2 py-5 border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-150 ease-in-out"
        />
      </div>

      <div className="mt-6">
        <button
          aria-busy={isLoading}
          onClick={handleGenerate}
          disabled={mood.length === 0 || generate}

          className={`w-full py-3 px-4 rounded-lg font-semibold text-white text-lg flex items-center justify-center transition-all duration-150 ease-in-out
            ${isLoading || generate ? "bg-indigo-300 cursor-not-allowed" : "bg-gradient-to-r from-indigo-600 to-purple-500 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"}`}
        >
          {!isLoading ? (
            <>
              <svg className="size-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
              </svg>
              Generate Email Magic
            </>
          ) : (
            <>
              <span className="loading loading-spinner loading-sm mr-2"></span>
              Generating...
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default MoodInput;
