import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdditionalInfo } from "../component/AdditionalInfo";

export const SingleChar = ()=> {
    const API_URL= "https://www.swapi.tech/api/"
    const [singleChar, setSingleChar] = useState([])
    const params = useParams()
    
    async function getSingleChar (uid) {
        const response = await fetch(API_URL + `people/${uid}`)
		if (!response.ok) {
            new Error("Ocurrió un errorsote en la solicitud")
		}
		const body = await response.json ()
        setSingleChar(body.result.properties)
	}

    useEffect(()=> getSingleChar(params.uid), [])

    return (
        <div>
            <div className="d-flex">
                <img src="https://res.cloudinary.com/teepublic/image/private/s--uRRMpMxL--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1591539839/production/designs/11082438_0.jpg" className="card-img-top img-single-sizing ms-3" alt="..." />
                <div className="mx-4 justify-content-center">
                    <h1>{singleChar.name}</h1>
                    <p>Mucho texto</p>
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