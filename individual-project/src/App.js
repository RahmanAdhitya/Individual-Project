import './assets/styles.css';
import { Grid } from '@mui/material';
import Header from './component/Header/Header';
import Content from './component/Content/Content';

function App() {
  return (
    <Grid spacing={2} container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item xs={1} sm={2} />
        <Grid item xs={10} sm={8}>
          <Content />
        </Grid>
        <Grid item={1} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
