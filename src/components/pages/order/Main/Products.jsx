import styled from 'styled-components';

export default function Products({title, imageSource, price}) {
  return ( <ProductStyled className='produit' >
        <div className="image">
            <img src={imageSource} alt={title} />
        </div>
        <div className="info-text">
              <div className='title'>{title}</div>      
            <div className='description'>             
              <div className="price">{price}</div>
              <button className='add-button' >Ajouter</button>
            </div>
        </div>
    </ProductStyled>
  )
}

const ProductStyled = styled.div`
     
    background: red;
    width: 200px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
  
    .image{
    border: 1px solid yellow;
    width: 100%;
    height: auto;
    margin-top: 30px;
    
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .description{
      border: 1px solid blue;
    }

`;