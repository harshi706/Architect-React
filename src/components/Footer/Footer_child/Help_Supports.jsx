import '../../../Dropitems/Styles'

const helpcollections = [
    'Design & Planners',
    'Return policy',
    'Prices and price tags',
    'Gift Card',
    'Contact us',
    'FAQ',
    'Terms and conditions',
];

const Helpcollections = () => {
    return (
        <div className='filter_item'>
            <h4 className='filter_heading text-black'>Help</h4>
            <div className='filter_content'>
                <ul className='filter_content_list'>
                    {helpcollections.map((item) => (
                        <li><a href='#'>{item}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Helpcollections;
