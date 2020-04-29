import React from 'react';

import {AuthProvider} from './context/AuthContext'
import Articles from "./components/Articles";

function App() {
  return (
    <AuthProvider>
      <Articles/>
    </AuthProvider>
  );
}

export default App;
