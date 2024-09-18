import './App.css';
import { Grid, Header, GridColumn } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from './features/counter/counterSlice';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <Grid columns={4} centered padded>
      <Grid.Row verticalAlign='middle'>
        <GridColumn textAlign='center'>
          <Header size='huge'>Count: {count}</Header>
          <button onClick={() => dispatch(increment())}>Increase +</button>
          <button onClick={() => dispatch(decrement())}>Decrease -</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </GridColumn>
      </Grid.Row>
    </Grid>
  );
}

export default App;
