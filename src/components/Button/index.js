import './index.css';

const Button = ({onClick}) =>  {
  return (
    <button className='Preview-button' onClick={onClick}>
        Preview
    </button>
  );
}

export default Button;
