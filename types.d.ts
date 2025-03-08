// This file contains global type definitions

// Extend the JSX namespace
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Declare React namespace
declare namespace React {
  interface ReactNode {}
  
  interface ChangeEvent<T> {
    target: T;
  }
  
  interface FormEvent {
    preventDefault(): void;
  }
} 