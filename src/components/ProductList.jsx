import React, { useState } from 'react';
import './css/Products.css';
import './css/ProductList.css'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

function ProductList() {
  const drinks = [
    {
      name: 'دوغ',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/20210809-303346-1.png',
    },
    {
      name: 'نوشابه',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/60ffd2aa684e6.png',
    },
    {
      name: 'دلستر',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/20230513-174097-20000.png',
    },
    {
      name: 'آب',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/60fd13db1b284.png',
    }
  ];
  const dairy = [
    {
      name: 'کره',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/5ec51ce09c8aa.png',
    },
    {
      name: 'خامه',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/61825aac53941.png',
    },
    {
      name: 'پنیر',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/62a5a4af4bca1.png',
    },
    {
      name: 'شیر',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/60d0622a44c1c.png',
    }
  ];
  const breakfast = [
    {
      name: 'چای',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/20230426-33130-20000.png',
    },
    {
      name: 'کره بادام زمینی',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/630cc801c5ddc.png',
    },
    {
      name: 'خامه شکلاتی',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/60bdd8d905492.png',
    },
    {
      name: 'عسل',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/342415-20000.png',
    }
  ];
  const driedfruit = [
    {
      name: 'آجیل',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/60f5249a1d1ab.png',
    },
    {
      name: 'کنجد',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/20230830-189846-20000.png',
    },
    {
      name: 'حبوبات',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/20210802-33140-1.png',
    },
    {
      name: 'خرما',
      price: '180 تومان',
      image: 'data:image/jpeg;base64,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',
    }
  ];
  const snaks = [
    {
      name: 'چیپس',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/62dd03f5ede89.png',
    },
    {
      name: 'پفک',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/20230513-282254-20000.png',
    },
    {
      name: 'کروسان',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/20210807-299867.png',
    },
    {
      name: 'کیک',
      price: '180 تومان',
      image: 'https://api.snapp.market/media/cache/product_variation_transparent_image/20230523-215071-20000.png',
    }
  ];
  
  

  const slidesToShow = 3;

  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const [currentSlide4, setCurrentSlide4] = useState(0);

  const handleNext1 = () => {
    setCurrentSlide1((prevSlide) => (prevSlide + 1) % Math.ceil(drinks.length / slidesToShow));
  };

  const handleNext2 = () => {
    setCurrentSlide2((prevSlide) => (prevSlide + 1) % Math.ceil(dairy.length / slidesToShow));
  };

  const handleNext3 = () => {
    setCurrentSlide3((prevSlide) => (prevSlide + 1) % Math.ceil(breakfast.length / slidesToShow));
  };

  const handleNext4 = () => {
    setCurrentSlide4((prevSlide) => (prevSlide + 1) % Math.ceil(driedfruit.length / slidesToShow));
  };
  return (
    <div>
      <h2>لبنیات</h2>
      <div className='slideHolder'>
        <div className='price'>
          <p>قیمت های روز</p>
            <a href="/group">
            <button className="slideHolderbtn btn">
             محصولات بیشتر از این گروه
            </button>
          </a>
        </div>
        
        <div className='product-slider'>
          {dairy.slice(
            currentSlide1 * slidesToShow,
            (currentSlide1 + 1) * slidesToShow
          ).map((dairy, index) => (
            <div key={index} className='productcontainer'>
              <div className='image '>
                <img className='image' src={dairy.image} alt="" />
              </div>
              <div>
                <p>{dairy.name}</p> 
              </div>
              <div>
                {dairy.price}
              </div>
              <button className="slideHolderbtn btn" >
                افزودن به سبد
              </button>
            </div>
          ))}
        </div>
        
        <div className="slideshow-controls">
          <button className='slideHolderbtn btn' onClick={handleNext1}><ArrowBackIosNewOutlinedIcon/></button>
        </div>
      </div>

      <h2>نوشیدنی ها</h2>
      <div className='slideHolder'>
        <div className='price'>
          <p>قیمت های روز</p>
            <a href="/group">
            <button className="slideHolderbtn btn">
             محصولات بیشتر از این گروه
            </button>
          </a>
        </div>
        
        <div className='product-slider'>
          {drinks.slice(
            currentSlide2 * slidesToShow,
            (currentSlide2 + 1) * slidesToShow
          ).map((drinks, index) => (
            <div key={index} className='productcontainer'>
              <div className='image '>
                <img className='image' src={drinks.image} alt="" />
              </div>
              <div>
                <p>{drinks.name}</p> 
              </div>
              <div>
                {drinks.price}
              </div>
              <button className="slideHolderbtn btn" >
                افزودن به سبد
              </button>
            </div>
          ))}
        </div>
        
        <div className="slideshow-controls">
          <button className='slideHolderbtn btn' onClick={handleNext2}><ArrowBackIosNewOutlinedIcon/></button>
        </div>
      </div>

      <h2>صبحانه</h2>
      <div className='slideHolder'>
        <div className='price'>
          <p>قیمت های روز</p>
            <a href="/group">
            <button className="slideHolderbtn btn">
             محصولات بیشتر از این گروه
            </button>
          </a>
        </div>
        
        <div className='product-slider'>
          {breakfast.slice(
            currentSlide3 * slidesToShow,
            (currentSlide3 + 1) * slidesToShow
          ).map((breakfast, index) => (
            <div key={index} className='productcontainer'>
              <div className='image '>
                <img className='image' src={breakfast.image} alt="" />
              </div>
              <div>
                <p>{breakfast.name}</p> 
              </div>
              <div>
                {breakfast.price}
              </div>
              <button className="slideHolderbtn btn" >
                افزودن به سبد
              </button>
            </div>
          ))}
        </div>
        
        <div className="slideshow-controls">
          <button className='slideHolderbtn btn' onClick={handleNext3}><ArrowBackIosNewOutlinedIcon/></button>
        </div>
      </div>

      <h2>خشکبار</h2>
      <div className='slideHolder'>
        <div className='price'>
          <p>قیمت های روز</p>
            <a href="/group">
            <button className="slideHolderbtn btn">
             محصولات بیشتر از این گروه
            </button>
          </a>
        </div>
        
        <div className='product-slider'>
          {driedfruit.slice(
            currentSlide4 * slidesToShow,
            (currentSlide4 + 1) * slidesToShow
          ).map((driedfruit, index) => (
            <div key={index} className='productcontainer'>
              <div className='image '>
                <img className='image' src={driedfruit.image} alt="" />
              </div>
              <div>
                <p>{driedfruit.name}</p> 
              </div>
              <div>
                {driedfruit.price}
              </div>
              <button className="slideHolderbtn btn" >
                افزودن به سبد
              </button>
            </div>
          ))}
        </div>
        
        <div className="slideshow-controls">
          <button className='slideHolderbtn btn' onClick={handleNext4}><ArrowBackIosNewOutlinedIcon/></button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
