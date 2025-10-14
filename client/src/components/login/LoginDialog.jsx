import{
  Dialog,
  Button,
  Box,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState,useContext } from "react";
import {Authenicatesignup, AuthenicateLogin} from "../../service/api";
import {Datacontext} from '../../context/DataProvider'  ;

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 83%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #fff;
    font-weight: 600;
  }
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginsButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
`;
const ORtext = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #878787;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: -10px;
`;
const Error=styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:10px;
font-weight:600
;`
const AccountInitializer = {
  Login: {
    view: "Login",
    heading: "Login",
    subheading: "Get access to your order and recommendations",
  },
  Signup: {
    view: "Signup",
    heading: "Looks like you're new here!",
    subheading: "Sign up with your mobile number to get started",
  },
};
const SignupInitial = () => ({
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: ""
});
const LoginInitials=
{
  username:'',
  password:''
}
const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(AccountInitializer.Login); //by default the view will be login
  const [sign, setSign] = useState(SignupInitial); //here the values are currntly stored in the sign state which is empty initially
  const{setAccount}=useContext(Datacontext);
  const[login,setLogin]=useState(LoginInitials);
const[error,setError]=useState(false);
  const handleClose = () => {
    //function to handle closing of dialog box
    setOpen(false); //when clicking outside the dialog box it will close
    toggleAccount(AccountInitializer.Login); //after closing the dialog box we will again  set the view to login

    setError(false);
     setSign(SignupInitial());
  };
  const ToggleSignup = () => {
    toggleAccount(AccountInitializer.Signup);
  };
  const InputChange = (e) => {
    setSign({ ...sign, [e.target.name]: e.target.value });
  };
  const Signup = async() => {
  let response=await  Authenicatesignup(sign);
  if(!response) return;setSign(SignupInitial())
  handleClose();
  setAccount(sign.firstname);
  };
const OnValuechange=(e)=>{
setLogin({...login,[e.target.name]:e.target.value});
}
const loginUser=async()=>{
let response=await AuthenicateLogin(login);
console.log(response);
if(response && response.status === 200){
  handleClose();
setAccount(response.data.data.firstname);
}
else{
setError(true)
}
};
  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Image>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{ marginTop: 20 }}>
            {account.subheading}
          </Typography>
        </Image>
        {account.view === "Login" ? (
          <Wrapper>
            <TextField variant="standard" onChange={(e) => OnValuechange(e)}
              name="username" label="Enter Username" />

             { error&&<Error>Please enter valid username and password</Error>}
              
            <TextField variant="standard"  onChange={(e) => OnValuechange(e)}
              name="password"label="Enter Password" />
          
            <Text>
              by continuing you agree to Flipkarts Terms of Use and Privacy
              Policy
            </Text>
            <LoginsButton variant="contained"onClick={()=>loginUser()}>Login</LoginsButton>
            <ORtext>OR</ORtext>
            <RequestOTP variant="contained">Request OTP</RequestOTP>
            <CreateAccount onClick={() => ToggleSignup()}>
              New to Flipkart?Create an account
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              onChange={(e) => InputChange(e)}
              name="firstname"
              label="Enter Firstname"
            />
            <TextField
              variant="standard"
              onChange={(e) => InputChange(e)}
              name="lastname"
              label="Enter Lastname"
            />
            <TextField
              variant="standard"
              onChange={(e) => InputChange(e)}
              name="username"
              label="Enter Username"
            />
            <TextField
              variant="standard"
              onChange={(e) => InputChange(e)}
              name="email"
              label="Enter Email"
            />
            <TextField
              variant="standard"
              onChange={(e) => InputChange(e)}
              name="password"
              label="Enter Password"
            />
            <TextField
              variant="standard"
              onChange={(e) => InputChange(e)}
              name="phone"
              label="Enter Phone"
            />
            <LoginsButton variant="contained" onClick={() => Signup()}>
              Continue
            </LoginsButton>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};
export default LoginDialog;
