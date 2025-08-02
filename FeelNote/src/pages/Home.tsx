import { useState } from "react";
import MoodInput from "@/components/MoodInput";
import MoodOutput from "@/components/MoodOutput";

const quotesDB = {
  happy: [
    {
      text: "Happiness looks good on you. 🌟",
      emoji: "😊 Happy Vibes",
      quoteLine: "Keep spreading sunshine wherever you go!"
    },
    {
      text: "Let your smile change the world. 🌎",
      emoji: "😁 Smiling Bright",
      quoteLine: "Your smile is your superpower."
    },
    {
      text: "Collect moments, not things. 🎉",
      emoji: "🎈 Joyful Life",
      quoteLine: "The best memories are made with joy."
    },
    {
      text: "The purpose of our lives is to be happy. 🌞",
      emoji: "😃 Sunshine Mood",
      quoteLine: "Happiness is the true measure of success."
    }
  ],
  sad: [
    {
      text: "Tough times never last, but tough people do. 💪",
      emoji: "🌧️ Stay Strong",
      quoteLine: "Storms don’t last forever—keep going."
    },
    {
      text: "Your story isn't over yet. 📖",
      emoji: "🌈 Hope Ahead",
      quoteLine: "Better chapters are coming."
    },
    {
      text: "Sadness flies away on the wings of time. 🕊️",
      emoji: "⏳ Healing Time",
      quoteLine: "Feel it. Heal it. Let it go."
    }
  ],
  stressed: [
    {
      text: "Give yourself a break. 🌿",
      emoji: "🧘 Calm Down",
      quoteLine: "You deserve peace just as much as success."
    },
    {
      text: "Stress less, smile more. 😌",
      emoji: "☀️ Stay Cool",
      quoteLine: "You are bigger than what’s stressing you."
    },
    {
      text: "Breathe. Everything is working out. 🌬️",
      emoji: "🌊 Relax Mode",
      quoteLine: "Take it one breath at a time."
    }
  ],
  angry: [
    {
      text: "The best fighter is never angry. 🥋",
      emoji: "😤 Control It",
      quoteLine: "Respond with calm, not chaos."
    },
    {
      text: "Keep calm and carry on. 🎯",
      emoji: "😌 Inner Peace",
      quoteLine: "You control your peace, not your anger."
    },
    {
      text: "Peace begins with understanding. 🌍",
      emoji: "🕊️ Choose Peace",
      quoteLine: "Listen more, react less."
    }
  ],
  confused: [
    {
      text: "Confusion is the root of learning. 📚",
      emoji: "🧠 Mind Open",
      quoteLine: "Every question brings a new answer."
    },
    {
      text: "Not all those who wander are lost. 🧭",
      emoji: "🌌 Stay Curious",
      quoteLine: "Wandering leads to wisdom."
    },
    {
      text: "Embrace uncertainty, it's magical. ✨",
      emoji: "🪄 Find Magic",
      quoteLine: "In chaos, new paths are revealed."
    }
  ],
  excited: [
    {
      text: "Adventure awaits you! 🚀",
      emoji: "🚀 All Set Go!",
      quoteLine: "Jump in—something amazing is ahead."
    },
    {
      text: "Turn your excitement into momentum. 🔥",
      emoji: "🔥 Fired Up!",
      quoteLine: "Let your fire drive your future."
    },
    {
      text: "Life’s short. Stay excited. 🎊",
      emoji: "🎊 Celebration Mode",
      quoteLine: "Every moment is a chance to celebrate."
    }
  ],
  anxious: [
    {
      text: "This too shall pass. 🌈",
      emoji: "🍃 Keep Breathing",
      quoteLine: "Breathe through the storm—you’re doing fine."
    },
    {
      text: "Be gentle with yourself. 💙",
      emoji: "🫶 Self Love",
      quoteLine: "Healing starts with kindness to self."
    },
    {
      text: "You are stronger than your fears. 🛡️",
      emoji: "🧡 Brave Heart",
      quoteLine: "Courage lives within you."
    }
  ],
  bored: [
    {
      text: "Creativity is born from boredom. 🎨",
      emoji: "🎨 Create Something",
      quoteLine: "Use the quiet moments to build something new."
    },
    {
      text: "Boredom is just a call for adventure. 🛤️",
      emoji: "✈️ Explore More",
      quoteLine: "Your next idea is waiting to be found."
    },
    {
      text: "Explore something new today! 🌍",
      emoji: "🗺️ Find Fun",
      quoteLine: "There’s joy just around the corner."
    }
  ],
  motivated: [
    {
      text: "Push yourself, no one else will. 💥",
      emoji: "🏋️ Power Up",
      quoteLine: "Discipline fuels dreams."
    },
    {
      text: "Dream it. Wish it. Do it. 🚀",
      emoji: "🏆 Keep Going",
      quoteLine: "You’re one step closer every day."
    },
    {
      text: "Success is a journey, not a destination. 🎯",
      emoji: "🏁 You Got This",
      quoteLine: "Enjoy the climb, not just the peak."
    }
  ],
  default:[
    {
    text: "Every emotion is valid. Feel it, learn from it, and keep going. 🌟",
    emoji: "🌀 Emotional Balance",
    quoteLine: "“Feelings are much like waves, we can’t stop them from coming but we can choose which one to surf.” – Jonatan Mårtensson"
  },
  {
    text: "It's okay to not have the words — let kindness fill the gaps. 💫",
    emoji: "🌈 Gentle Energy",
    quoteLine: "“Be kind whenever possible. It is always possible.” – Dalai Lama"
  },
  {
    text: "Take a deep breath. You’re doing better than you think. 💙",
    emoji: "🌿 Calm & Collected",
    quoteLine: "“You don’t have to control your thoughts. You just have to stop letting them control you.” – Dan Millman"
  }
  ]
};


