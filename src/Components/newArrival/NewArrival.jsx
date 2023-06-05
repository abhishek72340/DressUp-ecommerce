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
  const { dispatch } = useProduct();

  const womenDressCategory = () => {
    dispatch({ type: 'SORT', payload: 'WOMEN' })
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };
  const menJacketCategory = () => {
    dispatch({ type: 'SORT', payload: 'MEN' })
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' })

  };
  const menShirtCategory = () => {
    dispatch({ type: 'SORT', payload: 'MEN' })
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' })

  };
  const shoesCategory = () => {
    dispatch({ type: 'SORT', payload: 'SHOES' })
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' })

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
        <p className='clothing' >CLOTHING</p>
      </div>
      <div id='new-arrival-product'>
        <Center py={20}>
          <Box>
            <Box className='arrival-product-hover'>
              <Image
                height={400}
                width={250}
                objectFit={'cover'}
                src='https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/12/7183324-1-khaki.jpeg'
                onClick={womenDressCategory}
              />
            </Box>
          </Box>
        </Center>
        <Center py={20}>
          <Box>
            <Box className='arrival-product-hover'>
              <Image
                height={400}
                width={250}
                objectFit={'cover'}
                src='https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/11/6833618-1-green.jpeg'
                onClick={menJacketCategory}
              />
            </Box>
          </Box>
        </Center>
        <Center py={20}>
          <Box>
            <Box className='arrival-product-hover'>
              <Image
                height={400}
                width={250}
                objectFit={'cover'}
                src='https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2016/10/7038094-1-black100.jpg'
                onClick={menShirtCategory}
              />
            </Box>
          </Box>
        </Center>
        <Center py={20}>
          <Box>
            <Box className='arrival-product-hover'>
              <Image
                height={400}
                width={250}
                objectFit={'cover'}
                src='https://eva.temashdesign.me/fashion/wp-content/uploads/sites/2/2017/02/5319455539121_006_d.jpg'
                onClick={shoesCategory}
              />
            </Box>
          </Box>
        </Center>
      </div>
    </div>
  )
}
