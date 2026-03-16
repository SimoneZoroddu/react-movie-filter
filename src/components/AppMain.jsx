import { useEffect, useState } from "react"


export default function AppMain({ array }) {


    const singleArrayGenre = array.map((singleArray) => singleArray.genre)
    const settedGenre = [...new Set(singleArrayGenre)]
    const [genre, setGenre] = useState('')



    const [filmsFiltered, setfilmsFiltered] = useState([])

    useEffect(() => {

        const filteredFilms = array.filter(filterFilms => filterFilms.genre.includes(genre))
        setfilmsFiltered(filteredFilms)

    }, [genre])


    const [title, setTitle] = useState('')
    const singleArrayTitle = array.map((singleArray) => singleArray.title)


    const [filterForTitle, setFilterForTitle] = useState([])

    useEffect(() => {

        const filteredByFilms = array.filter(filterFilms => filterFilms.title === title)
        setFilterForTitle(filteredByFilms)
    }, [title])

    return (
        <>
            <select name="Films" id="films" value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="">Seleziona un genere</option>
                {
                    settedGenre.map((singleGenre, index) => (

                        <option key={index} value={singleGenre} > {singleGenre}</option>

                    ))

                }
            </select >
            <select name="Genre" id="genre" value={title} onChange={(e) => setTitle(e.target.value)}>
                <option value="">Seleziona un titolo</option>
                {
                    singleArrayTitle.map((singleTitle, index) => (

                        <option key={index} value={singleTitle} > {singleTitle}</option>

                    ))

                }
            </select>
            <ul>
                {
                    filterForTitle.map((singleArray, index) => (

                        <li key={index}>{singleArray.genre}</li>

                    ))
                }
            </ul>
            <ul>
                {
                    filmsFiltered.map((singleArray, index) => (

                        <li key={index}>{singleArray.title}</li>

                    ))
                }
            </ul>
        </>
    )
}





/*<select name="cars" id="cars">

                {
                    array.map(({ title, genre }) => (
                            
                            <option value={title} key={title}>{title}</option>
                    
                    ))

                }

    </select>
*/