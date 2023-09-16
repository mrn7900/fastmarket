import './css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
function Header(){
    return <div>
        
                <header className='headerContainer'>
                
                    <div className='searchCon'>
                        <form action="">
                            <input type="text" placeholder='جست و جوی کالا' />
                            <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                    </div>
                    <div className='headerContent'>
                        <h1 >فست مارکت</h1>
                        
                        <FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} />
                        <h2 >خرید سوپرمارکتی بدون واسطه از درب کارخانه با فست مارکت</h2>
                    </div>
                    <div className='btnContainer'>
                        <button className="basketbtn btn" >
                        سبد خرید
                        </button>
                        <button className="basketbtn btn" >
                        ورود/ثبت نام
                        </button>
                    </div>
                   
                </header>
            </div>
}
export default Header;