import { Provider } from 'react-redux';

import 'tailwindcss/tailwind.css'
import store from '../components/storeindex';


function MyApp({ Component, pageProps }) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}

export default MyApp;
