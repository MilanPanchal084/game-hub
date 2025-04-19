import { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import Gamecard from "./Gamecard";
import LoadingSkeletons from "./LoadingSkeletons";
import GameCardContainer from "./GameCardContainer";
import useData from "../Hooks/useData";
import { Games } from "../services/globaslInterfaces";

const GameGrid = () => {
  const { data, errors, isloading } = useData<Games>("/games");
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, "2xl": 5 }}
        padding={10}
        spacing={10}
      >
        {isloading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <LoadingSkeletons />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <Gamecard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
