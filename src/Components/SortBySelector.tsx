import { MenuButton, Menu, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronBarDown, BsChevronDown } from "react-icons/bs";

interface Props{
  onSelectSortOrder: (sortOrder: string) => void
  sortOrder: string
}

const SortBySelector = ({onSelectSortOrder, sortOrder}: Props) => {

  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: 'metacritic', label: 'Popularity' },
    { value: 'rating', label: 'Average Rating' },
  ]
  const currentSort = sortOrders.find(order => order.value == sortOrder)

  return (
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>Order by: {currentSort?.label}</MenuButton>
        <MenuList>
            {sortOrders.map((order,index) => 
              <MenuItem key={index} value={order.value} onClick={() => onSelectSortOrder(order.value)}>{order.label}</MenuItem>
            )}
        </MenuList>
      </Menu>
    );
}

export default SortBySelector
