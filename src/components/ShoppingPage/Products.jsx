import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GrView} from 'react-icons/gr'
import {useProductContext} from "../../assets/context/ProductContext";


export default function Products({image, title, price, category, product}){

    const {addToCart, isAdded, removeFromCarts, carts} = useProductContext();
    const isProduct = isAdded(product.id);

    function handleClick(e) {
        e.preventDefault();
        if(isProduct){
            removeFromCarts(product.id);
        }else{
            addToCart(product);
        }

    }
    return (
        <div className='bg-white p-2 rounded-md '>
                    
                    <img src={image} alt='/' className=' rounded-md max-h-[300px] w-full'/>
                    <div className='pt-5' >
                        <p className='text-gray-400 '>{category}</p>
                        <h3 className='font-semibold'>{title}</h3>
                        <div className='flex justify-between items-center'>
                            <span className='text-[#272643] font-semibold'>{price}$</span>
                            <div className='flex flex-col bg-[#eee] items-center  space-y-2 py-2 rounded-full'>
                                  <GrView className='text-[#bebdf1] hover:text-[#272643] cursor-pointer' size={25}/>
                                  <button onClick={handleClick} className= {isProduct ? 'cursor-pointer text-[#ffffff] p-[5px] rounded-full bg-[#42ff31] text-center': 'cursor-pointer text-[#272643] p-[5px] rounded-full bg-[#bebdf1] text-center'}
                                   >
                                  {/*</div>'cursor-pointer text-[#272643] p-[5px] rounded-full bg-[#bebdf1] text-center'*/}
                                  
                                        <AiOutlineShoppingCart size={30}   />
                                  </button>
                                  
                            </div>
                        </div>
                    </div>
        </div>
    
  )
}