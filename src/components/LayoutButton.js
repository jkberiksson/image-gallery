import { Columns, Grid } from 'react-feather';
import { Button } from '../styles/ButtonStyles';

const LayoutButton = ({ gridVisible, setGridVisible }) => {
  const changeLayout = () => {
    setGridVisible(!gridVisible);
  };

  return (
    <Button onClick={changeLayout}>
      {gridVisible ? <Columns size={'1.8rem'} /> : <Grid size={'1.8rem'} />}
    </Button>
  );
};

export default LayoutButton;
