import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const Game = ({songs}) => {
  const [currentSong, setCurrentSong] = useState({})
  const [selectedSong, setSelectedSong] = useState({})
  const [options, setOptions] = useState([])

  const getRandom = () => {
    const song = songs[Math.floor(Math.random() * songs.length)]
    setCurrentSong(song)
  }
  
  useEffect(() => {
    getRandom()
  }, [])

  const truncateLyrics = (lyrics) => {
    return lyrics? lyrics.slice(0, 70) + "..." : ""
  }
  
  const handleSongSelect = (song) => {
    setSelectedSong(song)
    song === currentSong.title? console.log("Niice"): console.log("Nop")
  }

  const getOptions = () => {
    const options = songs
      .filter((song) => song.title !== currentSong.title)
      .slice(0, 2)
    return [currentSong, ...options].sort(() => 0.5 - Math.random())
  }

  useEffect(() => {
    setOptions(getOptions())
  }, [currentSong])
  
  return (
    <Card>
        <p className="mb-4 text-center font-semibold">Guess the song from these lyrics:</p>
        <p className="mb-4 text-center italic">{truncateLyrics(currentSong.lyrics)}</p>
        <CardContent>
          <div className="flex flex-col gap-4">
            {options.map((song, index) => (
              <Button
                key={index}
                className="w-full"
                onClick={() => handleSongSelect(song.title)}
              >
                {song.title} - {song.artist}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>)
}
export default Game;
