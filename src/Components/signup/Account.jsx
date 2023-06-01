import React from 'react'
import './Signup.css';
import { useNavigate } from 'react-router-dom';
// import { useProduct } from '../../context/product-context';
import { useToast } from '../../context/toast-context';
import { useCart } from '../../context/cart-context';
import { useWishlist } from '../../context/wishlist-cart';
import { RxAvatar } from 'react-icons/rx'
import { Drawer, RadioGroup, DrawerBody, DrawerHeader, DrawerContent, DrawerOverlay, useDisclosure, } from '@chakra-ui/react'
import { FiLogIn } from 'react-icons/fi';
import { CgLogOut } from 'react-icons/cg';
import { AiOutlineLogout } from 'react-icons/ai';
export const Account = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    const { setCartItems } = useCart();
    const { setWishlistItem } = useWishlist();
    const {notifySuccess} =useToast();

    // const [userToken, setUserToken] = useState();
    // const [userDetail, setUserDetail] = useState();

    const token = localStorage.getItem('token')
    const userLogOut = () => {
        localStorage.removeItem('token')
        setWishlistItem([])
        setCartItems([])
        navigate('/')
        onClose(true);
        notifySuccess('logout successfully')
    }

    const navigate = useNavigate();
    const loginRedirectHandler = () => {
        navigate('/login')
        onClose(true)
    }
    const signupRedirectHandler = () => {
        navigate('/signup')
        onClose(true)
    };

    // useEffect(() => {
    //     let token = localStorage.getItem("token");
    //     if (token) {
    //         setUserToken(token);
    //         setUserDetail(JSON.parse(localStorage.getItem("foundUser")));

    //     }
    // }, [userToken]);
    return (
        <div>
            <RadioGroup defaultValue={placement} onChange={setPlacement}>

            </RadioGroup>

            <RxAvatar onClick={onOpen} id='avatar' />

            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Account</DrawerHeader>
                    <DrawerBody id='login-logout'>
                        
                        {!token ? <div><span id='login' onClick={loginRedirectHandler}><span >Login</span> <FiLogIn id='login-icon' /></span>  
                        <span id='logout' onClick={signupRedirectHandler}> <span >Signup</span> <CgLogOut id='logout-icon' /></span></div>:<span id='login' onClick={userLogOut} ><span>Logout</span> <AiOutlineLogout id='login-icon' /></span>}
                
                {/* {userDetail?userDetail.name:'login'} */}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
