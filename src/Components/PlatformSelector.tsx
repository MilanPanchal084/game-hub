import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Platform } from "../services/globaslInterfaces";
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";
import useData from "../Hooks/useData";

interface Props {
  onSelectPlatform: (parentPlatform: Platform) => void;
  selectedPlatfrom: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatfrom }: Props) => {
  const { data, errors } = useData<Platform>("/platforms/lists/parents");
  if (errors) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatfrom?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((pltfrm) => (
          <MenuItem
            key={pltfrm.id}
            fontWeight={
              selectedPlatfrom && selectedPlatfrom.id == pltfrm.id
                ? "bold"
                : "normal"
            }
            onClick={() => onSelectPlatform(pltfrm)}
          >
            {pltfrm.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
