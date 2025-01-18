# TypeScript Type Error: Type 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript type error and its solution. The error occurs when trying to pass an array of strings to a function expecting a single string.  The example shows how to correctly handle this using type checking and appropriate function signatures.

## Bug

The `greeter` function expects a single string argument.  However, the `user` variable is an array of strings.  Attempting to pass `user` to `greeter` results in a type error.

## Solution

The solution involves either modifying the `greeter` function to accept an array of strings or modifying the way `user` is handled to pass a single string to the function.
