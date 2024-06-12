import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ManifestApi from "./api";
import "./KinshipDetails.css";

function KinshipDetails() {

    const [ kinship, setKinship ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    const [imageSrcList, setImageSrcList] = useState([]);

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

    useEffect(() => {
        async function loadImages() {
            try {
                let imageList = []
                for (let image of kinship.images) {
                    let imageModule;
                    try {
                        imageModule = await import(`./assets/${image.url}.png`);
                    } 
                    catch {
                        imageModule = await import(`./assets/${image.url}.jpg`);
                    }
                    imageList.push(imageModule.default);
                }
            setImageSrcList(imageList);
            }
            catch (error) {
                console.error("Error loading image:", error);
            }
        }
        loadImages();
    }, [kinship]);

    return (
        <>
        {isLoading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error.map(e => <p key={e}>{e}</p>)}</div>
            ) : (
                <>
                    <div className="article-div">
                        <h1 className="article-header">{kinship.kinship_name.charAt(0).toUpperCase() + kinship.kinship_name.slice(1).toLowerCase()}</h1>
                        {kinship.articles ? (
                            kinship.articles.map(article => (
                                    <div key={article.title}>
                                        <h2 className="article-subheader">{article.title}</h2>
                                        <p className="article-content">{article.text}</p>
                                        <br />
                                    </div>
                                ))) : (
                                    <p className="article-content">No content.</p>
                                )}
                        <p className="article-content"></p>
                    </div>
                    <div className="article-sidebar">
                        <h3 className="sidebar-header">{kinship.kinship_name.charAt(0).toUpperCase() + kinship.kinship_name.slice(1).toLowerCase()}</h3>
                        <img className="sidebar-image" src={imageSrcList[0]} alt={kinship.kinship_name} />
                        <p className="sidebar-content">
                            <span className="sidebar-bold">Plural: </span> 
                                {kinship.plural.charAt(0).toUpperCase() + kinship.plural.slice(1).toLowerCase()}
                        </p>
                        <p className="sidebar-content">
                            <span className="sidebar-bold">Population: </span> 
                                {kinship.population}
                        </p>
                        <p className="sidebar-content">
                            <span className="sidebar-bold">Creation Year: </span> 
                                {kinship.creation_year} M.E.
                        </p>
                        <p className="sidebar-content">
                            <span className="sidebar-bold">Notable Groups: </span> 
                        </p>
                        <ul>
                        {kinship.groups ? (
                            kinship.groups.map(group => (
                                    <li key={group.name} className="sidebar-content">{group.name}</li>
                                ))) : (
                                    <li>None</li>
                                )}
                        </ul>
                        <p className="sidebar-content">
                            <span className="sidebar-bold">Notable Territories: </span>
                        </p>
                        <ul>
                        {kinship.territories ? (
                            kinship.territories.map(territory => (
                                    <li key={territory.name} className="sidebar-content">{territory.name}</li>
                                ))) : (
                                    <li>None</li>
                                )}
                        </ul>
                    </div>
                </>
        )}
        </>
    )
}

export default KinshipDetails;