import React, { useState, useEffect } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter(props) {
  const [count, setCount] = useState(props.initialValue);

  useEffect(() => {
    const incrementCount = () => {
      setCount((c) => c + props.incrementAmount);
    };
    console.log("mounted");

    let interval = setInterval(incrementCount, props.incrementInterval * 1000);

    return () => {
      clearInterval(interval);
      console.log("unmounted");
    };
  }, [props]);

  return (
    <>
      <CounterDisplay count={count} />
    </>
  );
}

// export class CounterClass extends React.Component {
//   constructor(props) {
//     super(props);

//     this._interval = undefined;
//   }

//   state = {
//     count: this.props.initialValue,
//   };

//   componentDidMount(prevProps, prevState) {
//     this._interval = setInterval(
//       () =>
//         this.setState((state) => ({
//           count: state.count + this.props.incrementAmount,
//         })),
//       this.props.incrementInterval * 1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this._interval);
//   }

//   render() {
//     return (
//       <>
//         <CounterDisplay count={this.state.count} />
//       </>
//     );
//   }
// }
