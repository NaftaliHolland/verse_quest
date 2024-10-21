import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from "@/components/ui/button"
import SelectGenre from "@/components/selectGenre"
import Game from "@/components/game"

const songDatabase = {
  'Pop': [
    { title: "Shape of You", artist: "Ed Sheeran", lyrics: "I'm in love with the shape of you\nWe push and pull like a magnet do", year: 2017 },
    { title: "Blinding Lights", artist: "The Weeknd", lyrics: "I've been tryin' to call\nI've been on my own for long enough", year: 2019 },
    { title: "Bad Guy", artist: "Billie Eilish", lyrics: "White shirt, now red, my bloody nose\nSleeping, you're on your tippy toes", year: 2019 },
    { title: "Shake It Off", artist: "Taylor Swift", lyrics: "I stay out too late, got nothing in my brain\nThat's what people say", year: 2014 },
    { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", lyrics: "This hit, that ice cold\nMichelle Pfeiffer, that white gold", year: 2014 },
  ],
  'Rock': [
    { title: "Bohemian Rhapsody", artist: "Queen", lyrics: "Is this the real life?\nIs this just fantasy?", year: 1975 },
    { title: "Smells Like Teen Spirit", artist: "Nirvana", lyrics: "Load up on guns, bring your friends\nIt's fun to lose and to pretend", year: 1991 },
    { title: "Sweet Child O' Mine", artist: "Guns N' Roses", lyrics: "She's got a smile that it seems to me\nReminds me of childhood memories", year: 1987 },
    { title: "Stairway to Heaven", artist: "Led Zeppelin", lyrics: "There's a lady who's sure\nAll that glitters is gold", year: 1971 },
    { title: "Back in Black", artist: "AC/DC", lyrics: "Back in black\nI hit the sack", year: 1980 },
  ],
  'Hip Hop': [
    { title: "Lose Yourself", artist: "Eminem", lyrics: "His palms are sweaty, knees weak, arms are heavy\nThere's vomit on his sweater already, mom's spaghetti", year: 2002 },
    { title: "Alright", artist: "Kendrick Lamar", lyrics: "Uh, and when I wake up\nI recognize you're looking at me for the pay cut", year: 2015 },
    { title: "Stronger", artist: "Kanye West", lyrics: "N-now th-that that don't kill me\nCan only make me stronger", year: 2007 },
    { title: "In Da Club", artist: "50 Cent", lyrics: "Go, go, go, go, go, go\nGo shorty, it's your birthday", year: 2003 },
    { title: "Juicy", artist: "The Notorious B.I.G.", lyrics: "It was all a dream\nI used to read Word Up! magazine", year: 1994 },
  ],
  'Country': [
    { title: "Cruise", artist: "Florida Georgia Line", lyrics: "Baby you a song\nYou make me wanna roll my windows down and cruise", year: 2012 },
    { title: "Before He Cheats", artist: "Carrie Underwood", lyrics: "Right now he's probably slow dancing\nWith a bleached-blond tramp", year: 2005 },
    { title: "Wagon Wheel", artist: "Darius Rucker", lyrics: "Heading down south to the land of the pines\nI'm thumbing my way into North Caroline", year: 2013 },
    { title: "Friends in Low Places", artist: "Garth Brooks", lyrics: "Blame it all on my roots\nI showed up in boots", year: 1990 },
    { title: "Need You Now", artist: "Lady A", lyrics: "Picture perfect memories scattered all around the floor\nReaching for the phone 'cause I can't fight it anymore", year: 2009 },
  ],
}

function App() {
  const [gameState, setGameState] = useState('selecting');
  const [selectedGenre, setSelectedGenre] = useState(null)
	const [songs, setSongs] = useState(null)

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre)
  }

  const handleStartGame = () => {
    if (selectedGenre) {
      console.log(`Starting game with ${selectedGenre} genre`)
      setSongs(songDatabase[selectedGenre])
      setGameState('playing')
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
        { gameState === 'selecting' && (
        <SelectGenre selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} handleStartGame={handleStartGame}/>)}
        { gameState === 'playing' && (
            <Game songs={songs} />)}
    </div>
  )
}

export default App
