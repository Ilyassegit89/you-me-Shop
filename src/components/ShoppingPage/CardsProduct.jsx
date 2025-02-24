

export default function CardsProduct() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => { 
        const loadProducts = async () => {
            try{
                const response = await getProducts();
                setProducts(response);
            }catch(err){
                setError("Failed To Load Products")
            }finally {
                setLoading(false)
            }
        }
        loadProducts();
    }, [])

    return (
        <div className='bg-[#eee] min-h-screen  '>
              <div className=' py-[3rem] '>
                    <h1 className='text-2xl md:text-4xl font-bold text-center'>Featured Products</h1>
                    <div className="flex justify-center items-center space-x-2">
                    <p className='text-gray-400 text-center py-3 font-semibold'>New Modern Design</p>
                    <PiStarFourFill size={20} className="text-[#fcff3c]"/>
                   </div>
                   {error && <div>{error}</div>}
                   {loading ? (<div className="text-black text-center py-3 font-semibold">Loading ... </div> ): (
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-[2rem] px-[2rem]'>
                        {cards}
                    </div>
                   )}
                    
              </div>
        </div>
    )
}