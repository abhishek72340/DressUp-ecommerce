import React from 'react'
import './Main.css';
import {Wallpaper} from '../../Components/wallpaper/Wallpaper';
import { NewArrival } from '../../Components/newArrival/NewArrival';
import { MensJacket } from '../../Components/mensJacket/MensJacket';
import { ShoesCollection } from '../../Components/shoesCollection/ShoesCollection';
import { WomenDress } from '../../Components/womenDress/WomenDress';
import { BestSelling } from '../../Components/bestSelling/BestSelling';
import { useProduct } from '../../context/product-context';
import { Spinner } from '@chakra-ui/react';
import { Module } from '../../module/Module';

export const Main = () => {
  const {state}=useProduct();
  const{isLoading,error}=state;

  if(isLoading){
    return <div id='spinner'>{<Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='lightseagreen'
      size='xl'
    /> }{<Module/>}</div>
  }
  if(error){
    alert(error)
  }
  return (
    <div>
          <Wallpaper/>
          <NewArrival/>
          <MensJacket/>
          <ShoesCollection/>
          <WomenDress/>
          <BestSelling/>

    </div>
  )
}
