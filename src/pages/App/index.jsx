import Layout from '../../components/Layout'
import Navbar from '../../components/Navbar'

const App = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <div className='h-screen bg-slate-50 dark:bg-slate-900'>
          <h1>App</h1>
        </div>
      </Layout>
    </>
  )
}

export default App