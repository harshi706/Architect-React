import '../../../Dropitems/Styles'

const collections = [
    'Log in ',
    'Join Ayatrio Family',
    'Member Offers',
    'Member Workshop & Events ',
    'Member Feedback',
];

const Familycollections = () => {
    return (
        <div className='filter_item'>
            <h4 className='filter_heading text-black'>Ayatrio Family</h4>
            <div className='filter_content'>
                <ul className='filter_content_list'>
                    {collections.map((item) => (
                        <li><a href='#'>{item}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Familycollections;
