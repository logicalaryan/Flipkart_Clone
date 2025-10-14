import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch,useSelector } from "react-redux";
import Slide from './Slide';
import Midslide from './Midslide';
import Midsection from './Midsection';
const Container = styled(Box)`
  padding: 10px 10px;
  background: #f2f2f2;
`;
const Home = () => {

  const {products}=useSelector(state=>state.getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <Container>
        <Banner />
        <Midslide products={products} title='Deal of the day' timer={true}/>
        <Midsection/>
        <Slide products={products} title='Discount for you' timer={false}/>
        <Slide products={products}title='Suggesting item'timer={false}/>
        <Slide products={products}title='Top Selection'timer={false}/>
     <Slide products={products}title='Recommended items'timer={false}/>
     <Slide products={products}title='Trending offers'timer={false}/>
         <Slide products={products}title='Seasons Top picks'timer={false}/>
          <Slide products={products}title='Top deal of AccessoriesView'timer={false}/>
      </Container>
    </div>
  );
};
export default Home;
