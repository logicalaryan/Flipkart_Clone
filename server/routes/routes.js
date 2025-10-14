import Express from 'express';
import { userSignup,userlogin } from '../controller/User-controller.js';
import { getProducts,getProductbyid } from '../controller/Product-controller.js';


const router=Express.Router();

router.post('/signupuser',userSignup);
router.post('/loginupuser',userlogin);
router.get('/products',getProducts);
router.get('/produoct/:id',getProductbyid)
export default  router;