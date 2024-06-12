import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ManifestApi from "./api";

function KinshipDetails() {

    const [ kinship, setKinship ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    let params = useParams();

    useEffect(() => {
        async function getKinship(name) {
            setIsLoading(true);
            try {
                console.log(name);
                const res = await ManifestApi.getKinship(name);
                console.log("RESPONSE:", res.kinship[0].kinship_data);
                setKinship(res.kinship[0].kinship_data);
            }
            catch (err) {
                setError(err);
            }
            setIsLoading(false);
        }
        getKinship(params.name)
    }, [])

    return (
        <>
        {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.map(e => <p key={e}>{e}</p>)}</div>
            ) : (
                <>
                    <h1>{kinship.kinship_name.charAt(0).toUpperCase() + kinship.kinship_name.slice(1).toLowerCase()}</h1>
                </>
        )}
        </>
    )
}

export default KinshipDetails;