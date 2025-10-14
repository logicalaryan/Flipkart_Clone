import { Box, Typography, styled, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";
import { useState,useContext } from "react";
import {Datacontext}  from '../../context/DataProvider';
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;

  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 14px;
    align-items: center;
  }
`;
const IvonContain = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  align-items: center;
  margin-left: 10px;
`;

const CustomButtons = () => {
  
const [open, setOpen] = useState(false);
const {account,setAccount}=useContext(Datacontext);
  
const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>{
    account?
    <Profile account={account}  setAccount={setAccount}/>:
   <LoginButton variant="contained" onClick={() => openDialog()}>
        Login
      </LoginButton>
  }
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <IvonContain>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </IvonContain>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};
export default CustomButtons;
