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
            <div className="container text-center">
                <h1 className="text-primary p-2">Che Film ci sono oggi?</h1>
                <form action="" onSubmit={addNewFilm} className="text-center">
                    <input className="input-group-text my-3 mx-auto" placeholder="Scrivi il Nome del Film" type="text" value={addNewTitle} onChange={(e) => setAddNewTitle(e.target.value)} />
                    <select className="form-select text-center" aria-label="Default select example" name="" id="" value={addNewGenre} onChange={(e) => setAddNewGenre(e.target.value)}>
                        <option value="">Seleziona il suo genere</option>
                        {
                            settedGenre.map((singleGenre, index) => (

                                <option key={index} value={singleGenre} > {singleGenre}</option>

                            ))
                        }
                    </select>
                    <button className="btn btn-primary my-3 text-black">Aggiungi alla lista il Nuovo Film</button>
                </form>
                <select className="form-select mb-3 text-center" aria-label="Default select example" name="Films" id="films" value={genre} onChange={(e) => setGenre(e.target.value)}>
                    <option value="">Seleziona un genere da cercare</option>
                    {
                        settedGenre.map((singleGenre, index) => (

                            <option key={index} value={singleGenre} > {singleGenre}</option>

                        ))

                    }
                </select >
                <input className="input-group-text mb-3 mx-auto" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <ul className="list-group">
                    {
                        filmsFiltered.map((singleArray, index) => (

                            <li className="list-group-item" key={index}><span className="text-success">Titolo Film</span> : {singleArray.title} <span className="text-warning">Genere del Film</span> : {singleArray.genre}</li>

                        ))
                    }
                </ul>
            </div>
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