import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../services/globaslInterfaces'

interface headingProps{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: headingProps) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <Heading as='h1' marginY={5}>{heading}</Heading>
  )
}

export default GameHeading
