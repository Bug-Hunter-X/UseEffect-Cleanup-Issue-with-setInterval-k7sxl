# React useEffect Cleanup Issue

This repository demonstrates a common issue with React's `useEffect` hook and its cleanup function when using `setInterval`. The bug involves failing to clear the interval properly when a specific condition is met, leading to unexpected behavior and potential memory leaks.

## Bug Description

The `MyComponent` function uses `useEffect` to update a count every second. The `setInterval` function is set up to update the count but there is a problem with the cleanup function; the cleanup function is only called when the component unmounts which means the interval continues to run even when the condition `count < 10` is no longer true. This results in the interval continuing to run indefinitely, even after the count exceeds 10.

## Solution

The solution involves ensuring that the `clearInterval` function is called when the condition is no longer true, preventing the interval from running unnecessarily.