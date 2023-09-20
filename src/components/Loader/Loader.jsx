import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <RotatingLines
        strokeColor="var(--btn-background-color)"
        strokeWidth="4"
        animationDuration="1"
        width="120"
        visible={true}
      />
    </LoaderContainer>
  );
};

export default Loader;
