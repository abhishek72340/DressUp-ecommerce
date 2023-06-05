import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import { Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Module } from '../../module/Module';
import axios from 'axios';
import SingleProductCard from '../card/SingleProductCard';
import singleproductimage from '../../images/singleproductimage.gif'
export const SingleProduct = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading,setIsLoading]=useState(true)
  const { Id } = useParams();
  useEffect(() => {
    axios.get(`/api/products/${Id}`)
      .then((response) => {
        setProductData(response.data.product)
        setIsLoading(false)
      })
       .catch((e) => alert('Error Occured Retry'))
  }, [Id]);

  if(isLoading){
    return <div id='spinner'>{<Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='lightseagreen'
      size='xl'
    /> }{<Module/>}</div>
  }

  return (
    <div>
      {
      !productData ? <div id='single-product-error'>
        <img src={singleproductimage} alt="load" />
        <span>Sorry we got some Error. Please go back</span>
        <Module />
       </div> :<SingleProductCard productData={productData}/>
      }
      <Module />
    </div>
  )
}
