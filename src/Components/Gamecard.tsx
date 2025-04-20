import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlateformIconList from "./PlateformIconList";
import CriticScore from "./CriticScore";
import getCroppedUrl from "../services/image-url";
import { Games } from "../services/globaslInterfaces";
import Emoji from "./Emoji";

interface GameProps {
  game: Games;
}

const Gamecard = ({ game }: GameProps) => {
  return (
    <Card>
      <Image src={getCroppedUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={3}>
          <PlateformIconList
            plateforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default Gamecard;
