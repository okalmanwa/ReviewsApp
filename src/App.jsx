import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FeedbackProvider } from './context/FeedbackContext'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedbackStats from './components/FeedbackStats'
import Form from './components/Form'
import AboutPage from './pages/AboutPage'
import Container from './components/shared/Container'
import AboutIconLink from './components/AboutIconLink'
import feedBackData from './Data/FeedbackData'
function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header title="Feedback UI" />
        <Routes>
          <Route path='/' element={
            <Container>
              <Form />
              <FeedbackStats />
              <FeedBackList  />
            </Container>}>
          </Route>

          <Route path='/about' element={<AboutPage />} />
        </Routes>
        <AboutIconLink />
      </Router>

    </FeedbackProvider>


  )
}
export default App


