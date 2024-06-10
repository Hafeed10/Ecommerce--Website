import React, { useState, useEffect, useContext } from 'react'; // Import useContext
import axios from 'axios';
import { CardContext } from '../context/CardContext'; // Corrected import path
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [looping, setLooping] = useState([]);
    const [error, setError] = useState(null);
    const { addToCard } = useContext(CardContext); // Use useContext here
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            try {
                console.log('Fetching products...');
                const { data } = await axios.get('http://127.0.0.1:8000/');
                console.log('Received products:', data);
                const updatedData = data.map(product => ({
                    ...product,
                    image: `http://127.0.0.1:8000${product.image}`
                }));
                setProducts(updatedData);
            } catch (error) {
                console.error('Error fetching products:', error.response || error.request || error.message);
                setError(error.message);
            }
        }
        fetchProducts();
    }, []);

    const handleAddToCard = (product) => {
        addToCard(product);
        // navigate(`/AnotherPage/${product.image}`); // Uncomment and correct navigation as needed
    };

    return (
        <div className='flex flex-col flex-wrap justify-center items-center md:flex-row'>
            <div className='flex flex-wrap justify-center gap-10 px-10 py-10'>
                {error && <div className='text-red-500'>Error: {error}</div>}
                <ul className='flex flex-col flex-wrap justify-between items-center space-y-10 md:flex-row md:space-y-0 gap-4'>
                    {products.map((product) => (
                        <li key={product.id} className='border border-red-100 p-4 w-full flex flex-col md:w-80'>
                            <img src={product.image} alt={product.name} className='w-full h-48 object-cover' />
                            <div className='flex justify-between mt-4'>
                                <h1 className='text-lg'>${product.price}</h1>
                                <h1 className='text-lg'>{product.loop_just}</h1>
                            </div>
                            <h1 className='text-3xl font-mono font-bold mt-2'>{product.name}</h1>
                            <p className='text-sm mt-2'>{product.description}</p>
                            <button
                                className='bg-yellow-300 rounded-md transition-transform p-1 duration-300 ease-in-out text-sm py-3 font-extrabold hover:bg-yellow-400'
                                onClick={() => handleAddToCard(product)}
                            >
                                Add to Card
                            </button>
                            <button
                                className='bg-yellow-300 rounded-md transition-transform duration-300 ease-in-out text-sm py-3 font-extrabold hover:bg-yellow-400 mt-2'
                                onClick={() => navigate(`/buy/${product.id}`)}
                            >
                                Buy Now
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HomePage;
