import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <ListItem paddingY={2}>
      <Skeleton height='20px'/>
    </ListItem>
  );
};

export default GenreSkeleton;
