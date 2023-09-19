import './css/Footer.css'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
function Footer(){
    return <footer class='footerContainer'>
                <div class='abus'>
                    <h3>درباره ما</h3>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                </div>
                <div>
                    <h3>تماس باما</h3>
                    <p><BusinessOutlinedIcon/> تهران ، جردن</p>
                    <p><PhoneOutlinedIcon/> 0212043325</p>
                    <p><AlternateEmailOutlinedIcon/> ra@mail.com</p>
                </div>
                <div class='cpr'>
                    <p>All Rights Reserved by Copyright law ©</p>
                </div>
           </footer>
}
export default Footer;