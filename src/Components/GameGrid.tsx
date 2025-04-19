// import { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import Gamecard from "./Gamecard";
import LoadingSkeletons from "./LoadingSkeletons";
import GameCardContainer from "./GameCardContainer";
import useData from "../Hooks/useData";
import {
  Games,
  Genre,
  Platform,
  GameQuery,
} from "../services/globaslInterfaces";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, errors, isloading } = useData<Games>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        plateForms: gameQuery.platform?.id,
        sortOrder: gameQuery.sortOrder,
        search: gameQuery.searchText
      },
    },
    [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder, gameQuery.searchText]
  );
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  // let filteredData = data;

  // if (selectedGenre) {
  //   const gameIds = selectedGenre.games.map((game) => game.id);
  //   filteredData = selectedGenre
  //     ? data.filter((data) => gameIds.includes(data.id))
  //     : data;
  //   console.log(data.filter((data) => gameIds.includes(data.id)));
  // }

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, "2xl": 5 }}
        paddingY={5}
        spacing={3}
      >
        {isloading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <LoadingSkeletons />
            </GameCardContainer>
          ))}
        {data.length > 0 ? (
          data.map((game) => (
            <GameCardContainer key={game.id}>
              <Gamecard game={game} />
            </GameCardContainer>
          ))
        ) : (
          <Text>No Games Found</Text>
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
