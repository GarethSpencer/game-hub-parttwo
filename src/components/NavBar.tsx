import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import useGameQueryStore from "../store";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const reset = useGameQueryStore((s) => s.reset);
  return (
    <HStack padding="10px">
      <Link
        to={"/"}
        onClick={() => {
          reset();
        }}
      >
        <Image src={logo} boxSize="60px" objectFit={"cover"} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
