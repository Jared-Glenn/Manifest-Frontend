import React, { useState, useEffect } from "react";
import ManifestApi from "./api";
import "./Kinships.css";

import Kinship from "./Kinship";

function Kinships() {

    const [ kinships, setKinships ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    useEffect(() => {
        async function getKinships() {
            setIsLoading(true);
            try {
                const res = await ManifestApi.getKinships();
                setKinships(res.kinships);
                console.log(kinships);
            }
            catch (err) {
                setError(err.message || "An unexpected error occured");
            }
            setIsLoading(false);
        }
        getKinships();
    }, [])

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <div className="list">
                    {kinships.map(kinship => (
                        <div className="outer-card" key={kinship.kinship_name}>
                            <Kinship kinshipObject={ kinship } />
                        </div>
                    ))}
                </div>
                )}
        </>
    )
}

export default Kinships;