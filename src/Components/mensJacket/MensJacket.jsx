import './MensJacket.css';
import { useProduct } from '../../context/product-context';
import { MensJacketCard } from '../../Components/card/MensJacketCard';
export const MensJacket = () => {
  const { state } = useProduct();
  const { products } = state;

  return (
    <div>
      <div id='mens-jacket-product'>
        <img src="/images/men-jacket.webp" alt="jacket" id='jacket-wallpaper' />
        <span id='mens-jacket-heading'>MEN'S JACKET
          <p id='dressup-shop-heading'>DRESSUP SHOP CHOICE</p>
        </span>
        <div id='mens-jacket-product-iterate'>
          {
            products.slice(6, 9).map((jacket) => {
              return (
                <MensJacketCard jacket={jacket} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
