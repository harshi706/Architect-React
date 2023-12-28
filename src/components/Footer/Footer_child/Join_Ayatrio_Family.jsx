import '../../../Dropitems/Styles'
import Image from '../../../assets/ayatriologo.png';

const Joinayatrio = () => {
    return (
        <div className='filter_item'>
            <div>
                <h4 className='filter_heading text-black'>Join Ayatrio Family</h4>
                <img className='w-[40%]' src={Image} alt='' my-5 />
            </div>
            <p className='text-2xl'>Enjoy member-only discounts & offers, early access to Ayatrio sale, delicious gift offers and much more. Join for free.​</p>
            <p className='gray-text text-xl cursor-pointer'>Join the club</p>
        </div>
    );
};

export default Joinayatrio;
