import { createContext } from 'react';

const NewsContext = createContext({
  showNews: true,
  setShowNews: () => {}
});

export const NewsProvider = NewsContext.Provider;

export default NewsContext;
