import Header from './components/Header/Header'
import Main from './components/Main'
import Search from './components/Search/Search'
import Card from './components/DevCard/Card'
import Loader from './components/Loader/Loader'




function App() {



  return (
    <Main>
      <Loader />
      <Header />
      <Search />
      <Card />
    </Main>
  )
}

export default App
