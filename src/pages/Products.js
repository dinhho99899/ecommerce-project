import React from 'react'
import Breadcums from '../components/Breadcums'
import styled from 'styled-components'
import { useFiltersContext } from '../context/FiltersContext'
import Product from '../components/Product'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../context/ProductsContext'
const Products = () => {
  const { isError } = useProductsContext()
  const {
    filtered_products: products,
    all_products,
    isLoading,
    handleSort,
    handleFilters,
    clearFilters,
    filters: { text, category, color, price, min_price, max_price, shipping },
  } = useFiltersContext()
  const { categories, companies, colors } = all_products.reduce(
    (total, item) => {
      total.categories.push(item.category)

      total.companies.push(item.company)
      total.colors.push(item.colors)
      return total
    },
    { categories: ['all'], companies: ['all'], colors: [] }
  )
  const x = colors.flat()
  const cate = [...new Set(categories)]
  const comp = [...new Set(companies)]
  const col = [...new Set(x)]

  if (isLoading)
    return (
      <Wrapper>
        <h2>Loading...</h2>
      </Wrapper>
    )
  if (isError)
    return (
      <Wrapper>
        <h2>Error...</h2>
      </Wrapper>
    )
  return (
    <Wrapper>
      <Breadcums title='Shop' />
      <div className='section section-center '>
        <Link to='/' className='btn'>
          Back to Home Page
        </Link>
        <div className='products-center'>
          <div className='filter-container'>
            <input
              type='text'
              name='text'
              value={text}
              placeholder='Search'
              className='search-input'
              onChange={handleFilters}
            ></input>
            <div className='form-control'>
              <h5>Category: </h5>
              <div>
                {cate.map((c, index) => {
                  return (
                    <button
                      key={index}
                      className={`${
                        c === category ? 'cate-btn active' : 'cate-btn'
                      }`}
                      type='button'
                      name='category'
                      onClick={handleFilters}
                    >
                      {c}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className='form-control'>
              <h5>Company: </h5>
              <select
                className='select'
                id='sort'
                name='company'
                onChange={handleFilters}
              >
                {comp.map((c, index) => {
                  return (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className='form-control'>
              <h5>Color: </h5>
              <span className='colors-input'>
                <button
                  className={`${
                    color === 'all' ? 'color all-active' : 'color'
                  }`}
                  name='color'
                  data-color='all'
                  onClick={handleFilters}
                >
                  All
                </button>
                {col.map((c, index) => {
                  return (
                    <button
                      key={index}
                      className={`${
                        color === c ? 'color color-active' : 'color'
                      }`}
                      name='color'
                      onClick={handleFilters}
                      data-color={c}
                      style={{ background: c }}
                    ></button>
                  )
                })}
              </span>
            </div>
            <div className='form-control'>
              <h5>Price:{price} </h5>
              <input
                type='range'
                name='price'
                onChange={handleFilters}
                min={min_price}
                max={max_price}
                value={price}
              ></input>
            </div>
            <div className='form-control'>
              <h5>Free Shipping: </h5>
              <input
                type='checkbox'
                name='shipping'
                checked={shipping}
                onChange={handleFilters}
              ></input>
            </div>
            <div className='form-control'>
              <button className='btn' onClick={clearFilters}>
                clear filters
              </button>
            </div>
          </div>
          <div className='products-container'>
            <div className='header-filter'>
              <p>{products?.length} products found</p>
              <hr />
              <div>
                <label htmlFor='sort'>Sort: </label>
                <select className='select' id='sort' onChange={handleSort}>
                  <option value='price-lowest'>Price(Lowest)</option>
                  <option value='price-highest'>Price(Highest)</option>
                  <option value='name-a'>Name(A-Z)</option>
                  <option value='name-z'>Price(Z-A)</option>
                </select>
              </div>
            </div>
            <div className='products-section'>
              {products.map((item) => {
                return <Product {...item} key={item.id} />
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding-top: 4rem;
  min-height: 100vh;
  .filter-container {
    padding-top: 4rem;
  }
  .products-section {
    padding-top: 2rem;
  }
  .products-center {
    display: grid;
  }
  .form-control {
    padding-top: 1rem;
  }
  .form-control h5 {
    text-transform: capitalize;
    letter-spacing: 1.6px;
    font-size: 0.875rem;
    font-weight: bold;
    padding-bottom: 0.5rem;
  }
  .cate-btn {
    background: transparent;
    text-transform: capitalize;
    color: var(--grey5);
    border: none;
    font-size: 0.875rem;
    font-weight: 100;
    padding: 0.2rem 0.5rem 0.2rem 0;
    letter-spacing: 1.6px;
    display: block;
    cursor: pointer;
  }
  .active {
    border-bottom: 1px solid var(--color1);
  }
  select {
    margin-top: 0.5rem;
    text-transform: capitalize;
  }
  .colors-input {
    display: flex;
    align-items: center;
  }
  .color {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    margin-left: 0.2rem;
    opacity: 0.5;
    cursor: pointer;
  }
  .color-active {
    opacity: 1;
  }
  .all-active {
    opacity: 1;
  }
  .header-filter {
    display: grid;
    justify-content: flex-end;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    gap: 1rem;
  }
  p,
  span {
    margin: 0;
    padding: 0;
    text-transform: capitalize;
  }

  @media screen and (min-width: 576px) {
    .products-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }
  }
  @media screen and (min-width: 992px) {
    .products-center {
      grid-template-columns: 200px 1fr;
    }
    .products-section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.5rem;
    }
  }
`
export default Products
