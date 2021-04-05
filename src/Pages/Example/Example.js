// import React, { useEffect, useState } from "react";

// function Example() {
//   const [count, setCount] = useState(0);

//   const addCount = () => {
//     setCount(count + 1);
//   };

//   useEffect(() => {
//     if (count !== 0) {
//       console.log("count 업");
//     }
//   }, [count]);

//   useEffect(() => {
//     console.log("렌더!");
//   }, []);

//   return (
//     <>
//       <div>스테이트는 {count}</div>
//       <button onClick={() => setCount(addCount)}>카운트 업</button>
//     </>
//   );
// }

// export default Example;
