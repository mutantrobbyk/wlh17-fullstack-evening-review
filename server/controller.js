const people = [{id:0, name: 'Billy Bob', img: 'https://robohash.org/BillyBob.png', favColor: 'Blue', favFood: 'Pad Thai', isCool:false}, {id: 1, name: 'Bobby Sue', img: 'https://robohash.org/BobbySue.png', favColor: 'Red', favFood: 'Bad Thai', isCool: true}]
let id = 2

module.exports = {
    getPeople: (req, res) => {
        // console.log('hit')
        res.status(200).send(people)
    },
    addPerson: (req, res) => {
        const {name, img, favColor, favFood, isCool} = req.body
        people.push({id, name, img, favColor,favFood,isCool})
        id++
        res.status(200).send(people)
    },
    updatePerson: (req, res) => {
        const {newId} = req.params
        const {name, img, favColor, favFood, isCool} = req.body
        const index = people.findIndex(el => el.id === +newId)
        // console.log(people[index])
        const newPerson = {
            id: newId || people[index].id,
            name: name || people[index].name,
            img: img || people[index].img,
            favColor: favColor || people[index].favColor,
            favFood: favFood || people[index].favFood,
            isCool: isCool || people[index].isCool
        }
        people.splice(index, 1, newPerson)
        res.status(200).send(people)
    },
    deletePerson: (req, res) => {
        const {newId} = req.params
        const index = people.findIndex(el => el.id === +newId)
        people.splice(index, 1)
        res.status(200).send(people)
    }


}