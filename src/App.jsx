import React from 'react';

import { AppHeader, TabBar } from 'src/components';
import { PageCatalog, PageProduct } from 'src/pages';

import './App.scss';

function App() {
  return (
    <div className="app">
      <AppHeader />

      <main className="app-main">
        <div className="app-main__container">
          <PageCatalog />
          {/* <PageProduct /> */}
        </div>
      </main>

      {/* <TabBar /> */}
    </div>
  );
}

export default App;
