import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const thisGenre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery).platformId;
  const thisPlatform = usePlatform(platformId);

  const heading = `${thisPlatform?.name || ""} ${thisGenre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
