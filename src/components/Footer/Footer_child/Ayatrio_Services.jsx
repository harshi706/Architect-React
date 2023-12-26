import '../../../Dropitems/Styles'

const ServicesCollections = [
    'Wallpaper',
    'Flooring',
    'Blinds',
    'Curtatins',
    'Sport Flooring',
];

const AyatrioServices = () => {
    return (
        <div className='filter_item'>
            <h4 className='filter_heading text-black'>Service</h4>
            <div className='filter_content'>
                <ul className='filter_content_list'>
                    {ServicesCollections.map((item) => (
                        <li><a href='#'>{item}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AyatrioServices;
