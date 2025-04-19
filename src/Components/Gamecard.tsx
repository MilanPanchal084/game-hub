import React from 'react';
import { Games } from '../Hooks/useGames';
import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import PlateformIconList from './PlateformIconList';
import CriticScore from './CriticScore';
import getCroppedUrl from '../services/image-url';

interface GameProps{
    game: Games
}

const Gamecard = ({game}: GameProps) => {
  return (
    <Card>
        <Image src={getCroppedUrl(game.background_image)} />
        <CardBody>
            <Heading fontSize={'2xl'}>{game.name}</Heading>
            <HStack justifyContent="space-between">
              <PlateformIconList plateforms={game.parent_platforms.map(p => p.platform)} />
              <CriticScore score={game.metacritic} />
            </HStack>
        </CardBody>
    </Card>
  )
}

export default Gamecard
