import { useEffect, useState } from "react"




export default function AppMain({ array }) {
    //console.log(array);

    const singleArrayGenre = array.map((singleArray) => singleArray.genre)
    //console.log(singleArrayGenre);
    const settedGenre = [...new Set(singleArrayGenre)]
    //console.log(settedGenre);


    const [films, setFilms] = useState(settedGenre)


    useEffect(() => {

    }, [films])


    return (
        <>
            <select name="Films" id="films">

                {
                    films.map((genre, index) => (

                        <option value={genre} key={index} > {genre}</option>


                    ))

                }

            </select >

            <ul>
                {
                    array.map((singleArray, index) => (

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