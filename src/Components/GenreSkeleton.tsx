import { ListItem, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <ListItem paddingY={2}>
      <Skeleton height='20px'/>
    </ListItem>
  );
};

export default GenreSkeleton;
