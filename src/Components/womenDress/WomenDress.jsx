import './WomenDress.css';
import { WomendressCard } from '../../Components/card/WomendressCard';
import { useProduct } from '../../context/product-context';
import wallpaper2 from '../../images/wallpaper2.webp';
export const WomenDress = () => {
  const { state } = useProduct();
  const { products } = state;
 
  return (
    <div>
      <span id='women-dress-heading'>Get The Women's Dresses</span>
      <span id='women-dressup-choice'>DRESSUP SHOP CHOICE</span>
      <div id='women-dress-heading-underline-parent'><div id='women-dress-heading-underline'></div></div>
      <img src={wallpaper2} alt="women-dress" id='women-dress-wallpaper' />

      <div id='women-dress-product'>
        {
          products.slice(1, 5).map((womendress) => {
            return (
             <WomendressCard womendress={womendress}/>
            )
          })
        }
      </div>
    </div>
  )
}
