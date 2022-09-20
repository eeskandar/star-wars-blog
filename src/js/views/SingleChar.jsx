import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdditionalInfo } from "../component/AdditionalInfo.jsx";

export const SingleChar = ()=> {
    const API_URL= "https://www.swapi.tech/api/"
    const [singleChar, setSingleChar] = useState([])
    const params = useParams()
    
    async function getSingleChar (cid) {
        const response = await fetch(API_URL + `people/${cid}`)
		if (!response.ok) {
            new Error("Ocurrió un errorsote en la solicitud")
		}
		const body = await response.json ()
        setSingleChar(body.result.properties)
	}

    useEffect(()=> getSingleChar(params.cid), [])

    return (
        <div>
            <div className="d-flex">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.cid}.jpg`} className="img-single-sizing m-3"
                alt="..." onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src="https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}/>
                <div className="mx-4 justify-content-center">
                    <h1 className="text-warning mt-3">{singleChar.name}</h1>
                    <p className="text-warning fs-5">Mucho texto referente a este pechocho personaje que, la verdad, seguramente aporta demasiado a la trama.</p>
                </div>
            </div>
            <div className="d-flex justify-content-around mt-4 mx-3 pt-4 border-top border-2 border-danger">
                <AdditionalInfo name="Name" data={singleChar.name}/>
                <AdditionalInfo name="Birth Year" data={singleChar.birth_year}/>
                <AdditionalInfo name="Gender" data={singleChar.gender}/>
                <AdditionalInfo name="Height" data={singleChar.height} />
                <AdditionalInfo name="Skin Color" data={singleChar.skin_color}/>
                <AdditionalInfo name="Eye Color" data={singleChar.eye_color}/>
            </div>
        </div>
    )
}