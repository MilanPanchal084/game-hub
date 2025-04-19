import { Text } from "@chakra-ui/react";
import useData from "../Hooks/useData";
import { Genre } from "../services/globaslInterfaces";

const GenreList = () => {
  const { data } = useData<Genre>("/genres");
  return (
    <ul>
      {data.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </ul>
  );
};

export default GenreList;
