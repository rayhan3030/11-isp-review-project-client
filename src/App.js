import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes/Routes'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider
        router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
