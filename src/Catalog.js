

function Catalog ({anyshop}) {

return(

<div className="products">

{anyshop.map((element => {
const {id,name, price,size, image} = element;
return (

<div className="product-card" key={id}>

<img src={image} width="400px" height="320px" alt="Plakat"/>
<h3>{name}</h3>
  
 <h4>{size}cm</h4>                 
<h4> {price} FR</h4>
</div>

)

}))}

 </div>

 )

}

export default Catalog;

