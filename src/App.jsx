import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import InputCard from './components/InputCard';


const App = () => {

  const prevCards = localStorage.getItem("cards")
  const storedCards = prevCards ? JSON.parse(prevCards) : []

  const [cardData, setCardData] = useState(storedCards)

  useEffect(()=>{
    localStorage.setItem("cards", JSON.stringify(cardData))
  }, [cardData])
  


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Card Application</h1>
      <InputCard setCardData={setCardData}/>
      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;