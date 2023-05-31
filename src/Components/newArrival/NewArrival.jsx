import React from 'react'
import './NewArrival.css'
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../context/product-context'
import {
  Box,
  Center,
  Image,
} from '@chakra-ui/react';

export const NewArrival = () => {
  const navigate = useNavigate();
  const { dispatch, state } = useProduct();
  const { products } = state;
  const newArrivalHandle = () => {
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'instant' })
  };
  return (
    <div>
      <span id='new-arrival'>New Arrivel</span>
      <div id='new-arrival-parent'>
        <div id='new-arrival-underline'></div>
      </div>
      <div id='new-arrival-products-name'>
        <p className='women-dress'>WOMEN'S DRESS</p>
        <p className='men-jacket'>MEN'S JACKET</p>
        <p className='men-shirt'>MEN'S  SHIRT</p>
        <p className='clothing'>CLOTHING</p>
      </div>
      <div id='new-arrival-product'>
        {
          products.slice(5, -6).map((newarrival) => {
            return (
              <div key={newarrival._id}>
                <Center py={20}>
                  <Box>
                    <Box className='arrival-product-hover'>
                      <Image
                        height={400}
                        width={250}
                        objectFit={'cover'}
                        src={newarrival.imgOne}
                        onClick={newArrivalHandle}
                      />
                    </Box>
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
