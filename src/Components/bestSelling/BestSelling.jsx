import './BestSelling.css';
import { useProduct } from '../../context/product-context';
import { BestSellingCard } from '../../Components/card/BestSellingCard';
import shipping from '../../images/shipping.webp';
import shipping1 from '../../images/shipping1.webp';
import shipping3 from '../../images/shipping3.webp';
export const BestSelling = () => {
  const { state } = useProduct();
  const { products } = state;
  return (
    <div>
      <span id='best-selling-product-heading'>Best Selling Products</span>
      <span id='best-selling-product-underline-parent'><p id='best-selling-product-underline'></p></span>
      <div id='bestselling-product'>
        {
          products.slice(4, 8).map((bestselling) => {
            return (
              <BestSellingCard bestselling={bestselling} />
            )
          })
        }
      </div>
      <p id='about-stylish-clothing'>Stylish Clothing Can Encompass A Wide Range Of Items, Including Clothing, Accessories, Footwear, And More!!</p>
      <div id='about-style'><p id='styling'> Fashion trends constantly evolve and change over time. Keeping up with the latest trends can help you stay stylish and up-to-date. However, it's important to remember that personal style is more than just following trends, and it's perfectly fine to create your own unique fashion statement. Personal style is all about expressing your individuality and wearing clothes that make you feel confident and comfortable. Experiment with different colors, patterns, and silhouettes to discover what works best for you. Your personal style can be influenced by various factors, such as your lifestyle, cultural background, and personal preferences.</p></div>
      <div id='shipping'>
        <img src={shipping1} alt="shipping" />
        <img src={shipping} alt="shippinng" />
        <img src={shipping3} alt="shipping" />
      </div>
    </div>
  )
}
