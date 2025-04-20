import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsup from "../assets/thumbs-up.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface RatingProps {
  rating: number;
}

const Emoji = ({ rating }: RatingProps) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: '25px' },
    4: { src: bullsEye, alt: "bullsEye", boxSize: '25px' },
    5: { src: thumbsup, alt: "thumbsup", boxSize: '25px' },
  };

  return <Image {...emojiMap[rating]} marginTop={2} />;
};

export default Emoji;
