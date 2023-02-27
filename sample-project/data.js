let books = [
    {
        id: 1,
        name: 'Book 1',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, nihil culpa. Quam nulla obcaecati iste tenetur hic vel, eaque excepturi explicabo corporis tempora magnam unde sed voluptatibus. Eius, architecto quaerat.'
    },
    {
        id: 2,
        name: 'Book 2',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, nihil culpa. Quam nulla obcaecati iste tenetur hic vel, eaque excepturi explicabo corporis tempora magnam unde sed voluptatibus. Eius, architecto quaerat.'
    },
    {
        id: 3,
        name: 'Book 3',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, nihil culpa. Quam nulla obcaecati iste tenetur hic vel, eaque excepturi explicabo corporis tempora magnam unde sed voluptatibus. Eius, architecto quaerat.'
    },
    {
        id: 4,
        name: 'Book 4',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, nihil culpa. Quam nulla obcaecati iste tenetur hic vel, eaque excepturi explicabo corporis tempora magnam unde sed voluptatibus. Eius, architecto quaerat.'
    }
]

const check = localStorage.getItem('bookData')

if (!check) {
    localStorage.setItem('bookData', JSON.stringify(books))
}
else {
    books = JSON.parse(check)
}

