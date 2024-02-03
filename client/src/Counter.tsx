import React, { memo, ReactElement, ReactEventHandler } from 'react';
type CounterProps = {
    increment: ReactEventHandler<HTMLButtonElement>;
  };
  const Counter = ({ increment }: CounterProps): ReactElement => {
    console.log('ss');
    
  return (
    <div>Countssser
           <button onClick={increment}> adi</button>
    </div>
  )
}

export default memo(Counter)