import { InputBase, styled, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 2-px;
  width: 100%;
  font-size: unset;
`;
const IonContainer = styled(Box)`
  color: blue;
  padding: 5px;
  display:flex;
`;
const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for more products,brands and more" />
      <IonContainer>
        <SearchIcon />
      </IonContainer>
    </SearchContainer>
  );
};
export default Search;
