import { createContext } from 'react';

const ToDosContext = createContext({
  todos: [],
  setTodos: () => {}
});

export const ToDosProvider = ToDosContext.Provider;

export default ToDosContext;
