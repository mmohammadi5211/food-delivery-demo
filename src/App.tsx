import React from 'react';
import Layout from './components/Layout';
import { FoodsProvider } from './context/FoodContext';

function App() {
  return (
    <>
      <FoodsProvider>
        <Layout />
      </FoodsProvider>
    </>
  );
}

export default App;
