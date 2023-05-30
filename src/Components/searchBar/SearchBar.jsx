import React, { useState } from 'react'
import './SearchBar.css'
import { useProduct } from '../../context/product-context';
import { useParams, useNavigate} from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import {CiSearch} from 'react-icons/ci';
import { Drawer, RadioGroup, DrawerBody, DrawerHeader, DrawerContent, DrawerOverlay, useDisclosure, } from '@chakra-ui/react'
export const SearchBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement, setPlacement] = React.useState('top')

  const { products } = useProduct();

  const [searchProduct, setSearchProduct] = useState('');

  // const { Id } = useParams();
  const navigate = useNavigate();

  const searchProductField = (e) => {
   setSearchProduct(e.target.value);
  };

  let fetchSearchProduct = products.filter(item => item.title.toLowerCase().includes(searchProduct.toLowerCase()) || item.categoryName.toLowerCase().includes(searchProduct.toLowerCase()))

  if (fetchSearchProduct.length === 0) {
    fetchSearchProduct = [];
  }

  const searchSingleData = (id) => {
  products.filter(item => item._id === id ?
  navigate(`/singleproduct/${item._id}`) : null)
   onClose(true)
  }


  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault(); 
    }
  }
  return (
    <div>

      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>

      <span > <BiSearch onClick={onOpen} id='searchicon-of-navbar' /></span>

      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Search Product</DrawerHeader>
          <DrawerBody >
            <span id='search-field'>
              <input type="search" placeholder='Search for:' id='search-input' value={searchProduct} onChange={searchProductField}  onKeyDown={handleKeyDown} />
              <CiSearch id='top-bar-search-icon'/>
            </span>
          </DrawerBody>

          <div id='search-product-data-container'>
            <div id='search-product-data'>
              {searchProduct && fetchSearchProduct.length> 0  ? fetchSearchProduct.map((item) => {
                  return (
                    <div onClick={() => searchSingleData(item._id)} id='single-product-image-title'>
                      <span id='search-image'><img src={item.imgOne} alt="item" id='img-search' /></span>
                      <span id='search-single-product-title'>{item.title}</span>
                    </div>
                  )
                }):<p id='search-content'>Find your product with fast search.
                    Enter some keyword<br /> such as
                  dress, jacket etc.</p>}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
