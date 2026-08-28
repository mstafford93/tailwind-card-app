import React, {useState} from 'react';
import Card from './components/Card';
import InputCard from './components/InputCard';


const App = () => {
  
  const [cardData, setCardData] = useState([
    {
      title: "Matthew Stafford",
      description: "Learning currently how to code with Tailwind in Vite",
      imageUrl: "https://scontent-lhr11-1.xx.fbcdn.net/v/t1.6435-9/81372185_10219036358053487_1726081046262317056_n.jpg?stp=dst-jpg_tt6&cstp=mx866x867&ctp=s866x867&_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=e4WStEgFtsQQ7kNvwFQNwFi&_nc_oc=Adr-ogdXIf2MV_DzBllua1jwyASqPUSj-Kt4U7zHqT2bo6NaOJtk5bRIK2pii-bDA28&_nc_zt=23&_nc_ht=scontent-lhr11-1.xx&_nc_gid=Bry5lx921cuY8H0kR7plrw&_nc_ss=7b2a8&oh=00_AQGUai0z7CKFrrgoktRuUKIrmQ89F_5JrWSEOnOnRw55oQ&oe=6AB94EC9"
    }
  ])


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">My Card Application</h1>
      <InputCard />
      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default App;