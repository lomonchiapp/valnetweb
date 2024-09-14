import { Grid2 } from '@mui/material';
import { Slideshow } from '../../components/home/Slideshow';
import { QueDeseas } from '../../components/home/QueDeseas';
import { Planes } from '../../components/home/Planes';

const Home = () => {
  return (
    <Grid2 container>
      <Grid2 item size={12}>
          <Slideshow />
      </Grid2>
      <Grid2 item size={12}>
          <QueDeseas />
      </Grid2>
      <Grid2 item size={12}>
          <Planes />
      </Grid2>
    </Grid2>
  );
};
export default Home