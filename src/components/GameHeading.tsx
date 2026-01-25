import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();

  const thisPlatform = platforms?.results.find(
    (platform) => platform.id === gameQuery.platformId,
  );
  const thisGenre = genres?.results.find(
    (genres) => genres.id === gameQuery.genreId,
  );

  const heading = `${thisPlatform?.name || ""} ${thisGenre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
