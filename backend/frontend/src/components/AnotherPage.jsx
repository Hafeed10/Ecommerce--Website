import React, { useState } from 'react';
import { defultloop, data } from '../Data/AntherPageData';
import Logo from '../assest/IMse-Smart.jpg';

const AnotherPage = (props) => {
    const [count, setCount] = useState(1);
    const basePrices = {
        product1: 100,
        product2: 150,
        product3: 200
    };
    const [selectedProduct, setSelectedProduct] = useState('product2');

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const totalPrice = basePrices[selectedProduct] * count;

    return (
        <div className='flex flex-col md:flex-row items-center md:items-start md:justify-center gap-10 px-10 py-10 h-auto'>
            {/* First Item */}
            <ul className='flex flex-col border border-red-100'>
                <li className='flex flex-wrap p-4'>
                    <img src={Logo} alt='Product' className='w-full h-60 object-cover pointer-events-auto' />
                    {defultloop.map((item) => (
                        <div key={item.id} className='flex items-start md:flex-row'>
                            <p className='text-sm p-4'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                    <h1 className='text-3xl font-mono font-bold mt-2'>Hafeex</h1>
                    {defultloop.map((item) => (
                        <div key={item.id} className='flex justify-between w-full mt-4'>
                            <h1 className='text-lg'>${totalPrice}</h1>
                            <h1 className='text-lg'>{item.loop_just}</h1>
                        </div>
                    ))}
                </li>
            </ul>

            {/* Second Item */}
            <ul className='flex flex-col md:w-1/2 border border-red-100'>
                <li className='p-4 flex flex-col'>
                    <img src={Logo} alt='Product' className='w-full h-fit object-cover' />
                    {defultloop.map((item) => (
                        <div key={item.id} className='flex justify-between mt-4'>
                            <h1 className='text-lg'>${totalPrice}</h1>
                            <h1 className='text-lg'>{item.loop_just}</h1>
                        </div>
                    ))}
                    <div>
                        <h1 className='text-3xl font-mono font-bold mt-2'>Hafeex</h1>
                        {data.map((product) => (
                            <p key={product.id} className='text-sm mt-2'>
                                {product.description}
                            </p>
                        ))}
                    </div>
                    <div className='count flex mt-3 cursor-pointer'>
                        <h1 className='text-lg p-2' onClick={decrementCount}>-</h1>
                        <h1 className='text-lg p-2'>{count}</h1>
                        <h1 className='text-lg p-2' onClick={incrementCount}>+</h1>
                    </div>
                    <h1 className='text-lg font-bold'> Price ${totalPrice}</h1>
                    <button className='bg-yellow-300 rounded-md transition-transform duration-300 ease-in-out text-sm py-3 font-extrabold hover:bg-yellow-400 mt-2'>
                        Buy Now
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default AnotherPage;