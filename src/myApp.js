


export default function MyApp({ Component, pageProps }) {

    return(
        <section className='bg-blue-200 min-h-screen grid place-items-center dark:bg-blue-900'>
        <Component{...pageProps}/>
        </section>

    )
}