import { useEffect, useState } from "react"


export default function AppMain({ array }) {


    const singleArrayGenre = array.map((singleArray) => singleArray.genre)
    const settedGenre = [...new Set(singleArrayGenre)]
    const [genre, setGenre] = useState('')



    const [filmsFiltered, setfilmsFiltered] = useState(array)
    const [title, setTitle] = useState('')
    const [addNewTitle, setAddNewTitle] = useState('')
    const [addNewGenre, setAddNewGenre] = useState('')

    const [addNewFilms, setAddNewFilms] = useState(array)
    //console.log(addNewFilms);
    //console.log(filmsFiltered);


    function addNewFilm(e) {
        e.preventDefault()
        const newObjectWithFilm = { title: addNewTitle, genre: addNewGenre }
        //console.log(newObjectWithFilm);

        //console.log(saveNewArray, newObjectWithFilm);
        //console.log([saveNewArray, ...filmsFiltered]);

        setAddNewFilms([newObjectWithFilm, ...addNewFilms])

    }




    useEffect(() => {

        const filteredFilms = addNewFilms.filter(filterFilms => filterFilms.genre.includes(genre))
        const filteredByTitle = filteredFilms.filter((film) => film.title.includes(title))
        setfilmsFiltered(filteredByTitle)

    }, [genre, title, addNewFilms])




    return (
        <>
            <form action="" onSubmit={addNewFilm}>
                <input type="text" value={addNewTitle} onChange={(e) => setAddNewTitle(e.target.value)} />
                <select name="" id="" value={addNewGenre} onChange={(e) => setAddNewGenre(e.target.value)}>
                    <option value="">Seleziona un genere</option>
                    {
                        settedGenre.map((singleGenre, index) => (

                            <option key={index} value={singleGenre} > {singleGenre}</option>

                        ))
                    }
                </select>
                <button>Add</button>
            </form>
            <select name="Films" id="films" value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="">Seleziona un genere</option>
                {
                    settedGenre.map((singleGenre, index) => (

                        <option key={index} value={singleGenre} > {singleGenre}</option>

                    ))

                }
            </select >
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <ul>
                {
                    filmsFiltered.map((singleArray, index) => (

                        <li key={index}>TITOLO: {singleArray.title} GENERE:{singleArray.genre}</li>

                    ))
                }
            </ul>
        </>
    )
}










/* 
















//console.log(title);
//console.log(filmsFiltered);

const arrayFilteredByName = filmsFiltered.filter((film)=> film.title.includes(title))
//console.log(prova);





const singleArrayTitle = array.map((singleArray) => singleArray.title)


const [filterForTitle, setFilterForTitle] = useState([])

useEffect(() => {
    
    const filteredByFilms = array.filter(filterFilms => filterFilms.title === title)
    setFilterForTitle(filteredByFilms)
}, [title])
<ul>
                {
                    filterForTitle.map((singleArray, index) => (

                        <li key={index}>{singleArray.genre}</li>

                    ))
                }
            </ul> 


<select name="cars" id="cars">

{
    array.map(({ title, genre }) => (
        
        <option value={title} key={title}>{title}</option>
        
        ))
        
        }
        
        </select>
    



       <select name="Genre" id="genre" value={title} onChange={(e) => setTitle(e.target.value)}>
           <option value="">Seleziona un titolo</option>
           {
               singleArrayTitle.map((singleTitle, index) => (
       
                   <option key={index} value={singleTitle} > {singleTitle}</option>
       
               ))
       
           
       </select> */