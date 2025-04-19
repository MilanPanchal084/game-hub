import './App.css'
import { Button, HStack, Grid, GridItem, Show } from "@chakra-ui/react"
import Navbar  from './Components/Navbar'
import GameGrid from './Components/GameGrid'
import GenreList from './Components/GenreList'

function App() {

  return (
    <Grid 
    templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`,
    }}
    // templateColumns={{
    //   base: '1fr',
    //   lg: '250px 1fr'
    // }}
    >
      <GridItem area='nav'><Navbar /></GridItem>
      <Show above="lg">
        <GridItem area='aside'><GenreList /></GridItem>
      </Show>
      <GridItem area="main"><GameGrid /></GridItem>
    </Grid>
  )
}

export default App
