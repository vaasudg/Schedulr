import Router from 'next/router'
import NProgress from 'nprogress'
import { RecoilRoot } from 'recoil'
import Layout from '../components/Layout'
import ThemeContext from '../context/ThemeContext'
import '../styles/globals.css'
import '../styles/nprogress.css'

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ThemeContext>
    </RecoilRoot>
  )
}

export default MyApp
