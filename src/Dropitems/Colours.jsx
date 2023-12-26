import bnw from './bnw.png';
import blue from './blue.png';
import green from './green.png';
import gray from './gray.png';
import pink from './pink.webp';
import './style.css'

const colours = [
  {
    name: 'Black & White',
    image: bnw,
  },
  {
    name: 'Blue',
    image: blue,
  },
  {
    name: 'Green',
    image: green,
  },
  {
    name: 'Gray',
    image: gray,
  },
  {
    name: 'Pink',
    image: pink,
  },
];

const Colours = () => {
  return (
    <div className='filter_item'>
      <h4 className='filter_heading gray-text'>SHOP BY COLOUR</h4>
      <div className='filter_content'>
        <ul className='filter_content_list'>
          {colours.map((color) => (
            <li className='color_item'>
              <img className='color_photo' src={color.image} alt={color.name} />
                       <a href='#'> {color.name}  </a>

            </li>
          ))}
        </ul>
      </div>
      <p className='gray-text cursor-pointer'>8 More</p>
      <p>All Colours</p>
    </div>
  );
};

export default Colours;
