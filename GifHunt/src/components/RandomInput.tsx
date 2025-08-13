import { Button } from "./ui/button";
import { IoDiceSharp } from "react-icons/io5";

interface GifItem {
  id: string;
  title: string;
  images: {
    preview_webp?: {
      url?: string;
    };
  };
}
interface Props {
  setGif: ( gif: GifItem[])=>void;
  setSearchQuery: (searchQuery: string) => void;
}

const RandomInput =  ({setGif, setSearchQuery }: Props) => {

    const randomWords = [
    "Cats",
    "Dogs",
    "Laugh",
    "Dance",
    "Wow",
    "Happy",
    "Sad",
    "Memes",
    "Nature",
    "Space",
    "Food",
    "Anime",
    "Love",
    "Party",
    "Cool"
  ];

  // Pick a random word
  const handleFeelingLucky = () => {
    const randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
    setSearchQuery(randomWord);
  };
  return (
    <div className="w-full mt-0 h-26">
      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <Button
          className="py-5 px-6 text-base rounded-lg hover:text-white hover:bg-[#172032] text-gray-400 bg-transparent border border-gray-600 cursor-pointer"
          onClick={() => {setSearchQuery("")
            setGif([])
          }}
        >
          Clear Search
        </Button>

        <Button
          className="flex items-center gap-2 py-5 px-6 text-base rounded-lg hover:text-white hover:bg-[#172032] text-gray-400 bg-transparent border border-gray-600 cursor-pointer"
          onClick={handleFeelingLucky} // Add random GIF fetch logic here
        >
          <IoDiceSharp size={20} />
          Feeling Lucky
        </Button>
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center flex-wrap mt-6 gap-4">
        {["Funny", "Memes", "Reactions", "Animals", "Sports", "Movies"].map(
          (category) => (
            <Button
              key={category}
              className="py-5 px-6 text-base rounded-2xl hover:text-white hover:bg-[#172032] text-gray-100 bg-slate-800 border border-gray-600 cursor-pointer"
              onClick={() => setSearchQuery(category)}
            >
              {category}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default RandomInput;
