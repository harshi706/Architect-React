import '../../../Dropitems/Styles'

const aboutcollections = [
    'This is Ayatrio',
    'Sustainability',
    'Ayatrio Stores',
    'Ayatrio for Business',
    'Member Feedback',
];

const Aboutcollections = () => {
    return (
        <div className='filter_item'>
            <h4 className='filter_heading text-black'>About Ayatrio</h4>
            <div className='filter_content'>
                <ul className='filter_content_list'>
                    {aboutcollections.map((item) => (
                        <li><a href='#'>{item}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Aboutcollections;
