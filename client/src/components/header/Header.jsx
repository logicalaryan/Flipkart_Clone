import { AppBar, Toolbar, styled, Box, Typography } from "@mui/material";
import Search from "./SearchBar.jsx";
import CustomButtons from "./CustomButtons";
import { Link } from "react-router-dom";
const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration:none;
  color:inherit;
`;
//SUBHEADING IS FOR TYPOGRAPHY CSS
const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italics;
`;
const CustomWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});
const logoURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const subURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
const Header = () => {
  return (
    <StyledHeader>
      <Toolbar>
        <Component to='/'>
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <Subheading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
              <PlusImage src={subURL} alt="sublogo" />
            </Subheading>
          </Box>
        </Component>
        <Search />
        <CustomWrapper>
          <CustomButtons />
        </CustomWrapper>
      </Toolbar>
    </StyledHeader>
  );
};
export default Header;
