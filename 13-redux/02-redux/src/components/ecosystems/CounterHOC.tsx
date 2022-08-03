import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { add, decrement, increment } from 'stores/actions';
import type { CounterState } from 'stores/reducers';
import CounterBoard from 'components/molecules/CounterBoard';

type StateProps = { count: number };
type DispatchProps = {
  decrement: () => void;
  increment: () => void;
  add: (amount: number) => void;
};

const mapStateToProps = (state: CounterState): StateProps => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  decrement: () => dispatch(decrement()),
  increment: () => dispatch(increment()),
  add: (amount: number) => dispatch(add(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterBoard);
