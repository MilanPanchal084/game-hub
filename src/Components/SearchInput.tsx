import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const submitHandler = (event: any) => {
      event.preventDefault();
      if (ref.current) {
       onSearch(ref.current.value)
      }
  }
  return (
    <form
      onSubmit={submitHandler}
    >
      <InputGroup>
        <InputLeftElement onClick={submitHandler} cursor="pointer" children={<BsSearch />} />
        <Input
          borderRadius={20}
          ref={ref}
          placeholder='Search Games...'
          variant='filled'
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
