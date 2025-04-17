import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames"
import Gamecard from './Gamecard'


const GameGrid = () => {
  const {games, errors} = useGames();
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={10} spacing={10}>
        {games.map((game) => (
          <Gamecard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
