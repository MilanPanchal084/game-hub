import './App.css'
import { Button, HStack, Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar  from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import GenreList from './Components/GenreList'
import { useState } from 'react'
import { Genre } from './services/globaslInterfaces'

function App() {

  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid 
    templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr'
    }}
    >
      <GridItem area='nav' ><Navbar /></GridItem>
      <Show above="lg">
        <GridItem area='aside' width="200px" paddingX={5}><GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} /></GridItem>
      </Show>
      <GridItem area="main"><GameGrid selectedGenre={selectedGenre}/></GridItem>
    </Grid>
  )
}

export default App
