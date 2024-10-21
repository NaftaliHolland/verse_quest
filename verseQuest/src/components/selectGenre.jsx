import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MusicIcon } from "lucide-react"

const genres = [
  "Pop", "Rock", "Hip Hop", "Country"
]

const SelectGenre = ({selectedGenre, setSelectedGenre, handleStartGame}) => {
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre)
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardContent className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Choose Genre</h1>
        <p className="text-center text-muted-foreground mb-8">
          Select the genre of songs you want to play with.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {genres.map((genre) => (
            <Button
              key={genre}
              variant={selectedGenre === genre ? "default" : "outline"}
              className="w-full h-16 text-lg font-semibold"
              onClick={() => handleGenreSelect(genre)}
            >
              <MusicIcon className="mr-2 h-5 w-5" />
              {genre}
            </Button>
          ))}
        </div>
        <div className="text-center">
          <Button
            size="lg"
            onClick={handleStartGame}
            disabled={!selectedGenre}
            className="w-full sm:w-auto"
          >
            Start Game
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default SelectGenre;
