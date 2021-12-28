import './index.css';
import ReallyGoodLogo from '../iconComponents/ReallyGoodLogo';
import { useRecoilValue } from 'recoil';
import { pickedColorAtom } from '../../recoil/picked-color/atoms';

const ImgContainer = () =>  {
  const pickedColor = useRecoilValue(pickedColorAtom);

  return (
    <div className='Img-container'>
        <div className='Shirt-container'>
            <img src={'/images/shirt.svg'} alt='shirt' height='439px' width='466px'/>
            <ReallyGoodLogo fill={pickedColor} className='Logo' height='139px' width='122px'/>
        </div>
    </div>
  );
}

export default ImgContainer;
