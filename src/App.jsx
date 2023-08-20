import { Header } from './components/Header';
import { Chart } from './components/Chart';
import data from '../data.json'
import './App.css'

function App() {
  const values = data
  return (
    <>
      <main className='main'>
        <Header />
        <Chart data={values}/>
      </main>
    </>
  )
}

export default App;