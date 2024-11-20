import React from 'react';
import Footer from '../Components/Footer';
import SellerSideBar from './SellerSideBar';

export default function page() {
  return (
    <div>
      <div className="app-container">
        <SellerSideBar></SellerSideBar>
        <div className="page-container has-sidebar has-sidebar-panel">
          <div className="page-content-wrapper with-sidebar-content-wrapper">
            <div
              data-v-42f43776=""
              className="page is-list-page app-main-panel"
            >
              <div data-v-42f43776="" className="product">
                <div
                  data-v-41a7e1af=""
                  data-v-42f43776=""
                  className="prodict-list"
                >
                  <div
                    data-v-598f8d5a=""
                    data-v-41a7e1af=""
                    className="tips-card news-banner"
                  >
                    <div data-v-598f8d5a="" className="tip-wrap">
                      <div data-v-598f8d5a="" className="tips-img-wrap">
                        <img
                          data-v-598f8d5a=""
                          src="data:image/png;base64,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"
                          alt=""
                        ></img>
                      </div>
                      <div data-v-598f8d5a="" className="tips-mian">
                        <div data-v-598f8d5a="" className="tips-main-title">
                          {' '}
                          Mass Convert Product From Other Platform{' '}
                        </div>
                        <span data-v-598f8d5a="" className="tips-mian-content">
                          <span className="keyword-highlight"></span>
                          Shopee can help sellers mass convert products from
                          other platforms. You can submit a convert request and
                          Seller can upload converter files in Batch tools &gt;
                          Mass Upload.
                        </span>
                        <button
                          data-v-598f8d5a=""
                          type="button"
                          className="shopee-button shopee-button--link shopee-button--normal"
                        >
                          <span> Learn More </span>
                        </button>
                      </div>
                    </div>
                    <div data-v-598f8d5a="" className="tips-action">
                      <button
                        data-v-598f8d5a=""
                        type="button"
                        className="shopee-button shopee-button--primary shopee-button--normal shopee-button--outline"
                      >
                        <span> Convert Now </span>
                      </button>
                    </div>
                  </div>
                  <div
                    data-v-4d24e1ee=""
                    data-v-41a7e1af=""
                    id="product-filter-card"
                    className="product-filter-card"
                  >
                    <form
                      data-v-4d24e1ee=""
                      autoComplete="off"
                      className="shopee-form filter-form shopee-form--label-right"
                    >
                      <div data-v-4d24e1ee="" className="filter-form-box">
                        <div data-v-4d24e1ee="" className="filter-col-left">
                          <div
                            data-v-4d24e1ee=""
                            className="product shopee-form-item"
                          >
                            <label className="shopee-form-item__label empty"></label>
                            <div className="shopee-form-item__control">
                              <div className="shopee-form-item__content">
                                <div
                                  data-v-4d24e1ee=""
                                  className="shopee-input-group"
                                >
                                  <span
                                    className="shopee-input-group__prepend"
                                    style={{ width: '152px' }}
                                  >
                                    <div
                                      data-v-4d24e1ee=""
                                      className="shopee-select"
                                    >
                                      <div
                                        tabIndex={0}
                                        className="shopee-selector shopee-selector--normal"
                                      >
                                        <div className="shopee-selector__inner line-clamp--1">
                                          Product Name
                                        </div>
                                        <div className="shopee-selector__suffix">
                                          <i className="shopee-selector__suffix-icon shopee-icon">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                            >
                                              <path d="M8,9.18933983 L4.03033009,5.21966991 C3.73743687,4.9267767 3.26256313,4.9267767 2.96966991,5.21966991 C2.6767767,5.51256313 2.6767767,5.98743687 2.96966991,6.28033009 L7.46966991,10.7803301 C7.76256313,11.0732233 8.23743687,11.0732233 8.53033009,10.7803301 L13.0303301,6.28033009 C13.3232233,5.98743687 13.3232233,5.51256313 13.0303301,5.21966991 C12.7374369,4.9267767 12.2625631,4.9267767 11.9696699,5.21966991 L8,9.18933983 Z"></path>
                                            </svg>
                                          </i>
                                        </div>
                                      </div>
                                      <div
                                        className="shopee-popper"
                                        style={{ display: 'none' }}
                                      >
                                        <div
                                          className="shopee-select__menu"
                                          style={{
                                            maxWidth: '440px',
                                            maxHeight: '218px',
                                          }}
                                        >
                                          <div className="shopee-scrollbar">
                                            <div className="shopee-scrollbar__wrapper">
                                              <div className="shopee-scrollbar__bar vertical">
                                                <div
                                                  className="shopee-scrollbar__thumb"
                                                  style={{
                                                    top: '0px',
                                                    height: '0px',
                                                  }}
                                                ></div>
                                              </div>
                                              <div
                                                className="shopee-scrollbar__content"
                                                style={{ position: 'relative' }}
                                              >
                                                <div className="shopee-select__options">
                                                  <div
                                                    data-v-4d24e1ee=""
                                                    className="shopee-option selected"
                                                  >
                                                    {' '}
                                                    Product Name{' '}
                                                  </div>
                                                  <div
                                                    data-v-4d24e1ee=""
                                                    className="shopee-option"
                                                  >
                                                    {' '}
                                                    Parent SKU{' '}
                                                  </div>
                                                  <div
                                                    data-v-4d24e1ee=""
                                                    className="shopee-option"
                                                  >
                                                    {' '}
                                                    SKU{' '}
                                                  </div>
                                                  <div
                                                    data-v-4d24e1ee=""
                                                    className="shopee-option"
                                                  >
                                                    {' '}
                                                    Variations{' '}
                                                  </div>
                                                  <div
                                                    data-v-4d24e1ee=""
                                                    className="shopee-option"
                                                  >
                                                    {' '}
                                                    Item ID{' '}
                                                  </div>
                                                </div>
                                                <div className="resize-triggers">
                                                  <div className="expand-trigger">
                                                    <div
                                                      style={{
                                                        width: '1px',
                                                        height: '1px',
                                                      }}
                                                    ></div>
                                                  </div>
                                                  <div className="contract-trigger"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <p
                                          className="shopee-select__filter-empty"
                                          style={{ display: 'none' }}
                                        ></p>
                                      </div>
                                    </div>
                                  </span>
                                  <span className="shopee-input-group__append">
                                    <div
                                      data-v-de1d9c42=""
                                      data-v-4d24e1ee=""
                                      className="hints-input"
                                    >
                                      <div
                                        data-v-de1d9c42=""
                                        className="input-wrapper"
                                      >
                                        <div
                                          data-v-de1d9c42=""
                                          className="shopee-input original-input"
                                        >
                                          <div className="shopee-input__inner shopee-input__inner--normal">
                                            <input
                                              type="text"
                                              placeholder="Please input at least first 2 characters of word"
                                              max="Infinity"
                                              min="-Infinity"
                                              className="shopee-input__input"
                                            ></input>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-4d24e1ee=""
                            className="stock shopee-form-item"
                          >
                            <label
                              htmlFor="stock"
                              className="shopee-form-item__label"
                            >
                              <span
                                data-v-4d24e1ee=""
                                style={{ marginRight: '16px' }}
                              >
                                Stock
                              </span>
                            </label>
                            <div className="shopee-form-item__control">
                              <div className="shopee-form-item__content">
                                <div
                                  data-v-4d24e1ee=""
                                  className="shopee-form-item__content"
                                >
                                  <div
                                    data-v-4d24e1ee=""
                                    className="shopee-input shopee-number-input shopee-number-input--normal shopee-number-input--no-suffix"
                                  >
                                    <div className="shopee-input__inner shopee-input__inner--normal">
                                      <input
                                        type="text"
                                        placeholder="Min"
                                        max="Infinity"
                                        min="-Infinity"
                                        className="shopee-input__input"
                                      ></input>
                                      <div className="shopee-input__suffix">
                                        <div className="shopee-number-input__controls">
                                          <div className="shopee-number-input__control up">
                                            <i className="shopee-icon">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                              >
                                                <path
                                                  fill-rule="evenodd"
                                                  d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                                                ></path>
                                              </svg>
                                            </i>
                                          </div>
                                          <div className="shopee-number-input__control down">
                                            <i className="shopee-icon">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                              >
                                                <path
                                                  fill-rule="evenodd"
                                                  d="M7.57253679,9.34925324 L5.1530248,7.08096075 C4.90120463,6.84487934 4.88844585,6.44935696 5.12452726,6.19753679 C5.24268191,6.07150517 5.40773242,6 5.58048801,6 L10.419512,6 C10.76469,6 11.044512,6.27982203 11.044512,6.625 C11.044512,6.79775558 10.9730068,6.9628061 10.8469752,7.08096075 L8.42746321,9.34925324 C8.18705183,9.57463891 7.81294817,9.57463891 7.57253679,9.34925324 Z"
                                                ></path>
                                              </svg>
                                            </i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <span
                                    data-v-4d24e1ee=""
                                    className="interim-line"
                                  ></span>
                                  <div
                                    data-v-4d24e1ee=""
                                    className="shopee-input shopee-number-input shopee-number-input--normal shopee-number-input--no-suffix"
                                  >
                                    <div className="shopee-input__inner shopee-input__inner--normal">
                                      <input
                                        type="text"
                                        placeholder="Max"
                                        max="Infinity"
                                        min="-Infinity"
                                        className="shopee-input__input"
                                      ></input>
                                      <div className="shopee-input__suffix">
                                        <div className="shopee-number-input__controls">
                                          <div className="shopee-number-input__control up">
                                            <i className="shopee-icon">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                              >
                                                <path
                                                  fill-rule="evenodd"
                                                  d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                                                ></path>
                                              </svg>
                                            </i>
                                          </div>
                                          <div className="shopee-number-input__control down">
                                            <i className="shopee-icon">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                              >
                                                <path
                                                  fill-rule="evenodd"
                                                  d="M7.57253679,9.34925324 L5.1530248,7.08096075 C4.90120463,6.84487934 4.88844585,6.44935696 5.12452726,6.19753679 C5.24268191,6.07150517 5.40773242,6 5.58048801,6 L10.419512,6 C10.76469,6 11.044512,6.27982203 11.044512,6.625 C11.044512,6.79775558 10.9730068,6.9628061 10.8469752,7.08096075 L8.42746321,9.34925324 C8.18705183,9.57463891 7.81294817,9.57463891 7.57253679,9.34925324 Z"
                                                ></path>
                                              </svg>
                                            </i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-v-4d24e1ee="" className="filter-col-right">
                          <div data-v-4d24e1ee="" className="shopee-form-item">
                            <label className="shopee-form-item__label">
                              {' '}
                              Category
                            </label>
                            <div className="shopee-form-item__control">
                              <div className="shopee-form-item__content">
                                <div
                                  data-v-4d24e1ee=""
                                  className="category-input-wrapper"
                                >
                                  <div
                                    data-v-1190c12e=""
                                    data-v-3ebef222=""
                                    data-v-4d24e1ee=""
                                    className="popover-wrap attribute-text"
                                    edit-text="Edit"
                                  >
                                    <div
                                      data-v-3ebef222=""
                                      data-v-1190c12e=""
                                      className="category-input"
                                    >
                                      <div
                                        data-v-3ebef222=""
                                        data-v-1190c12e=""
                                        className="category-name hover-pointer has-btn"
                                      >
                                        <span
                                          data-v-3ebef222=""
                                          data-v-1190c12e=""
                                          className="cat-selected-wrapper"
                                        >
                                          <span
                                            data-v-3ebef222=""
                                            data-v-1190c12e=""
                                            className="placeholder"
                                          >
                                            Select
                                          </span>
                                        </span>
                                      </div>
                                      <button
                                        data-v-3ebef222=""
                                        type="button"
                                        className="edit-btn shopee-button shopee-button--link shopee-button--normal"
                                        data-v-1190c12e=""
                                      >
                                        <i className="shopee-icon">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M13.7698326,4.53553391 L11.6485122,2.41421356 L9.52719188,4.53553391 L11.6485122,6.65685425 L13.7698326,4.53553391 Z M10.9414054,7.36396103 L8.8200851,5.24264069 L2.71213203,11.3505938 L2.5,13.6840461 L4.83345238,13.4719141 L10.9414054,7.36396103 Z M12.355619,1.70710678 L14.4769394,3.82842712 C14.8674636,4.21895142 14.8674636,4.8521164 14.4769394,5.24264069 L5.54055916,14.1790209 C5.37514107,14.344439 5.1569639,14.4466277 4.92398812,14.4678073 L2.59053575,14.6799393 C2.04051912,14.7299408 1.55410831,14.3245985 1.50410679,13.7745819 C1.49863107,13.7143489 1.49863107,13.6537434 1.50410679,13.5935104 L1.71623883,11.260058 C1.73741844,11.0270822 1.83960716,10.8089051 2.00502525,10.643487 L10.9414054,1.70710678 C11.3319297,1.31658249 11.9650947,1.31658249 12.355619,1.70710678 Z"
                                            ></path>
                                          </svg>
                                        </i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-v-4d24e1ee=""
                            className="range-input shopee-form-item"
                          >
                            <label
                              htmlFor="sold"
                              className="shopee-form-item__label"
                            >
                              {' '}
                              Sales
                            </label>
                            <div className="shopee-form-item__control">
                              <div className="shopee-form-item__content">
                                <div
                                  data-v-4d24e1ee=""
                                  className="shopee-input shopee-number-input shopee-number-input--normal shopee-number-input--no-suffix"
                                >
                                  <div className="shopee-input__inner shopee-input__inner--normal">
                                    <input
                                      type="text"
                                      placeholder="Min"
                                      max="Infinity"
                                      min="-Infinity"
                                      className="shopee-input__input"
                                    ></input>
                                    <div className="shopee-input__suffix">
                                      <div className="shopee-number-input__controls">
                                        <div className="shopee-number-input__control up">
                                          <i className="shopee-icon">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                                              ></path>
                                            </svg>
                                          </i>
                                        </div>
                                        <div className="shopee-number-input__control down">
                                          <i className="shopee-icon">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                d="M7.57253679,9.34925324 L5.1530248,7.08096075 C4.90120463,6.84487934 4.88844585,6.44935696 5.12452726,6.19753679 C5.24268191,6.07150517 5.40773242,6 5.58048801,6 L10.419512,6 C10.76469,6 11.044512,6.27982203 11.044512,6.625 C11.044512,6.79775558 10.9730068,6.9628061 10.8469752,7.08096075 L8.42746321,9.34925324 C8.18705183,9.57463891 7.81294817,9.57463891 7.57253679,9.34925324 Z"
                                              ></path>
                                            </svg>
                                          </i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <span
                                  data-v-4d24e1ee=""
                                  className="connector"
                                ></span>
                                <div
                                  data-v-4d24e1ee=""
                                  className="shopee-input shopee-number-input shopee-number-input--normal shopee-number-input--no-suffix"
                                >
                                  <div className="shopee-input__inner shopee-input__inner--normal">
                                    <input
                                      type="text"
                                      placeholder="Max"
                                      max="Infinity"
                                      min="-Infinity"
                                      className="shopee-input__input"
                                    ></input>
                                    <div className="shopee-input__suffix">
                                      <div className="shopee-number-input__controls">
                                        <div className="shopee-number-input__control up">
                                          <i className="shopee-icon">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                                              ></path>
                                            </svg>
                                          </i>
                                        </div>
                                        <div className="shopee-number-input__control down">
                                          <i className="shopee-icon">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 16 16"
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                d="M7.57253679,9.34925324 L5.1530248,7.08096075 C4.90120463,6.84487934 4.88844585,6.44935696 5.12452726,6.19753679 C5.24268191,6.07150517 5.40773242,6 5.58048801,6 L10.419512,6 C10.76469,6 11.044512,6.27982203 11.044512,6.625 C11.044512,6.79775558 10.9730068,6.9628061 10.8469752,7.08096075 L8.42746321,9.34925324 C8.18705183,9.57463891 7.81294817,9.57463891 7.57253679,9.34925324 Z"
                                              ></path>
                                            </svg>
                                          </i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-v-4d24e1ee="" className="actions">
                        <button
                          data-v-4d24e1ee=""
                          type="button"
                          className="shopee-button shopee-button--primary shopee-button--normal"
                        >
                          <span> Search </span>
                        </button>
                        <button
                          data-v-4d24e1ee=""
                          type="button"
                          className="shopee-button shopee-button--normal"
                          style={{ marginLeft: '16px' }}
                        >
                          <span> Reset </span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div data-v-41a7e1af="" className="product-list-main">
                    <div
                      data-v-9ef0ec9c=""
                      data-v-41a7e1af=""
                      className="shopee-fixed-top-card"
                    >
                      <div
                        data-v-9ef0ec9c=""
                        className="fixed-container"
                        style={{ top: '56px', zIndex: '1000' }}
                      >
                        <div
                          data-v-41a7e1af=""
                          data-v-9ef0ec9c=""
                          className="portal-panel"
                        >
                          <div
                            data-v-41a7e1af=""
                            className="tabs shopee-tabs shopee-tabs-line shopee-tabs-normal shopee-tabs-top"
                            data-v-9ef0ec9c=""
                          >
                            <div className="shopee-tabs__nav">
                              <div className="shopee-tabs__nav-warp">
                                <div
                                  className="shopee-tabs__nav-tabs"
                                  style={{ transform: 'translateX(0px)' }}
                                >
                                  <div
                                    className="shopee-tabs__nav-tab active"
                                    style={{ whiteSpace: 'normal' }}
                                  >
                                    <div
                                      data-v-41a7e1af=""
                                      className="tabs__tab"
                                    >
                                      All
                                    </div>
                                  </div>
                                  <div
                                    className="shopee-tabs__nav-tab"
                                    style={{ whiteSpace: 'normal' }}
                                  >
                                    <div
                                      data-v-41a7e1af=""
                                      className="tabs__tab"
                                    >
                                      Live
                                    </div>
                                  </div>
                                  <div
                                    className="shopee-tabs__nav-tab"
                                    style={{ whiteSpace: 'normal' }}
                                  >
                                    <div
                                      data-v-41a7e1af=""
                                      className="tabs__tab"
                                    >
                                      Sold out
                                      <span className="tab-badge">0</span>
                                    </div>
                                  </div>
                                  <div
                                    className="shopee-tabs__nav-tab"
                                    style={{ whiteSpace: 'normal' }}
                                  >
                                    <div
                                      data-v-41a7e1af=""
                                      className="tabs__tab"
                                    >
                                      Reviewing
                                      <span className="tab-badge">0</span>
                                    </div>
                                  </div>
                                  <div
                                    className="shopee-tabs__nav-tab"
                                    style={{ whiteSpace: 'normal' }}
                                  >
                                    <div
                                      data-v-41a7e1af=""
                                      className="tabs__tab"
                                    >
                                      Violation
                                      <span className="tab-badge">0</span>
                                    </div>
                                  </div>
                                  <div
                                    className="shopee-tabs__nav-tab"
                                    style={{ whiteSpace: 'normal' }}
                                  >
                                    <div
                                      data-v-41a7e1af=""
                                      className="tabs__tab"
                                    >
                                      Delisted
                                      <span className="tab-badge">0</span>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="shopee-tabs__ink-bar"
                                  style={{
                                    width: '49px',
                                    transform: 'translateX(0px)',
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="shopee-tabs__content">
                              <div
                                data-v-41a7e1af=""
                                className="shopee-tabs-tabpane"
                              ></div>
                              <div
                                data-v-41a7e1af=""
                                className="shopee-tabs-tabpane"
                                style={{ display: 'none' }}
                              ></div>
                              <div
                                data-v-41a7e1af=""
                                className="shopee-tabs-tabpane"
                                style={{ display: 'none' }}
                              ></div>
                              <div
                                data-v-41a7e1af=""
                                className="shopee-tabs-tabpane"
                                style={{ display: 'none' }}
                              ></div>
                              <div
                                data-v-41a7e1af=""
                                className="shopee-tabs-tabpane"
                                style={{ display: 'none' }}
                              ></div>
                              <div
                                data-v-41a7e1af=""
                                className="shopee-tabs-tabpane"
                                style={{ display: 'none' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-v-9ef0ec9c=""
                        className="fixed-placeholder"
                        style={{ height: '54px', display: 'none' }}
                      ></div>
                    </div>
                    <div data-v-41a7e1af="" className="list-panel">
                      <div data-v-41a7e1af="" className="list-all">
                        <div
                          data-v-3c32dae2=""
                          className="prodcut-list-header product-list-section"
                        >
                          <div
                            data-v-3c32dae2=""
                            className="grid"
                            style={{ alignItems: 'flex-end' }}
                          >
                            <div data-v-3c32dae2="" className="grid-left">
                              <div data-v-3c32dae2="" className="title-box">
                                <div
                                  data-v-3c32dae2=""
                                  className="page-title-box"
                                >
                                  <div
                                    data-v-3c32dae2=""
                                    className="page-title"
                                  >
                                    {' '}
                                    0 product{' '}
                                  </div>
                                  <div data-v-3c32dae2="">
                                    <div
                                      data-v-3c32dae2=""
                                      className="shopee-popover shopee-popover--light"
                                    >
                                      <div className="shopee-popover__ref">
                                        <div
                                          data-v-3c32dae2=""
                                          className="percent-bar-wrapper"
                                        >
                                          <div
                                            data-v-3c32dae2=""
                                            className="percent-bar"
                                          >
                                            <div
                                              data-v-3c32dae2=""
                                              className="percent-bar-progress"
                                              style={{ width: '0%' }}
                                            ></div>
                                          </div>
                                          <div
                                            data-v-3c32dae2=""
                                            className="percent-des"
                                          >
                                            {' '}
                                            Upload 1000 more products{' '}
                                            <i
                                              data-v-3c32dae2=""
                                              className="shopee-icon"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 16 16"
                                              >
                                                <path
                                                  fill-rule="evenodd"
                                                  d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"
                                                ></path>
                                              </svg>
                                            </i>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="shopee-popper shopee-popover__popper shopee-popover__popper--light with-arrow limit-detail"
                                        style={{
                                          display: 'none',
                                          maxWidth: '320px',
                                          padding: '12px 8px',
                                        }}
                                      >
                                        <div className="shopee-popover__content">
                                          <div data-v-3c32dae2="">
                                            <div
                                              data-v-3c32dae2=""
                                              className="detail-header"
                                            >
                                              {' '}
                                              Listing Published Limit{' '}
                                            </div>
                                            <div
                                              data-v-3c32dae2=""
                                              className="detail-item"
                                            >
                                              <span
                                                data-v-3c32dae2=""
                                                className="detail-item-label"
                                              >
                                                Already Published
                                              </span>
                                              0{' '}
                                            </div>
                                            <div
                                              data-v-3c32dae2=""
                                              className="detail-item"
                                            >
                                              <span
                                                data-v-3c32dae2=""
                                                className="detail-item-label"
                                              >
                                                More can be published
                                              </span>{' '}
                                              1000{' '}
                                            </div>
                                            <div
                                              data-v-3c32dae2=""
                                              className="detail-item"
                                            >
                                              <span
                                                data-v-3c32dae2=""
                                                className="detail-item-label"
                                              >
                                                Listing Published Limit
                                              </span>{' '}
                                              1000{' '}
                                            </div>
                                            <button
                                              data-v-3c32dae2=""
                                              type="button"
                                              className="detail-link shopee-button shopee-button--link shopee-button--normal"
                                            >
                                              <span>
                                                {' '}
                                                Check Details of My shop Listing
                                                Published Limit{' '}
                                              </span>
                                              <i className="shopee-icon">
                                                <svg viewBox="0 0 32 32">
                                                  <path d="m23.5 15.5-12-11c-.6-.6-1.5-.6-2.1 0-.2.2-.4.6-.4 1s.2.8.4 1l10.9 10-10.9 10c-.6.6-.6 1.5 0 2.1.3.3.7.4 1 .4.4 0 .7-.1 1-.4l11.9-10.9.1-.1c.3-.3.4-.7.4-1.1.1-.4 0-.8-.3-1z"></path>
                                                </svg>
                                              </i>
                                            </button>
                                            <div
                                              data-v-3c32dae2=""
                                              className="detail-desc"
                                            >
                                              {' '}
                                              Already Published Products = All
                                              Products - Delisted Products -
                                              Shopee Deleted Products{' '}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              data-v-3c32dae2=""
                              className="grid-right right"
                            >
                              <div data-v-3c32dae2="" className="bi-action">
                                <button
                                  data-v-3c32dae2=""
                                  type="button"
                                  className="shopee-button shopee-button--link shopee-button--large"
                                >
                                  <span> Optimise your listing </span>
                                </button>
                              </div>
                              <button
                                data-v-3c32dae2=""
                                type="button"
                                className="add-action shopee-button shopee-button--primary shopee-button--large"
                              >
                                <i className="shopee-icon">
                                  <svg viewBox="0 0 32 32">
                                    <path d="M17.5 2.5h-3v12h-12v3h12v12h3v-12h12v-3h-12v-12z"></path>
                                  </svg>
                                </i>
                                <span> Add a New Product </span>
                              </button>
                              <div
                                data-v-3c32dae2=""
                                className="batch-action shopee-dropdown"
                              >
                                <button
                                  data-v-3c32dae2=""
                                  type="button"
                                  className="batch-action-btn shopee-button shopee-button--large"
                                >
                                  <span> Batch Tools </span>
                                  <i className="shopee-icon">
                                    <svg viewBox="0 0 32 32">
                                      <path d="m28.2 11.1-10.9 12s0 .1-.1.2c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3 0 0 0-.1-.1-.2l-10.9-12c-.4-.4-.4-1 0-1.3.4-.4 1-.4 1.3 0l10.4 11.3L26.9 9.8c.4-.4 1-.4 1.3 0 .4.4.4 1 0 1.3z"></path>
                                    </svg>
                                  </i>
                                </button>
                                <div
                                  data-v-3c32dae2=""
                                  className="shopee-popper"
                                  style={{ display: 'none' }}
                                >
                                  <ul
                                    className="shopee-dropdown-menu"
                                    style={{ maxWidth: '440px' }}
                                  >
                                    <li
                                      data-v-3c32dae2=""
                                      className="mass-update-item shopee-dropdown-item"
                                    >
                                      {' '}
                                      Mass Upload{' '}
                                    </li>
                                    <li
                                      data-v-3c32dae2=""
                                      className="mass-update-item shopee-dropdown-item"
                                    >
                                      {' '}
                                      Mass Update{' '}
                                    </li>
                                    <li
                                      data-v-3c32dae2=""
                                      className="mass-update-item shopee-dropdown-item"
                                    >
                                      {' '}
                                      Attributes Tool{' '}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div data-v-3c32dae2="" className="view-modes">
                                <div
                                  data-v-3c32dae2=""
                                  className="view-model-item view-radio active"
                                >
                                  <i data-v-3c32dae2="" className="list-view">
                                    <svg
                                      data-name="图层 1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 1024 1024"
                                    >
                                      <g data-name="Layer 1">
                                        <path d="M864 256H352a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64zm0 288H352a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64zm0 288H352a32 32 0 0 1 0-64h512a32 32 0 0 1 0 64z"></path>
                                        <circle
                                          cx="176"
                                          cy="224"
                                          r="48"
                                        ></circle>
                                        <circle
                                          cx="176"
                                          cy="800"
                                          r="48"
                                        ></circle>
                                        <circle
                                          cx="176"
                                          cy="512"
                                          r="48"
                                        ></circle>
                                      </g>
                                    </svg>
                                  </i>
                                </div>
                                <div
                                  data-v-3c32dae2=""
                                  className="view-model-item view-radio"
                                >
                                  <i data-v-3c32dae2="" className="grid-view">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 32 32"
                                      enableBackground="new 0 0 32 32"
                                      xmlSpace="preserve"
                                    >
                                      <path d="M27 15h-8c-1.1 0-2-1.2-2-2.3V5c0-1.1.9-2 2-2h8.1c1 0 1.9.9 1.9 1.9V13c0 1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1V6zm-14 9H5c-1.1 0-2-1.2-2-2.3V5c0-1.1.9-2 2-2h8.1c1 0 1.9.9 1.9 1.9V13c0 1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1V6zm14 23h-8c-1.1 0-2-1.2-2-2.3V19c0-1.1.9-2 2-2h8.1c1.1 0 1.9.9 1.9 1.9V27c0 1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1v-6zm-14 9H5c-1.1 0-2-1.2-2-2.3V19c0-1.1.9-2 2-2h8.1c1.1 0 1.9.9 1.9 1.9V27c0 1.1-.9 2-2 2zm0-9c0-.6-.4-1-1-1H6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6.1c.6 0 .9-.4.9-1v-6z"></path>
                                    </svg>
                                  </i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-1f307750=""
                          className="boost-ads-banner-wrapper"
                        >
                          <div
                            data-v-1f307750=""
                            className="remote-component"
                          ></div>
                        </div>
                        <div className="product-list-section product-and-pagination-wrap list">
                          <div
                            data-v-439a30e0=""
                            className="product-list-container"
                          >
                            <div
                              data-v-439a30e0=""
                              className="shopee-table product-list-view mpsku-list shopee-table--empty-data"
                            >
                              <div className="hidden-columns">
                                <div data-v-439a30e0=""></div>
                                <div data-v-439a30e0=""></div>
                                <div data-v-439a30e0=""></div>
                                <div data-v-439a30e0=""></div>
                                <div data-v-439a30e0=""></div>
                              </div>
                              <div className="shopee-table__header-container">
                                <div className="shopee-table__main-header">
                                  <table
                                    cellSpacing={0}
                                    cellPadding={0}
                                    border={0}
                                    className="shopee-table__header"
                                    style={{ width: '1054px' }}
                                  ></table>
                                  <colgroup>
                                    <col width="40"></col>
                                    <col width="232"></col>
                                    <col width="606"></col>
                                    <col width="96"></col>
                                    <col width="80"></col>
                                  </colgroup>
                                  <thead>
                                    <tr>
                                      <th colSpan={1} rowSpan={1} className="">
                                        <div className="shopee-table__cell first-cell">
                                          <span className="shopee-table__cell-label">
                                            <div
                                              data-v-1c1b77af=""
                                              data-v-439a30e0=""
                                              className="list-header-item"
                                            >
                                              <div
                                                data-v-1c1b77af=""
                                                className="list-header-item-content"
                                              >
                                                <span
                                                  data-v-1c1b77af=""
                                                  className="list-header-item-label"
                                                >
                                                  <label
                                                    data-v-439a30e0=""
                                                    className="shopee-checkbox product-checkbox product-list-item__td"
                                                    data-v-1c1b77af=""
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      className="shopee-checkbox__input"
                                                      value=""
                                                    ></input>
                                                    <span className="shopee-checkbox__indicator">
                                                      <i className="shopee-icon">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 16 16"
                                                        >
                                                          <path d="M4.03033009,7.46966991 C3.73743687,7.1767767 3.26256313,7.1767767 2.96966991,7.46966991 C2.6767767,7.76256313 2.6767767,8.23743687 2.96966991,8.53033009 L6.32804531,11.8887055 C6.62093853,12.1815987 7.09581226,12.1815987 7.38870548,11.8887055 L13.2506629,6.02674809 C13.5435561,5.73385487 13.5435561,5.25898114 13.2506629,4.96608792 C12.9577697,4.6731947 12.4828959,4.6731947 12.1900027,4.96608792 L6.8583754,10.2977152 L4.03033009,7.46966991 Z"></path>
                                                        </svg>
                                                      </i>
                                                    </span>
                                                  </label>
                                                </span>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </th>
                                      <th colSpan={1} rowSpan={1} className="">
                                        <div className="shopee-table__cell">
                                          <span className="shopee-table__cell-label">
                                            <div
                                              data-v-1c1b77af=""
                                              data-v-439a30e0=""
                                              className="list-header-item product-main"
                                            >
                                              <div
                                                data-v-1c1b77af=""
                                                className="list-header-item-content"
                                              >
                                                <span
                                                  data-v-1c1b77af=""
                                                  className="list-header-item-label"
                                                >
                                                  Product Name
                                                </span>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </th>
                                      <th colSpan={1} rowSpan={1} className="">
                                        <div className="shopee-table__cell">
                                          <span className="shopee-table__cell-label">
                                            <div
                                              data-v-439a30e0=""
                                              className="shopee-order-group product-variation product-variation-header"
                                            >
                                              <div
                                                data-v-1c1b77af=""
                                                data-v-439a30e0=""
                                                className="list-header-item product-variation__sku"
                                                style={{
                                                  width: '56px',
                                                  minWidth: '56px',
                                                }}
                                              >
                                                <div
                                                  data-v-1c1b77af=""
                                                  className="list-header-item-content"
                                                >
                                                  <span
                                                    data-v-1c1b77af=""
                                                    className="list-header-item-label"
                                                  >
                                                    SKU
                                                  </span>
                                                </div>
                                              </div>
                                              <div
                                                data-v-1c1b77af=""
                                                data-v-439a30e0=""
                                                className="list-header-item product-variation__name"
                                                style={{
                                                  width: '96px',
                                                  minWidth: '96px',
                                                }}
                                              >
                                                <div
                                                  data-v-1c1b77af=""
                                                  className="list-header-item-content"
                                                >
                                                  <span
                                                    data-v-1c1b77af=""
                                                    className="list-header-item-label"
                                                  >
                                                    Variations
                                                  </span>
                                                </div>
                                              </div>
                                              <div
                                                data-v-1c1b77af=""
                                                data-v-439a30e0=""
                                                className="list-header-item product-variation__price"
                                                style={{
                                                  flex: '1 1 0%',
                                                  width: 'auto',
                                                  minWidth: 'auto',
                                                }}
                                              >
                                                <div
                                                  data-v-1c1b77af=""
                                                  className="list-header-item-content show-order"
                                                >
                                                  <span
                                                    data-v-1c1b77af=""
                                                    className="list-header-item-label"
                                                  >
                                                    Price
                                                  </span>
                                                  <div
                                                    data-v-1c1b77af=""
                                                    className="list-header-item-action"
                                                  >
                                                    <div
                                                      data-v-1c1b77af=""
                                                      className="action-icon order-icon"
                                                    >
                                                      <i
                                                        data-v-1c1b77af=""
                                                        className="sort-asc sort-icon shopee-icon"
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 16 16"
                                                        >
                                                          <path
                                                            fill-rule="evenodd"
                                                            d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                                                          ></path>
                                                        </svg>
                                                      </i>
                                                      <i
                                                        data-v-1c1b77af=""
                                                        className="sort-dsc sort-icon shopee-icon"
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 16 16"
                                                        >
                                                          <path
                                                            fill-rule="evenodd"
                                                            d="M7.57253679,9.34925324 L5.1530248,7.08096075 C4.90120463,6.84487934 4.88844585,6.44935696 5.12452726,6.19753679 C5.24268191,6.07150517 5.40773242,6 5.58048801,6 L10.419512,6 C10.76469,6 11.044512,6.27982203 11.044512,6.625 C11.044512,6.79775558 10.9730068,6.9628061 10.8469752,7.08096075 L8.42746321,9.34925324 C8.18705183,9.57463891 7.81294817,9.57463891 7.57253679,9.34925324 Z"
                                                          ></path>
                                                        </svg>
                                                      </i>
                                                    </div>
                                                    <div
                                                      data-v-1c1b77af=""
                                                      className="list-header-item-suffix"
                                                    ></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                data-v-1c1b77af=""
                                                data-v-439a30e0=""
                                                className="list-header-item product-variation__stock"
                                                style={{
                                                  flex: '1 1 0%',
                                                  width: 'auto',
                                                  minWidth: 'auto',
                                                }}
                                              >
                                                <div
                                                  data-v-1c1b77af=""
                                                  className="list-header-item-content show-order"
                                                >
                                                  <span
                                                    data-v-1c1b77af=""
                                                    className="list-header-item-label"
                                                  >
                                                    Stock
                                                  </span>
                                                  <div
                                                    data-v-1c1b77af=""
                                                    className="list-header-item-action"
                                                  >
                                                    <div
                                                      data-v-1c1b77af=""
                                                      className="list-header-item-tips"
                                                    >
                                                      <div
                                                        data-v-1c1b77af=""
                                                        className="shopee-popover shopee-popover--light"
                                                      >
                                                        <div className="shopee-popover__ref">
                                                          <i
                                                            data-v-1c1b77af=""
                                                            className="action-icon shopee-icon"
                                                          >
                                                            <svg
                                                              xmlns="http://www.w3.org/2000/svg"
                                                              viewBox="0 0 16 16"
                                                            >
                                                              <path
                                                                fill-rule="evenodd"
                                                                d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"
                                                              ></path>
                                                            </svg>
                                                          </i>
                                                        </div>
                                                        <div
                                                          className="shopee-popper shopee-popover__popper shopee-popover__popper--light with-arrow"
                                                          style={{
                                                            display: 'none',
                                                            maxWidth: '320px',
                                                          }}
                                                        >
                                                          <div className="shopee-popover__content">
                                                            {' '}
                                                            Stock refers to the
                                                            total stock that
                                                            seller has,
                                                            including those
                                                            reserved for
                                                            promotions. If a
                                                            product has reserved
                                                            stock for
                                                            promotions, the
                                                            quantity displayed
                                                            will include stock
                                                            that is available
                                                            for sale.{' '}
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div
                                                      data-v-1c1b77af=""
                                                      className="action-icon order-icon"
                                                    >
                                                      <i
                                                        data-v-1c1b77af=""
                                                        className="sort-asc sort-icon shopee-icon"
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 16 16"
                                                        >
                                                          <path
                                                            fill-rule="evenodd"
                                                            d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                                                          ></path>
                                                        </svg>
                                                      </i>
                                                      <i
                                                        data-v-1c1b77af=""
                                                        className="sort-dsc sort-icon shopee-icon"
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 16 16"
                                                        >
                                                          <path
                                                            fill-rule="evenodd"
                                                            d="M7.57253679,9.34925324 L5.1530248,7.08096075 C4.90120463,6.84487934 4.88844585,6.44935696 5.12452726,6.19753679 C5.24268191,6.07150517 5.40773242,6 5.58048801,6 L10.419512,6 C10.76469,6 11.044512,6.27982203 11.044512,6.625 C11.044512,6.79775558 10.9730068,6.9628061 10.8469752,7.08096075 L8.42746321,9.34925324 C8.18705183,9.57463891 7.81294817,9.57463891 7.57253679,9.34925324 Z"
                                                          ></path>
                                                        </svg>
                                                      </i>
                                                    </div>
                                                    <div
                                                      data-v-1c1b77af=""
                                                      className="list-header-item-suffix"
                                                    ></div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div
                                                data-v-1c1b77af=""
                                                data-v-439a30e0=""
                                                className="list-header-item product-variation__sales"
                                                style={{
                                                  flex: '1 1 0%',
                                                  width: 'auto',
                                                  minWidth: 'auto',
                                                }}
                                              >
                                                <div
                                                  data-v-1c1b77af=""
                                                  className="list-header-item-content show-order"
                                                >
                                                  <span
                                                    data-v-1c1b77af=""
                                                    className="list-header-item-label"
                                                  >
                                                    Sales
                                                  </span>
                                                  <div
                                                    data-v-1c1b77af=""
                                                    className="list-header-item-action"
                                                  >
                                                    <div
                                                      data-v-1c1b77af=""
                                                      className="action-icon order-icon"
                                                    >
                                                      <i
                                                        data-v-1c1b77af=""
                                                        className="sort-asc sort-icon shopee-icon"
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 16 16"
                                                        >
                                                          <path
                                                            fill-rule="evenodd"
                                                            d="M7.57253679,6.40074676 L5.1530248,8.66903925 C4.90120463,8.90512066 4.88844585,9.30064304 5.12452726,9.55246321 C5.24268191,9.67849483 5.40773242,9.75 5.58048801,9.75 L10.419512,9.75 C10.76469,9.75 11.044512,9.47017797 11.044512,9.125 C11.044512,8.95224442 10.9730068,8.7871939 10.8469752,8.66903925 L8.42746321,6.40074676 C8.18705183,6.17536109 7.81294817,6.17536109 7.57253679,6.40074676 Z"
                                                          ></path>
                                                        </svg>
                                                      </i>
                                                      <i
                                                        data-v-1c1b77af=""
                                                        className="sort-dsc sort-icon shopee-icon"
                                                      >
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          viewBox="0 0 16 16"
                                                        >
                                                          <path
                                                            fill-rule="evenodd"
                                                            d="M7.57253679,9.34925324 L5.1530248,7.08096075 C4.90120463,6.84487934 4.88844585,6.44935696 5.12452726,6.19753679 C5.24268191,6.07150517 5.40773242,6 5.58048801,6 L10.419512,6 C10.76469,6 11.044512,6.27982203 11.044512,6.625 C11.044512,6.79775558 10.9730068,6.9628061 10.8469752,7.08096075 L8.42746321,9.34925324 C8.18705183,9.57463891 7.81294817,9.57463891 7.57253679,9.34925324 Z"
                                                          ></path>
                                                        </svg>
                                                      </i>
                                                    </div>
                                                    <div
                                                      data-v-1c1b77af=""
                                                      className="list-header-item-suffix"
                                                    ></div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </th>
                                      <th colSpan={1} rowSpan={1} className="">
                                        <div className="shopee-table__cell">
                                          <span className="shopee-table__cell-label">
                                            <div
                                              data-v-1c1b77af=""
                                              data-v-439a30e0=""
                                              className="list-header-item product-variation__ads"
                                            >
                                              <div
                                                data-v-1c1b77af=""
                                                className="list-header-item-content"
                                              >
                                                <span
                                                  data-v-1c1b77af=""
                                                  className="list-header-item-label"
                                                >
                                                  Ads
                                                </span>
                                                <div
                                                  data-v-1c1b77af=""
                                                  className="list-header-item-action"
                                                >
                                                  <div
                                                    data-v-1c1b77af=""
                                                    className="list-header-item-tips"
                                                  >
                                                    <div
                                                      data-v-1c1b77af=""
                                                      className="shopee-popover shopee-popover--light"
                                                    >
                                                      <div className="shopee-popover__ref">
                                                        <i
                                                          data-v-1c1b77af=""
                                                          className="action-icon shopee-icon"
                                                        >
                                                          <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 16 16"
                                                          >
                                                            <path
                                                              fill-rule="evenodd"
                                                              d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 Z M7.98750749,10.2375075 C8.40172105,10.2375075 8.73750749,10.5732939 8.73750749,10.9875075 C8.73750749,11.401721 8.40172105,11.7375075 7.98750749,11.7375075 C7.57329392,11.7375075 7.23750749,11.401721 7.23750749,10.9875075 C7.23750749,10.5732939 7.57329392,10.2375075 7.98750749,10.2375075 Z M8.11700238,4.60513307 C9.97011776,4.60513307 10.7745841,6.50497267 9.94298079,7.72186504 C9.76926425,7.97606597 9.56587088,8.14546785 9.27050506,8.31454843 L9.11486938,8.39945305 L8.95824852,8.47993747 C8.56296349,8.68261431 8.49390831,8.75808648 8.49390831,9.0209925 C8.49390831,9.29713488 8.27005069,9.5209925 7.99390831,9.5209925 C7.71776594,9.5209925 7.49390831,9.29713488 7.49390831,9.0209925 C7.49390831,8.34166619 7.7650409,7.99681515 8.35913594,7.6662627 L8.76655168,7.45066498 C8.9424056,7.3502536 9.04307851,7.26633638 9.11735517,7.1576467 C9.52116165,6.56675314 9.11397414,5.60513307 8.11700238,5.60513307 C7.41791504,5.60513307 6.82814953,6.01272878 6.75715965,6.55275918 L6.75,6.66244953 L6.74194433,6.75232516 C6.69960837,6.98557437 6.49545989,7.16244953 6.25,7.16244953 C5.97385763,7.16244953 5.75,6.9385919 5.75,6.66244953 C5.75,5.44256682 6.87194406,4.60513307 8.11700238,4.60513307 Z"
                                                            ></path>
                                                          </svg>
                                                        </i>
                                                      </div>
                                                      <div
                                                        className="shopee-popper shopee-popover__popper shopee-popover__popper--light with-arrow"
                                                        style={{
                                                          display: 'none',
                                                          maxWidth: '320px',
                                                        }}
                                                      >
                                                        <div className="shopee-popover__content">
                                                          {' '}
                                                          Boost your products
                                                          and check Boost
                                                          Details in this column{' '}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div
                                                    data-v-1c1b77af=""
                                                    className="list-header-item-suffix"
                                                  ></div>
                                                </div>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </th>
                                      <th colSpan={1} rowSpan={1} className="">
                                        <div className="shopee-table__cell last-cell">
                                          <span className="shopee-table__cell-label">
                                            <div
                                              data-v-1c1b77af=""
                                              data-v-439a30e0=""
                                              className="list-header-item product-action"
                                            >
                                              <div
                                                data-v-1c1b77af=""
                                                className="list-header-item-content"
                                              >
                                                <span
                                                  data-v-1c1b77af=""
                                                  className="list-header-item-label"
                                                >
                                                  Action
                                                </span>
                                              </div>
                                            </div>
                                          </span>
                                        </div>
                                      </th>
                                    </tr>
                                  </thead>
                                </div>
                              </div>
                            </div>
                            <div className="shopee-table__body-container">
                              <div className="shopee-table__main-body">
                                <div className="shopee-scrollbar">
                                  <div
                                    className="shopee-scrollbar__wrapper"
                                    style={{ overflow: 'hidden' }}
                                  >
                                    <div className="shopee-scrollbar__bar horizontal">
                                      <div
                                        className="shopee-scrollbar__thumb"
                                        style={{ left: '0px', width: '0px' }}
                                      ></div>
                                    </div>
                                    <div
                                      className="shopee-scrollbar__content"
                                      style={{ position: 'relative' }}
                                    >
                                      <table
                                        cellSpacing={0}
                                        cellPadding={0}
                                        border={0}
                                        className="shopee-table__body"
                                        style={{ width: '1054px' }}
                                      ></table>
                                      <colgroup>
                                        <col width="40"></col>
                                        <col width="232"></col>
                                        <col width="606"></col>
                                        <col width="96"></col>
                                        <col width="80"></col>
                                      </colgroup>
                                      <tbody></tbody>
                                    </div>
                                    <div className="shopee-table__empty">
                                      <div
                                        data-v-439a30e0=""
                                        className="product-no-result"
                                      >
                                        <span
                                          data-v-439a30e0=""
                                          className="sprites-product-list-no-product"
                                        ></span>
                                        <div
                                          data-v-439a30e0=""
                                          className="text"
                                        >
                                          {' '}
                                          No Product Found{' '}
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="shopee-table__loading"
                                      style={{ display: 'none' }}
                                    ></div>
                                    <div className="resize-triggers">
                                      <div className="expand-trigger">
                                        <div
                                          style={{
                                            width: '1055px',
                                            height: '1px',
                                          }}
                                        ></div>
                                      </div>
                                      <div className="contract-trigger"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="shopee-scrollbar__bar vertical">
                              <div
                                className="shopee-scrollbar__thumb"
                                style={{ top: '0px', height: '0px' }}
                              ></div>
                            </div>
                          </div>
                          <div className="resize-triggers">
                            <div className="expand-trigger">
                              <div
                                style={{ width: '1053px', height: '397px' }}
                              ></div>
                            </div>
                            <div className="contract-trigger"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
