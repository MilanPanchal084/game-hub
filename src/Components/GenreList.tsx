import { HStack, Image, List, ListItem, Button, Heading } from "@chakra-ui/react";
import useData from "../Hooks/useData";
import { Genre } from "../services/globaslInterfaces";
import getCroppedUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props{
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const { data, errors, isloading } = useData<Genre>("/genres");
  // const { genreData, errors, isloading }
  const genreSkeletons = [1,2,3,4,5,6]
  if (errors) return null;
  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={5}>Genres</Heading>
    <List>
      {isloading && genreSkeletons.map(genreSkeleton => <GenreSkeleton key={genreSkeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={5}>
          <HStack>
            <Image
              boxSize='32px'
              objectFit='cover'
              borderRadius={8}
              src={getCroppedUrl(genre.image_background)}
              />
            <Button whiteSpace="normal" textAlign="left" variant="link" fontWeight={selectedGenre && (selectedGenre.id == genre.id) ? 'bold' : 'normal' } onClick={() => onSelectGenre(genre)} fontSize="lg">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
      </>
  );
};

export default GenreList;
