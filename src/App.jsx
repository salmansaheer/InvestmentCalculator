import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment: 100,
        annualInvestment: 30,
        expectedReturn: 10000,
        duration: 3
    })
  const isInputValid = userInput.duration >0 && userInput.expectedReturn >0 && userInput.initialInvestment >=0 && userInput.annualInvestment >=0;
  function handleChange(inputIdentifier, value){
      setUserInput((prevInput)=>{
          return {
              ...prevInput,
              [inputIdentifier]: +value
          }
      })
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {
        isInputValid ? 
        <Results input={userInput}/> :
        <p style={{textAlign: 'center'}}>Please enter valid input values.</p>
      }
    </>
  )
}

export default App
