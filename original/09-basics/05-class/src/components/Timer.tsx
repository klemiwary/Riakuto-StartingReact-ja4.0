import { Component } from 'react';
import { RepeatClockIcon as ResetIcon } from '@chakra-ui/icons';
import { Box, Button, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

type Props = { maxCount?: number };
type State = { timeLeft: number };
const MAX_COUNT = 60;

class Timer extends Component<Props, State> {
  #timerId: ReturnType<typeof setInterval> | null = null;

  constructor(props: Props) {
    super(props);
    this.state = { timeLeft: MAX_COUNT };
  }

  #tick = () => {
    this.setState((state) => ({ timeLeft: state.timeLeft - 1 }));
  };

  #reset = () => {
    this.setState({ timeLeft: MAX_COUNT });
  };

  componentDidMount(): void {
    this.#timerId = setInterval(this.#tick, 1000);
  }

  componentDidUpdate(): void {
    if (this.state.timeLeft === 0) this.#reset();
  }

  componentWillUnmount(): void {
    if (this.#timerId !== null) clearInterval(this.#timerId);
  }

  render = (): JSX.Element => (
    <Box p={5} w="xs" borderWidth="1px" borderRadius="lg" boxShadow="base">
      <Stat mb={2}>
        <StatLabel fontSize={18}>Count</StatLabel>
        <StatNumber fontSize={42}>{this.state.timeLeft}</StatNumber>
      </Stat>
      <Button
        w="90%"
        colorScheme="red"
        variant="solid"
        leftIcon={<ResetIcon />}
        onClick={this.#reset}
      >
        Reset
      </Button>
    </Box>
  );
}

export default Timer;
