import React, { useState } from 'react'

const InputCard = ({ setCardData }) => {
    const [newCard, setNewCard] = useState({
        title: "",
        description: "",
        imageUrl: ""
    })

    const callNewCard = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewCard(ini => {
            return { ...ini, [name]: value }
        })
        console.log(newCard)
    }

    const callSubmitCard = (e) => {
        e.preventDefault()
        setCardData(prevState => {
            return [...prevState, newCard]
        })
        setNewCard({
            title: "",
            description: "",
            imageUrl: ""
        })
    }

    return (
        <div className='my-10 text-center'>
            <input type="text" placeholder='Add Name' name='title' onChange={callNewCard} value={newCard.title}
                className='mx-5 border-2 border-blue-600 rounded-md p-2' />
            <input type="text" placeholder='Add Description' name='description' onChange={callNewCard} value={newCard.description}
                className='mx-5 border-2 border-blue-600 rounded-md p-2' />
            <input type="text" placeholder='Add Image URL' name='imageUrl' onChange={callNewCard} value={newCard.imageUrl}
                className='mx-5 border-2 border-blue-600 rounded-md p-2' />
            <button onClick={callSubmitCard}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5">Add Card</button>
        </div>
    )
}

export default InputCard
