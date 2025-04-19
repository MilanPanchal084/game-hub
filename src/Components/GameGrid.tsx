import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames"
import Gamecard from './Gamecard'
import LoadingSkeletons from "./LoadingSkeletons";


const GameGrid = () => {
  const {games, errors, isloading} = useGames();
  const Skeletons = [1,2,3,4,5,6,7,8];

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 4}} padding={10} spacing={10}>
        {isloading && Skeletons.map(skeleton => <LoadingSkeletons key={skeleton} />)}
        {games.map((game) => (
          <Gamecard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
