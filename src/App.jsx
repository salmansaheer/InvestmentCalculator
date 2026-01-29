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
      <Results input={userInput}/> 
    </>
  )
}

export default App
