import Container from "./Components/Container"
import Header from "./Components/Header"
import FAQ from "./Components/FAQ"

import { useState } from "react"

import { faqData as data } from "./data.js"

const App = () => {

  const [questions, setQuestion] = useState(data)

const showAnswerHandler = (index) => {
const faqs= [...questions]
faqs[index].show = !faqs[index].show
setQuestion(faqs)
}

  return (
    < div className= "min-h-screen flex items-center justify-center bg-gray-100 font-roboto">
<Container>
<Header />
<FAQ showAnswer={showAnswerHandler} questions={questions}/>
</Container>
    </div>
    )
}

export default App