

import ListItem from './ListItem'

const FAQ = (props) => {
  return (
    <div className='p-10'>
        <ul>
          {props.questions.map((item,index) => 
          <ListItem 
          showAnswer={props.showAnswer} 
          key={index}
           question={item.question} 
           answer={item.answer}
            show={item.show}
            index={index}/> )}
        </ul>
    </div>
  )
}

export default FAQ