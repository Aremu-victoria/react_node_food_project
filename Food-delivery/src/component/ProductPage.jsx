import React, { useState } from 'react';
import pizzer1 from '../assets/images/pizzer1.png';
import pizzer2 from '../assets/images/pizzer2.png';
import pizzer3 from '../assets/images/pizzer3.png';
import pizzer4 from '../assets/images/pizzer4.png';
import cart from '../assets/images/ion_cart-outline.png';

const pizzaImages = [
    { id: 1, src: pizzer1, alt: 'Pizza 1' },
    { id: 2, src: pizzer2, alt: 'Pizza 2' },    
    { id: 3, src: pizzer3, alt: 'Pizza 3' },
    { id: 4, src: pizzer4, alt: 'Pizza 4' }
];

const PizzaCard = () => {
    const [selectedImage, setSelectedImage] = useState(pizzaImages[0].src);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleImageClick = (image, index) => {
        setSelectedImage(image.src);
        setSelectedIndex(index);
    };

    return (
        <div className="bg-white shadow-md w-[80%] md:w-[70%] rounded-2xl my-10">
            <div className="md:flex">
                <div className="md:flex-shrink-0 mt-8">
                    <img className="w-full md:w-48 p-4 mx-auto" src={selectedImage} alt="Selected Pizza" />
                    <div className="flex justify-center mt-4">
                        {pizzaImages.map((_, index) => (
                            <div key={index} className="flex items-center">
                                <input 
                                    type="radio" 
                                    name="carousel-radio" 
                                    checked={selectedIndex === index} 
                                    onChange={() => handleImageClick(pizzaImages[index], index)}
                                    className="hidden"
                                />
                                <label 
                                    htmlFor={`carousel-radio-${index}`}
                                    className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${selectedIndex === index ? 'bg-orange-500' : 'bg-gray-300'}`}
                                ></label>
                            </div>
                        ))}
                    </div>
                    <div className="flex space-x-2 mt-4 justify-center">
                        {pizzaImages.map((image, index) => (
                            <button 
                                key={image.id} 
                                onClick={() => handleImageClick(image, index)}
                                className={selectedImage === image.src ? 'border-orange-500' : ''}
                            >
                                <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                    className="w-10 h-10 rounded-full object-cover border-2 border-transparent hover:border-orange-500 transition duration-300" 
                                />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="p-8 flex space-x-10">
                    <div>
                        <div className="uppercase tracking-wide text-lg text-orange-500 font-semibold">Fabulous Pizza</div>
                        <p className="block mt-1 text-sm leading-tight font-medium text-black">
                            Experience the ultimate taste sensation with our mouthwatering pizzas! Crafted with care and bursting with flavor, each bite is a slice of heaven. From classic favorites to gourmet specialties, our pizzas are made to satisfy every craving.
                        </p>
                        <div className="items-center mt-2 grid">
                            <span className="text-yellow-400 mr-1">★★★★☆</span>
                            <span className="text-gray-800 text-md font-bold">₦ 9,000</span>
                        </div>
                        <div className="mt-2">
                            <label className="block text-gray-600 font-bold">Additions</label>
                            <select className="border rounded-md mt-1">
                                <option>Meat</option>
                                <option>Cheese</option>
                                <option>Vegetables</option>
                            </select>
                        </div>
                        <button className="bg-orange-500 text-white px-4 py-2 w-full rounded-md mt-4">Buy Now</button>
                    </div>
                    <div>
                        <img src={cart} alt="Cart" className='h-12 w-40 pb-3' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PizzaCard;
