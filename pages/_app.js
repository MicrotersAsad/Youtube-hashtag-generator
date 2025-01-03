import Script from 'next/script'
import '../styles/globals.css'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'




function MyApp({ Component, pageProps }) {
  return<>
   <div className=''>
  <Head>
     <title>Tag Generator</title>
        <meta name="Agency Website" content="Generated by AsadTEch" />
      {/* bootstrap css cdn*/}
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      </Head>
   

      {/* bootstrap js cdn*/}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
    <Navbar/> 


  <Component {...pageProps} 

  />
  <Footer/>


</div>
 
  </>
}

export default MyApp
