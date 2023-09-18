import React, { useState } from 'react';
import './css/Products.css';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

function Products() {
  const products = [
    {
      name: 'ماست',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/20220306-403413-1.png',
    },
    {
      name: 'خیارشور',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/407613-20000.png',
    },
    {
      name: 'رب گوجه',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/20230902-426826-20000.png',
    },
    {
      name: 'چای سیاه',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/20230426-33130-20000.png',
    },
    // Add more products as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesToShow = 3;
  const totalSlides = Math.ceil(products.length / slidesToShow);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  return (
    <div>
      <h2>کالاها</h2>
      <div className='flexcontainer'>
        <div className='price'>
          <p>قیمت های روز</p>
            <a href="/products">
            <button className="buybtn btn">
             مشاهده همه محصولات
            </button>
          </a>
        </div>
        
        <div className='product-slider'>
          {products.slice(
            currentSlide * slidesToShow,
            (currentSlide + 1) * slidesToShow
          ).map((product, index) => (
            <div key={index} className='productcontainer'>
              <div className='image '>
                <img className='image' src={product.image} alt="" />
              </div>
              <div>
                <p>{product.name}</p> 
              </div>
              <div>
                {product.price}
              </div>
              <button className="buybtn btn" >
                افزودن به سبد
              </button>
            </div>
          ))}
        </div>
        
        <div className="slideshow-controls">
          <button className='buybtn btn' onClick={handleNext}><ArrowBackIosNewOutlinedIcon/></button>
        </div>
      </div>
    </div>
  );
}

export default Products;
