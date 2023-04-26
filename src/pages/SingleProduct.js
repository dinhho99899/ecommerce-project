import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Breadcums from '../components/Breadcums'
import Stars from '../components/Stars'
import AddToCart from '../components/AddToCart'
import Gallery from '../components/Gallery'
import { useProductsContext } from '../context/ProductsContext'

const url = `https://course-api.com/react-store-single-product?id=`
const SingleProduct = () => {
  const { id } = useParams()
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`)
  }, [fetchSingleProduct, id])
  const {
    single_product: product,
    fetchSingleProduct,
    single_product_loading: loading,
    isError,
  } = useProductsContext()
  if (loading) {
    return <Wrapper>Loading...</Wrapper>
  }
  if (isError) {
    return <Wrapper>Loading...</Wrapper>
  }
  const {
    id: sku,
    images,
    name,
    price,
    stars,
    description,
    company,
    stock,
  } = product
  console.log(product)
  return (
    <Wrapper>
      <Breadcums title='Product' product={name} />

      <div className='section-center'>
        <Link className='btn' to='/'>
          Back to Home Page
        </Link>
        <div className='product-section'>
          <Gallery images={images} />
          <div className='product-info'>
            <h2>{name}</h2>
            <Stars numbers={stars} />
            <p className='price'>${price / 1000}</p>
            <p>{description}</p>
            <p>Available: {stock > 0 ? 'In Stock' : 'Out Of Stock'}</p>
            <p>SKU: {sku}</p>
            <p className='brand'>Brand: {company}</p>
            <div className='underline'></div>
            {stock <= 0 ? (
              <Link to='/products' className='btn'>
                More Products
              </Link>
            ) : (
              <AddToCart product={product} />
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding-top: 4rem;
  min-height: calc(100vh - 18rem);
  place-items: center;
  gap: 1rem;
  .product-section {
    display: grid;
    margin-top: 1rem;
    gap: 1.5rem;
  }
  .underline {
    width: 180px;
    height: 0.1rem;
    background: var(--color1);
    margin-bottom: 1rem;
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  .quantity p {
    margin: 0;
  }
  .select {
    width: 100px;
    background: var(--color5);
    border: none;
    padding: 0.375rem 0.5rem;
  }
  .brand {
    text-transform: capitalize;
  }
  @media screen and (min-width: 992px) {
    .product-section {
      grid-template-columns: 1fr 1fr;
    }
  }
`
export default SingleProduct
