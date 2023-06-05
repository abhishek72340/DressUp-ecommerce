import './Shop.css';
import { useProduct } from '../../context/product-context';
import { getSortedProducts } from '../../utils/FilterUtils';
import { FilterCard } from '../card/FilterCard';
import { ShopCard } from '../card/ShopCard';
import shop from '../../images/shop.jpg';
export const Shop = () => {
  const { products, sortBy, dispatch } = useProduct();

  const sortedProducts = getSortedProducts(products, sortBy);
  const sizes = ['L', 'M', 'S', 'US10', 'US6', 'US7'];
  const rating = [1, 2, 3, 4, 5];

  return (
    <div >
      <span id='shop-banner'>
        <img src={shop} alt="shop" />
      </span>
      <nav id='shop-link'>
        <span id='link'>
          <p onClick={() => { dispatch({ type: 'SORT', payload: 'ALL' }) }}>ALL</p>
          <p style={{ color: 'lightseagreen' }}>/</p>
          <p onClick={() => { dispatch({ type: 'SORT', payload: 'SHOES' }) }}>SHOES</p>
          <p style={{ color: 'lightseagreen' }}>/</p>
          <p onClick={() => { dispatch({ type: 'SORT', payload: 'CLOTHING' }) }}>CLOTHING</p>
        </span>
        <div id='shop-link-underline'></div>
      </nav>

      {/* FIlter By Category */}
      <div id='shop-section-product'>
        <div id='filters-container'>
          <div id='category-filter'>
            <span >Category</span>
            <ul id='category-type'>
              <li><p id='men-category' onClick={() => { dispatch({ type: 'SORT', payload: 'MEN' }) }} >Men's Shirts</p></li>
              <li><p id='women-category' onClick={() => { dispatch({ type: 'SORT', payload: 'WOMEN' }) }} >Women's Dresses</p></li>
              <li><p id='shoe-category' onClick={() => dispatch({ type: 'SORT', payload: 'SHOE' })}>Shoes</p></li>
            </ul>

            {/* Filter By Size */}
            <div id='size-filter'>
              <span id='filter-by-size'>Filter By Size</span>
              <div id='size'>
                {sizes.map((size, idx) => {
                  return (
                    <div key={idx}>
                      <div className='size-type' onClick={() => { dispatch({ type: 'SORT', payload: size }) }}>{size}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Filter By Rating */}
          <span id='ratig-filter-heading'>Filter By Rating</span>
          <div id='rating'>
            {rating.map((rate, indx) => {
              return (
                <div key={indx}>
                  <div className='rating-type' onClick={() => { dispatch({ type: 'SORT', payload: rate }) }}>{rate}</div>
                </div>
              )
            })}
          </div>
          {/* Filter By Price  */}
          <span id='price-filter-heading'>Filter By Price</span>
          <span id='price'>
            <p className='price-type' onClick={() => { dispatch({ type: 'SORT', payload: 'LOW_TO_HIGH' }) }}>Low To High</p>
            <p className='price-type' onClick={() => { dispatch({ type: 'SORT', payload: 'HIGH_TO_LOW' }) }}>High To Low</p>
          </span>

        </div>
        <div id='all-product'>
          {
            sortedProducts ?
              sortedProducts?.map((allproduct) => {
                return (
                  <FilterCard allproduct={allproduct} />
                )
              }) :
              products?.map((allproduct) => {
                return (
                  <ShopCard allproduct={allproduct} />
                )
              })
          }
        </div>
      </div>
    </div>
  )
}
