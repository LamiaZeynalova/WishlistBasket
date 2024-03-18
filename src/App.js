import './App.css';
import { useContext } from 'react';
import BasketContext from './context/BasketContext';
import WishlistContext from './context/WishlistContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const productsData = [
  { id: 1, name: "Bags", price: 30, count: 1 },
  { id: 2, name: "Shouse", price: 40, count: 1 },
  { id: 3, name: "Bag", price: 80, count: 1 },
  { id: 4, name: "Ceket", price: 30, count: 1 },
 
]

function App() {

  const { addToBasket } = useContext(BasketContext)
  const { addToWishlist } = useContext(WishlistContext)

  const notify = () => toast("Your item add to basket!");
  const notify1 = () => toast("Your item add to wishlist!");


  return (
    <div>
      <ul>
        {productsData && productsData.map((item) => (
          <li key={item.id}>
            <h1>{item.name}</h1>
            <p>Price:{item.price}</p>
            <button  onClick={() => {addToBasket(item); notify()} }>Add Basket</button>
            <button onClick={() => {addToWishlist(item); notify1()}}>Add Wishlist</button>

            <ToastContainer />


          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


