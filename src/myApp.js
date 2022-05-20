import Chitchat from './components/Notification/Chitchat.js';
import Button from './components/Notification/Button.js';


export default function MyApp({ Component, pageProps }) {


    return(
        <section className='bg-blue-200 min-h-screen grid place-items-center dark:bg-blue-900'>
        <Chitchat />
        <Button {...pageProps}/>
        </section>

    )
}