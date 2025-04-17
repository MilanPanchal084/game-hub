import React from 'react';
import { Games } from '../Hooks/useGames';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

interface GameProps{
    game: Games
}

const Gamecard = ({game}: GameProps) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Image src={game.background_image} />
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default Gamecard
