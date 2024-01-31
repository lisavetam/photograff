function Button ({filteredPhotos}){
    return(
<div className="cont">
    <button className="change" onClick={() =>filteredPhotos("portrait")}>Portrait</button>
    <button className="change" onClick={() =>filteredPhotos("art")}>Art</button>
    <button className="change" onClick={() =>filteredPhotos("landscape")}>Landscape</button>
    
</div>
    )
}

export default Button;