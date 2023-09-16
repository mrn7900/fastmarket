import './css/Products.css'

function Products(){
    return <div>
<div>کالاها</div>
<div className='flexcontainer'>
    <div className='price'><p>قیمت های روز</p>
    <button className="buybtn btn" >
            مشاهده همه محصولات
        </button>
    </div>
    
    <div className='productcontainer'>
        
        <div className='image '>
            <img className='image' src="https://api.snapp.market/media/cache/product_variation_transparent_image/20220306-403413-1.png" alt="" />
        </div>
        <div>
         <p>ماست</p> 
        </div>
        <div>
            180 تومان
        </div>
        <button className="buybtn btn" >
            افزودن به سبد
        </button>
    </div>
   <div className='productcontainer'>
        
        <div className='image'>
            <img className='image' src="https://api.snapp.market/media/cache/product_variation_transparent_image/407613-20000.png" alt="" />
        </div>
        <div>
            <p>خیارشور</p>
        </div>
        <div>
            180 تومان
        </div>
        <button className="buybtn btn" >
            افزودن به سبد
        </button>
    </div>
    <div className='productcontainer'>
       
        <div className='image'>
            <img className='image' src="https://api.snapp.market/media/cache/product_variation_transparent_image/20230902-426826-20000.png" alt="" />
        </div>
        <div>
            <p>رب گوجه</p>
        </div>
        <div>
            180 تومان
        </div>
        <button className="buybtn btn" >
            افزودن به سبد
        </button>
    </div>
   </div>
   
</div>
}
export default Products;