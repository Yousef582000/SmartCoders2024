
import './App.css';
import Layout from './Layout/Layout';
import { Toaster } from 'react-hot-toast';
function App() {
  return <> 
   <Layout/>
   <Toaster  position="top-right"
   z-index={10000000}
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }} />
  </>

}

export default App;