const Home = () => {
    const [mood, setMood] = useState("");
    const [subject,setSubject] = useState("")
    const [footer,setFooter] = useState("")
    const [quote, setQuote] = useState("");
    const [isLoading,setIsloading] = useState(false)
   const [generate, setGenerate] = useState(false)


const handleGenerate = () => {
  const moodKeywords = {
    happy: ['happy', 'joy', 'content', 'smile', 'delighted'],
    sad: ['sad', 'down', 'depressed', 'cry'],
    stressed: ['stressed', 'overwhelmed', 'pressure', 'burnout'],
    angry: ['angry', 'furious', 'mad', 'rage'],
    confused: ['confused', 'lost', 'uncertain', 'doubt'],
    excited: ['excited', 'thrilled', 'ecstatic', 'pumped'],
    anxious: ['anxious', 'nervous', 'scared', 'worried'],
    bored: ['bored', 'dull', 'uninterested', 'lazy'],
    motivated: ['motivated', 'inspired', 'energized', 'driven']
  };

  if(!mood) return
  const lowercase = mood.toLowerCase();
  let moodType = null;

  for (const [key, keywords] of Object.entries(moodKeywords)) {
    if (keywords.some(word => lowercase.includes(word))) {
      moodType = key;
      break;
    }
  }

  if (!moodType) moodType = 'default';

  const quotes = quotesDB[moodType];
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  setIsloading(true);
  
  setTimeout(() => {
    setSubject(randomQuote.text);
    setFooter(randomQuote.emoji);
    setQuote(randomQuote.quoteLine);
    setMood("");
    setGenerate(true);
    setIsloading(false);
  }, 3000);
};
    const handleReset = (event: React.MouseEvent<HTMLButtonElement>)=>{
        setGenerate(false)
        setSubject("")
        setFooter("")
        setQuote("")
    }

  return (
    <div className="w-full h-auto flex justify-center font-sans pt-20">
        <div className="w-[80%] p-4">
<h1 className="text-center text-4xl md:text-5xl font-extrabold font-sans bg-gradient-to-r from-[#3313e5] via-[#b875e8] to-[#4225e6] bg-clip-text text-transparent animate-gradient-x">
  FeelNote
</h1>
            <p className="text-center mt-2 text-gray-600">Let your mood Shape your Message</p>
            {!generate ? (
                <MoodInput 
            mood={mood}
            setMood={setMood}
            handleGenerate = {handleGenerate}
            isLoading = {isLoading}
            generate={generate}/>
            ) : (<MoodOutput 
            subject={subject}
            footer={footer}
            quote={quote}
            generate={generate}
            handleReset = {handleReset}
            />)}
        </div>
    </div>
  )
}

export default Home
