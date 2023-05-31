import React from 'react';
import './ShoesCollection.css';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../context/product-context';
import {
  Box,
  Center,
  Image,
  Button,
  Stack
} from '@chakra-ui/react';

export const ShoesCollection = () => {
  const { state } = useProduct();
  const { products } = state;
  const navigate = useNavigate();
  const shoeHandle = () => {
    navigate('/shop')
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  return (
    <div>
      <div ID='shoe-brand-name'>
        <p>NEW BALANCE</p>
        <p>VANS</p>
        <p>ADIDAS</p>
      </div>
      <div id='shoe-collection-name'>
        <span>996 Running Training</span>
        <span>Old Skool Ultramarine</span>
        <span>Original Superstar</span>
      </div>
      
      <div id='shoe-collection-product'>
        {
          products.slice(12, 15).map((shoe) => {
            return (
              <div key={shoe._id}>
                <Center py={20}>
                  <Box>
                    <Box className='show-product-hover'>
                      <Image
                        height={400}
                        width={300}
                        objectFit={'cover'}
                        src={shoe.imgOne}
                        id='shoe-images'
                        onClick={shoeHandle}
                      />
                    </Box>
                    <div id='actual-shoe-price'> <span id='cross-price'>$80</span><span>${shoe.price}</span>
                      <Stack direction='row' spacing={4} align='center' >
                        <Button colorScheme='teal' variant='outline' onClick={shoeHandle}>
                          Go To Shop</Button>
                      </Stack>
                    </div>
                  </Box>
                </Center>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
