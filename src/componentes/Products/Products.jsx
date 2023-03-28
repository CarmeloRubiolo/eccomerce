import "./Products.css"
import { getProducts } from "../../products"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../Header/Header"


const Products = ({products}) => {

    return (
      <>
      <Header />
        <div className='container'>
      <div className='row'>
        {products.map(all => {
          return(
            <div key={all.id} className='col'>
              <div className="card card-container">
                <img src={all.image} className="card-img-top" alt={all.title}/>
                <div className="card-body">
                  <h6>{all.title}</h6>
                  <p className="card-title">$ {all.price}</p>
                  <Link to={`/detail/${all.id}`} className="btn btn-primary">Ver detalle</Link>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </div>
        </>
    )
}

export default Products