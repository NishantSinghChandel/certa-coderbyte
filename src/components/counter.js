/* 
1. create a counter component using function component and hooks
2. The initial value '0' counter will be displayed.
3. There is 'Start' button below the counter value
4. When user click on start button the counter will increment by 1 on every second.
5. When user click on start button the button text changes to Pause.
6. When user click on Pause button the increment will stop and display the last updated value.
7. There is another 'RESET' button, when user click reset button the counter will set to zero and increment stops.
*/

import { useRef, useState } from "react";
import { IconClockPause } from "@tabler/icons-react";
import { IconClockStop } from "@tabler/icons-react";
import { IconClock } from "@tabler/icons-react";
function Counter() {
  const [counter, setCounter] = useState(0);
  const timer = useRef(null); // to save the id of interval

  const handleStartPause = () => {
    // if button clicked twice, the timer will be stop
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
      return;
    }

    // increment the counter on every 1000ms
    timer.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
  };

  // reset the counter to zero and clear the interval
  const handleReset = () => {
    clearInterval(timer.current);
    timer.current = null;
    setCounter(0);
  };
  return (
    <section>
      <div className="flex-center-column">
        <p className="text-lg">Counter: {counter}</p>
        <div>
          <button className="btn flex-center" onClick={handleStartPause}>
            {timer.current ? (
              <>
                <IconClockPause
                  style={{ marginRight: "5px",  }}
                />{" "}
                Pause{" "}
              </>
            ) : (
              <>
                <IconClock style={{ marginRight: "5px" }} />
                Start
              </>
            )}
          </button>
          <button className="btn flex-center" onClick={handleReset}>
            <IconClockStop
              style={{ marginRight: "5px",  }}
            />
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default Counter;
