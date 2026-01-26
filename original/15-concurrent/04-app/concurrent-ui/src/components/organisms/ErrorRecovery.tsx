import { useRef } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { Alert, AlertIcon, Button } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import type { FallbackProps } from 'react-error-boundary';

const ErrorFallback: FC<FallbackProps> = ({ error, resetErrorBoundary }) => (
  <>
    <Alert status="warning">
      <AlertIcon />
      {error.message}
    </Alert>
    <Button colorScheme="orange" onClick={resetErrorBoundary}>
      エラーをクリア
    </Button>
  </>
);

type Props = { onReset?: () => void } & PropsWithChildren;

const ErrorRecovery: FC<Props> = ({ onReset, children }) => {
  const ebKey = useRef(0);
  const handleReset = onReset ?? (() => (ebKey.current += 1));

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={handleReset}
      key={ebKey.current}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorRecovery;
