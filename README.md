# React useEffect Infinite Loop Bug
This repository demonstrates a common bug in React applications involving infinite loops within the `useEffect` hook. The bug arises from improperly updating state within the `useEffect`'s dependency array, leading to a continuous loop of state updates.

## Bug Description
The `MyComponent` component uses the `useState` hook to manage a count. The `useEffect` hook is intended to reset the count to 0 when it exceeds 5.  However, the implementation causes an infinite loop because changing `count` inside the `useEffect` triggers another execution of `useEffect`.