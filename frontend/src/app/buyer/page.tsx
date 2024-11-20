import React from 'react';
import Footer from '../Components/Footer';
import SellerSideBar from './SellerSideBar';

export default function page() {
  return (
    <div>
      <body className=" route-portal-product route-portal-product-list route-portal-product-list-all">
        <div id="app">
          <div data-v-53ae356f="" className="header-bar shopee-header-bar">
            <div data-v-53ae356f="" className="header-content">
              <div data-v-53ae356f="" className="logo-box">
                <a data-v-53ae356f="" href="/" className="header-logo only">
                  <svg viewBox="0 0 113 126" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M76.968 94.081c-.741 6.073-4.447 10.939-10.187 13.374-3.194 1.356-7.476 2.086-10.871 1.856-5.279-.2-10.241-1.478-14.812-3.809-1.664-.848-4.104-2.525-5.943-4.058-.42-.348-.635-.66-.232-1.228.43-.645 2.13-3.102 2.398-3.507.362-.552.956-.58 1.5-.153.075.057.628.486.74.569 4.4 3.423 10.076 5.994 16.384 6.235 7.955-.108 13.726-3.65 14.757-9.136 1.135-6.046-3.69-11.231-12.98-14.124-2.953-.92-10.38-3.872-11.75-4.672-6.474-3.77-9.488-8.717-9.058-14.807.657-8.438 8.534-14.762 18.53-14.804 4.744-.01 9.194 1.036 13.159 2.695 1.459.61 4.176 2.066 5.145 2.785.677.494.625 1.046.358 1.474-.395.656-1.57 2.483-2.043 3.245-.345.523-.773.583-1.38.2-5.112-3.41-10.37-4.567-15.103-4.661-6.828.134-11.978 4.165-12.316 9.691-.09 4.992 3.729 8.613 11.833 11.378C71.83 77.964 78.17 84.24 76.968 94.08ZM56.32 7.34c10.83 0 19.66 10.208 20.073 22.986H36.248C36.66 17.548 45.489 7.34 56.32 7.34ZM97.44 125.687c5.72-.155 10.355-4.776 10.844-10.504l.037-.692 4.05-81.638v-.001a2.402 2.402 0 0 0-2.4-2.526H83.95C83.312 13.454 71.185 0 56.32 0 41.455 0 29.33 13.454 28.69 30.326H2.632a2.402 2.402 0 0 0-2.35 2.588H.28l3.696 81.319.055 1.02c.564 5.658 4.7 10.215 10.322 10.425h.002l82.669.013.414-.004Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div data-v-53ae356f="" className="content-box">
                <div
                  data-v-2dc2b76a=""
                  data-v-53ae356f=""
                  className="breadcrumb eds-breadcrumb eds-breadcrumb--light"
                  style={{ minWidth: '296px', maxWidth: '10000px' }}
                >
                  <div
                    data-v-44de07f5=""
                    data-v-53ae356f=""
                    className="breadcrumb-item eds-breadcrumb-item"
                    data-v-2dc2b76a=""
                  >
                    <div
                      data-v-44de07f5=""
                      className="eds-breadcrumb-item__inner"
                    >
                      <div
                        data-v-2cea0e7b=""
                        data-v-3221e9da=""
                        data-v-44de07f5=""
                        className="eds-tooltip eds-popover eds-popover--dark eds-breadcrumb-item__item-text"
                      >
                        <div data-v-2cea0e7b="" className="eds-popover__ref">
                          <div
                            data-v-44de07f5=""
                            data-v-2cea0e7b=""
                            className="eds-breadcrumb-item__item-text"
                          >
                            <a
                              data-v-53ae356f=""
                              href="/"
                              className="router-link-active breadcrumb-name"
                              data-v-2cea0e7b=""
                            >
                              {' '}
                              Home{' '}
                            </a>
                          </div>
                          <div
                            data-v-44de07f5=""
                            data-v-2cea0e7b=""
                            className="eds-breadcrumb-item__item-text-phantom"
                          >
                            <a
                              data-v-53ae356f=""
                              href="/"
                              className="router-link-active breadcrumb-name"
                              data-v-2cea0e7b=""
                            >
                              {' '}
                              Home{' '}
                            </a>
                            <div className="resize-triggers">
                              <div className="expand-trigger">
                                <div
                                  style={{ width: '49px', height: '23px' }}
                                ></div>
                              </div>
                              <div className="contract-trigger"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-0935b9f0=""
                          data-v-2cea0e7b=""
                          className="eds-popper eds-popover__popper eds-popover__popper--dark eds-tooltip__popper"
                          data-v-3221e9da=""
                          style={{ display: 'none', maxWidth: '280px' }}
                        >
                          <div
                            data-v-2cea0e7b=""
                            className="eds-popover__content"
                          >
                            {' '}
                            Home{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-44de07f5=""
                      className="eds-breadcrumb-item__separator"
                    >
                      <i
                        data-v-c3cf29f8=""
                        data-v-44de07f5=""
                        className="eds-icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.18933983,8 L5.21966991,11.9696699 C4.9267767,12.2625631 4.9267767,12.7374369 5.21966991,13.0303301 C5.51256313,13.3232233 5.98743687,13.3232233 6.28033009,13.0303301 L10.7803301,8.53033009 C11.0732233,8.23743687 11.0732233,7.76256313 10.7803301,7.46966991 L6.28033009,2.96966991 C5.98743687,2.6767767 5.51256313,2.6767767 5.21966991,2.96966991 C4.9267767,3.26256313 4.9267767,3.73743687 5.21966991,4.03033009 L9.18933983,8 Z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                  <div
                    data-v-44de07f5=""
                    data-v-53ae356f=""
                    className="breadcrumb-item eds-breadcrumb-item"
                    data-v-2dc2b76a=""
                    style={{ maxWidth: '488px' }}
                  >
                    <div
                      data-v-44de07f5=""
                      className="eds-breadcrumb-item__inner"
                    >
                      <div
                        data-v-2cea0e7b=""
                        data-v-3221e9da=""
                        data-v-44de07f5=""
                        className="eds-tooltip eds-popover eds-popover--dark eds-breadcrumb-item__item-text"
                      >
                        <div data-v-2cea0e7b="" className="eds-popover__ref">
                          <div
                            data-v-44de07f5=""
                            data-v-2cea0e7b=""
                            className="eds-breadcrumb-item__item-text"
                          >
                            <a
                              data-v-53ae356f=""
                              href="/portal/product"
                              className="router-link-active breadcrumb-name active"
                              data-v-2cea0e7b=""
                            >
                              {' '}
                              My Products{' '}
                            </a>
                          </div>
                          <div
                            data-v-44de07f5=""
                            data-v-2cea0e7b=""
                            className="eds-breadcrumb-item__item-text-phantom"
                          >
                            <a
                              data-v-53ae356f=""
                              href="/portal/product"
                              className="router-link-active breadcrumb-name active"
                              data-v-2cea0e7b=""
                            >
                              {' '}
                              My Products{' '}
                            </a>
                            <div className="resize-triggers">
                              <div className="expand-trigger">
                                <div
                                  style={{ width: '102px', height: '23px' }}
                                ></div>
                              </div>
                              <div className="contract-trigger"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          data-v-0935b9f0=""
                          data-v-2cea0e7b=""
                          className="eds-popper eds-popover__popper eds-popover__popper--dark eds-tooltip__popper"
                          data-v-3221e9da=""
                          style={{ display: 'none', maxWidth: '280px' }}
                        >
                          <div
                            data-v-2cea0e7b=""
                            className="eds-popover__content"
                          >
                            {' '}
                            My Products{' '}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-v-44de07f5=""
                      className="eds-breadcrumb-item__separator"
                    >
                      <i
                        data-v-c3cf29f8=""
                        data-v-44de07f5=""
                        className="eds-icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M9.18933983,8 L5.21966991,11.9696699 C4.9267767,12.2625631 4.9267767,12.7374369 5.21966991,13.0303301 C5.51256313,13.3232233 5.98743687,13.3232233 6.28033009,13.0303301 L10.7803301,8.53033009 C11.0732233,8.23743687 11.0732233,7.76256313 10.7803301,7.46966991 L6.28033009,2.96966991 C5.98743687,2.6767767 5.51256313,2.6767767 5.21966991,2.96966991 C4.9267767,3.26256313 4.9267767,3.73743687 5.21966991,4.03033009 L9.18933983,8 Z"></path>
                        </svg>
                      </i>
                    </div>
                  </div>
                  <div className="resize-triggers">
                    <div className="expand-trigger">
                      <div style={{ width: '569px', height: '32px' }}></div>
                    </div>
                    <div className="contract-trigger"></div>
                  </div>
                </div>
                <div
                  data-v-53ae356f=""
                  className="blank-block"
                  style={{ width: '24px' }}
                ></div>
              </div>
              <div data-v-53ae356f="" className="header-action">
                <div data-v-53ae356f="" style={{ width: '112px' }}></div>
              </div>
              <div data-v-53ae356f="" className="action-splitter"></div>
              <div data-v-53ae356f="" style={{ position: 'relative' }}>
                <div
                  data-v-2cea0e7b=""
                  data-v-53ae356f=""
                  className="eds-popover eds-popover--light"
                >
                  <div data-v-2cea0e7b="" className="eds-popover__ref">
                    <div
                      data-v-53ae356f=""
                      data-v-2cea0e7b=""
                      className="account-info"
                    >
                      <img
                        data-v-53ae356f=""
                        data-v-2cea0e7b=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABJlBMVEXP2NxgfYtjf412j5uMoavO19uis7vG0dVxi5fBzNJyjJhjgI56kp5hfoxxi5h5kZ2ouL9ohJGInaipucCHnah3kJyxv8bL1NnM1dlphJGXqrN4kZzM1tqUp7Gnt76InqlkgY6wvsWGnKdrhpOnuL+xwMZ8lJ+3xMvAzNGCmaTFz9Sdr7fN1trN19tlgY5qhZJkgI6/y9COoqzL1dlphJJ0jZp7k566x8y7x81ng5CywMegsrp4kZ14kJyhs7uJn6nH0dZlgY+Fm6bG0daWqrO2xMqzwcfF0NXBzdK3xcu0wsh7k5+qusG0wsmzwchuiJVviZaYq7S7yM2Kn6m8yM6/y9GInqiWqbKNoqxzjJmjtLyqucGfsbmdr7iwv8WKoKpuiZVif42PQ9RwAAABzUlEQVR4Xu3YVZLjShBA0UyBmZmamXuYmZmZ3tv/Jua3Y8JWTdsKKR1zzwruR1aVlDIdAAAAAAAAAAAAAAAAAADyN1t+3fPqfiOTl7kQ1qp6QqkZinmdnP6hcFVs6wY6RtATwx75OlY7K2ZlczpBzmx194ZONOyKTbc0QiAmrWikFTHoIKeRKgdiz7o6LIo919XhophzRp3yYs01dcqINavqtCTWXFAnX6y5ok7nxZqyOhWJNjAeHERzVx6Py7Y6PRZzqnP4wSQ1dajN4U9AIRSDOhqpIyYFGuGs2HRuqBMNR/O3rKlYXjG1dazhbTGsF4yd557YtlFwrHpNCpslPeHZ81DmQj7T8OvFYt9vfM3LPwkAgOzDzMLdUqV/qHqnXymtLmRe3hPD9h/s7RzpGEc7e1v7Yk+4dX/zWCMsbw6eiClPgzV107XPL8SI3cEr/Wuv3+xK+t4ueXoq3rv3kq4PrbKeWvnjtqRn9MnTqXiDkaTkUkGn9uWypKK5rDM4/CYp+K4z+iGJW9SZrSc+z57OzEt6rtsag6ok6qfGYkOS1NJY/JIk/aexyEmS/tdYHEuSNCbzGU000UQTTTQAAAAAAAAAAAAAAAAAAL8BwZgl987F+p8AAAAASUVORK5CYII="
                        className="account-avatar"
                      ></img>
                      <div
                        data-v-53ae356f=""
                        data-v-2cea0e7b=""
                        className="subaccount-info"
                      >
                        <span
                          data-v-53ae356f=""
                          data-v-2cea0e7b=""
                          className="subaccount-name"
                        >
                          traficsoldier
                        </span>
                      </div>
                      <i
                        data-v-c3cf29f8=""
                        data-v-53ae356f=""
                        className="arrow eds-icon up"
                        data-v-2cea0e7b=""
                      >
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
                    data-v-0935b9f0=""
                    data-v-2cea0e7b=""
                    className="eds-popper eds-popover__popper eds-popover__popper--light with-arrow header-bar-account-tooltip"
                    style={{ display: 'none', maxWidth: '320px' }}
                  >
                    <div data-v-2cea0e7b="" className="eds-popover__content">
                      <div data-v-53ae356f="" className="subaccount-dropdown">
                        <div
                          data-v-53ae356f=""
                          className="subaccount-dropdown-body"
                        >
                          <div
                            data-v-53ae356f=""
                            className="subaccount-dropdown-info"
                          >
                            <img
                              data-v-53ae356f=""
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAMAAAAKE/YAAAABJlBMVEXP2NxgfYtjf412j5uMoavO19uis7vG0dVxi5fBzNJyjJhjgI56kp5hfoxxi5h5kZ2ouL9ohJGInaipucCHnah3kJyxv8bL1NnM1dlphJGXqrN4kZzM1tqUp7Gnt76InqlkgY6wvsWGnKdrhpOnuL+xwMZ8lJ+3xMvAzNGCmaTFz9Sdr7fN1trN19tlgY5qhZJkgI6/y9COoqzL1dlphJJ0jZp7k566x8y7x81ng5CywMegsrp4kZ14kJyhs7uJn6nH0dZlgY+Fm6bG0daWqrO2xMqzwcfF0NXBzdK3xcu0wsh7k5+qusG0wsmzwchuiJVviZaYq7S7yM2Kn6m8yM6/y9GInqiWqbKNoqxzjJmjtLyqucGfsbmdr7iwv8WKoKpuiZVif42PQ9RwAAABzUlEQVR4Xu3YVZLjShBA0UyBmZmamXuYmZmZ3tv/Jua3Y8JWTdsKKR1zzwruR1aVlDIdAAAAAAAAAAAAAAAAAADyN1t+3fPqfiOTl7kQ1qp6QqkZinmdnP6hcFVs6wY6RtATwx75OlY7K2ZlczpBzmx194ZONOyKTbc0QiAmrWikFTHoIKeRKgdiz7o6LIo919XhophzRp3yYs01dcqINavqtCTWXFAnX6y5ok7nxZqyOhWJNjAeHERzVx6Py7Y6PRZzqnP4wSQ1dajN4U9AIRSDOhqpIyYFGuGs2HRuqBMNR/O3rKlYXjG1dazhbTGsF4yd557YtlFwrHpNCpslPeHZ81DmQj7T8OvFYt9vfM3LPwkAgOzDzMLdUqV/qHqnXymtLmRe3hPD9h/s7RzpGEc7e1v7Yk+4dX/zWCMsbw6eiClPgzV107XPL8SI3cEr/Wuv3+xK+t4ueXoq3rv3kq4PrbKeWvnjtqRn9MnTqXiDkaTkUkGn9uWypKK5rDM4/CYp+K4z+iGJW9SZrSc+z57OzEt6rtsag6ok6qfGYkOS1NJY/JIk/aexyEmS/tdYHEuSNCbzGU000UQTTTQAAAAAAAAAAAAAAAAAAL8BwZgl987F+p8AAAAASUVORK5CYII="
                              className="account-avatar"
                            ></img>
                            <span
                              data-v-53ae356f=""
                              className="subaccount-name"
                            >
                              traficsoldier
                            </span>
                          </div>
                          <div
                            data-v-53ae356f=""
                            className="dropdown-splitter"
                          ></div>
                          <ul data-v-53ae356f="">
                            <li
                              data-v-53ae356f=""
                              className="account-dropdown-item"
                            >
                              <span data-v-53ae356f="" className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.511598,2 C12.8700652,2 13.1861709,2.2209063 13.3464586,2.59514427 C13.6670798,3.56868766 13.9981268,4.55509674 14.337447,5.54857176 L14.9089309,7.2044263 C14.9753524,7.42013798 15.005709,7.638851 14.9993457,7.85074296 C15.0007808,8.84499173 14.3697016,9.69342869 13.5007727,9.93268797 L13.5,13.9936317 C13.5,14.5459164 13.0522875,14.9936317 12.5,14.9936317 L4.5,14.9936317 C3.94771796,14.9936317 3.5,14.5459164 3.5,13.9936317 L3.50025292,9.93266214 C2.63174808,9.69366875 2.00068004,8.84768336 2.00085744,7.86595439 C1.99437123,7.64222794 2.02481209,7.42117635 2.08783451,7.21423728 L2.66426684,5.55645362 C3.0093422,4.55562481 3.34784733,3.55831209 3.68445158,2.55232419 C3.82842657,2.2209063 4.14453227,2 4.50299942,2 L12.511598,2 Z M11.5006571,9.27323983 C11.1359826,9.71771745 10.6019101,10 10.0006555,10 C9.45952644,10 8.97281475,9.77135114 8.61503599,9.40159718 L8.50065391,9.27323983 L8.38627183,9.40159718 C8.02849307,9.77135114 7.54178138,10 7.00065229,10 C6.39939775,10 5.86532519,9.71771745 5.50065068,9.27323983 C5.24125422,9.589401 4.89614892,9.82349774 4.50212183,9.93231118 L4.50000271,13.9936317 L12.5000027,13.9936317 L12.499186,9.93231118 C12.1051589,9.82349774 11.7600536,9.589401 11.5006571,9.27323983 Z M12.4290973,3 L4.58726795,3 L4.22238212,4.08680034 C3.97656732,4.81432884 3.72550247,5.54820934 3.46837828,6.29061458 L3.04154535,7.51785369 C3.01082655,7.6250196 2.9973892,7.73364451 3.00064744,7.85146463 C3.00064744,8.42885797 3.36910762,8.89376403 3.83513185,8.98409481 C4.07084122,8.96000768 4.29486466,8.89790633 4.50123908,8.80344253 L4.50147507,8.84472135 C4.79721257,8.64742682 5.00065068,8.28049956 5.00065068,7.85146463 C5.00065068,7.18479797 6.00065068,7.18479797 6.00065068,7.85146463 C6.00065068,8.49576621 6.45945279,9 7.00065229,9 C7.5418518,9 8.00065391,8.49576621 8.00065391,7.85146463 C8.00065391,7.18479797 9.00065391,7.18479797 9.00065391,7.85146463 C9.00065391,8.49576621 9.45945602,9 10.0006555,9 C10.541855,9 11.0006571,8.49576621 11.0006571,7.85146463 C11.0006571,7.18479797 12.0006571,7.18479797 12.0006571,7.85146463 C12.0006571,8.28049956 12.2040953,8.64742682 12.4998328,8.84472135 L12.4999153,8.80331959 C12.706088,8.8977261 12.9298806,8.9598314 13.1650243,8.98321328 C13.6321325,8.8936328 14.0002014,8.42746974 13.9995585,7.83689711 C14.0026898,7.7294678 13.9892763,7.6234655 13.9556239,7.5089908 L13.6038525,6.49157789 C13.1928783,5.2973111 12.7986043,4.12639431 12.4290973,3 Z"></path>
                                </svg>
                              </span>
                              <span data-v-53ae356f="" className="text">
                                Shop Information
                              </span>
                            </li>
                            <li
                              data-v-53ae356f=""
                              className="account-dropdown-item"
                            >
                              <span data-v-53ae356f="" className="icon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M9.42424101,1 C9.81932838,1 10.13961,1.3135709 10.1396099,1.70022322 L10.1399895,2.88453442 C10.6106121,3.07329231 11.0524792,3.32361449 11.4540715,3.6278745 L12.5025761,3.03605471 C12.8447318,2.84265006 13.2822446,2.95742497 13.4797882,3.29241166 L14.9040326,5.70758834 C15.1015763,6.04257503 14.9843451,6.47092084 14.6423767,6.66421956 L13.597125,7.25562936 C13.6312143,7.50218321 13.6484404,7.7519749 13.6484404,8.00380202 C13.6484404,8.25344794 13.6315115,8.50109498 13.5980064,8.74557215 L14.6421894,9.33567451 C14.9843451,9.52907916 15.1015763,9.95742497 14.9040326,10.2924117 L13.4797882,12.7075883 C13.2822446,13.042575 12.8447318,13.1573499 12.5025518,12.9639316 L11.4605139,12.3748415 C11.057216,12.6813023 10.6131395,12.933298 10.139989,13.1230698 L10.13961,14.2996198 C10.13961,14.6864291 9.81932838,15 9.42424101,15 L6.5757523,15 C6.18066493,15 5.86038334,14.6864291 5.86038348,14.2999832 L5.85951006,13.1228715 C5.38662373,12.9331543 4.94278577,12.68128 4.5396826,12.3749959 L3.49741724,12.9639453 C3.15526154,13.1573499 2.71774876,13.042575 2.52020507,12.7075883 L1.09596072,10.2924117 C0.898417034,9.95742497 1.01564823,9.52907916 1.35781623,9.33566756 L2.4019758,8.74549075 C2.3684781,8.50103998 2.35155288,8.25342021 2.35155288,8.00380202 C2.35155288,7.7520028 2.36877517,7.50223854 2.40285696,7.25571123 L1.35780393,6.66432549 C1.01564823,6.47092084 0.898417034,6.04257503 1.09596072,5.70758834 L2.52020507,3.29241166 C2.71774876,2.95742497 3.15526154,2.84265006 3.49704111,3.03584231 L4.54615772,3.6276958 C4.8672684,3.38443783 5.21412554,3.17566312 5.58084089,3.00527018 L5.85950881,2.88473297 L5.86038334,1.7003802 C5.86038334,1.3135709 6.18066493,1 6.5757523,1 L9.42424101,1 Z M9.11775052,2.00054315 L6.88211751,2.00054315 L6.88094201,3.59268473 L6.53221952,3.70680635 C5.94351231,3.89946447 5.40131662,4.20707002 4.93675049,4.60924875 L4.66150577,4.84753037 L3.25208152,4.0524111 L2.13421884,5.94803799 L3.53958223,6.74331992 L3.46634318,7.09601049 C3.40479888,7.39238372 3.37350853,7.69597076 3.37350853,8.00380202 C3.37350853,8.30976401 3.40441999,8.61153495 3.4652268,8.90620062 L3.53797136,9.25871584 L2.13421884,10.052096 L3.2519732,11.9474052 L4.65565494,11.1542315 L4.93117919,11.3935244 C5.39696126,11.7980563 5.9411393,12.107363 6.53221952,12.3007977 L6.88094068,12.4149189 L6.8821163,13.9994569 L9.11775098,13.9994569 L9.11826129,12.4151275 L9.46719783,12.3009861 C10.0585928,12.1075337 10.603051,11.7980912 11.0690333,11.393334 L11.344618,11.1539583 L12.7480504,11.9473538 L13.8657646,10.0521128 L12.4619891,9.25883747 L12.5347476,8.90629209 C12.5955669,8.61159745 12.6264848,8.30979571 12.6264848,8.00380202 C12.6264848,7.69593887 12.595188,7.39232084 12.533631,7.09591849 L12.4603779,6.74319761 L13.8657646,5.94802122 L12.7479468,4.0524704 L11.3388112,4.84784552 L11.0634968,4.60946867 C10.5987225,4.20705063 10.0562343,3.89929889 9.46719783,3.7066179 L9.11826072,3.59247634 L9.11775052,2.00054315 Z M8,5.20070068 C9.54601033,5.20070068 10.7992993,6.45398967 10.7992993,8 C10.7992993,9.54601033 9.54601033,10.7992993 8,10.7992993 C6.45398967,10.7992993 5.20070068,9.54601033 5.20070068,8 C5.20070068,6.45398967 6.45398967,5.20070068 8,5.20070068 Z M8,6.20070068 C7.00627442,6.20070068 6.20070068,7.00627442 6.20070068,8 C6.20070068,8.99372558 7.00627442,9.79929932 8,9.79929932 C8.99372558,9.79929932 9.79929932,8.99372558 9.79929932,8 C9.79929932,7.00627442 8.99372558,6.20070068 8,6.20070068 Z"></path>
                                </svg>
                              </span>
                              <span data-v-53ae356f="" className="text">
                                Shop Setting
                              </span>
                            </li>
                            <div
                              data-v-2c13d262=""
                              data-v-53ae356f=""
                              className="lang-option-dropdown eds-dropdown"
                            >
                              <li
                                data-v-53ae356f=""
                                data-v-2c13d262=""
                                className="account-dropdown-item"
                              >
                                <span
                                  data-v-53ae356f=""
                                  data-v-2c13d262=""
                                  className="icon"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M7.587 1.012l.233-.01L8 1c.13 0 .261.004.39.01l.115.008.195.017.15.016.184.025.303.052a7.009 7.009 0 014.722 3.364l.181.333A6.97 6.97 0 0115 8c0 .914-.175 1.787-.494 2.587l-.14.327a6.954 6.954 0 01-.166.34l-.142.256-.174.283a7.01 7.01 0 01-4.263 3.018l-.284.061-.167.03-.263.04-.19.022-.257.021-.195.01L8 15a7.12 7.12 0 01-.302-.006L8 15c-.13 0-.261-.004-.39-.01l-.115-.008-.195-.017-.15-.016-.184-.025-.303-.052a7.01 7.01 0 01-4.732-3.38l-.172-.318A6.97 6.97 0 011 8c0-.925.18-1.807.505-2.615l.128-.3c.055-.12.114-.237.175-.353l.144-.258.164-.268A7.01 7.01 0 016.38 1.189l.284-.061.15-.027.268-.041.222-.026.284-.022zM8 10.5c-.595 0-1.181.037-1.757.11.216 1.144.57 2.24 1.047 3.268l.042.085a6.066 6.066 0 001.336 0l.042-.084a13.897 13.897 0 001.047-3.27A14.138 14.138 0 008 10.5zm2.745.269l-.078.39a14.885 14.885 0 01-.788 2.54 6.013 6.013 0 003.066-2.3 13.772 13.772 0 00-2.2-.63zm-5.49.002l-.314.064c-.647.144-1.277.333-1.886.564a6.016 6.016 0 003.065 2.3 14.91 14.91 0 01-.865-2.928zm-2.702-5.29l-.081.184A5.981 5.981 0 002 8c0 .9.198 1.755.554 2.522.817-.321 1.67-.57 2.55-.743a15.093 15.093 0 010-3.56c-.88-.17-1.733-.42-2.55-.739zm10.893-.002l-.033.015c-.808.312-1.65.557-2.518.727a15.025 15.025 0 010 3.56c.88.17 1.734.42 2.552.739C13.802 9.754 14 8.9 14 8c0-.9-.198-1.754-.554-2.52zm-7.352.901l-.031.286a14.173 14.173 0 00.03 2.956 15.145 15.145 0 013.813-.002 14.148 14.148 0 00.001-3.242 15.145 15.145 0 01-3.813.002zM8 2c-.226 0-.449.012-.668.037l-.042.084a13.902 13.902 0 00-1.047 3.27 14.139 14.139 0 003.514 0A13.864 13.864 0 008.71 2.12l-.042-.084A6.066 6.066 0 008 2zm-1.88.3l-.057.02A6.016 6.016 0 003.056 4.6c.707.269 1.442.48 2.199.63.19-1.017.482-1.997.866-2.93zm3.76 0l.005.014c.38.929.67 1.904.86 2.915.757-.149 1.492-.36 2.2-.627A6.015 6.015 0 009.88 2.3z"
                                    ></path>
                                  </svg>
                                </span>
                                <span
                                  data-v-53ae356f=""
                                  data-v-2c13d262=""
                                  className="text"
                                >
                                  English
                                </span>
                                <i
                                  data-v-c3cf29f8=""
                                  data-v-53ae356f=""
                                  className="icon eds-icon"
                                  data-v-2c13d262=""
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M9.18933983,8 L5.21966991,11.9696699 C4.9267767,12.2625631 4.9267767,12.7374369 5.21966991,13.0303301 C5.51256313,13.3232233 5.98743687,13.3232233 6.28033009,13.0303301 L10.7803301,8.53033009 C11.0732233,8.23743687 11.0732233,7.76256313 10.7803301,7.46966991 L6.28033009,2.96966991 C5.98743687,2.6767767 5.51256313,2.6767767 5.21966991,2.96966991 C4.9267767,3.26256313 4.9267767,3.73743687 5.21966991,4.03033009 L9.18933983,8 Z"></path>
                                  </svg>
                                </i>
                              </li>
                              <div
                                data-v-0935b9f0=""
                                data-v-7e76b0d8=""
                                data-v-53ae356f=""
                                className="eds-popper"
                                data-v-2c13d262=""
                                style={{ display: 'none' }}
                              >
                                <ul
                                  data-v-7e76b0d8=""
                                  className="eds-dropdown-menu"
                                  style={{ maxWidth: '440px' }}
                                >
                                  <li
                                    data-v-46ea7fda=""
                                    data-v-53ae356f=""
                                    className="eds-dropdown-item selected-lang"
                                  >
                                    {' '}
                                    English{' '}
                                  </li>
                                  <li
                                    data-v-46ea7fda=""
                                    data-v-53ae356f=""
                                    className="eds-dropdown-item"
                                  >
                                    {' '}
                                    Bahasa Malaysia{' '}
                                  </li>
                                  <li
                                    data-v-46ea7fda=""
                                    data-v-53ae356f=""
                                    className="eds-dropdown-item"
                                  >
                                    {' '}
                                    简体中文{' '}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </ul>
                          <div
                            data-v-53ae356f=""
                            className="dropdown-splitter"
                          ></div>
                          <ul data-v-53ae356f="">
                            <li
                              data-v-53ae356f=""
                              className="account-dropdown-item"
                            >
                              <span
                                data-v-53ae356f=""
                                className="icon logout-icon"
                              >
                                <svg
                                  viewBox="0 0 15 14"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M9 1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-1.5a.5.5 0 0 0-1 0V13H1V1h7v1.5a.5.5 0 0 0 1 0V1Z"></path>
                                  <path d="M10.354 3.856a.5.5 0 0 1 .707 0l2.828 2.829a.5.5 0 0 1 0 .707l-.004.004-2.824 2.824a.5.5 0 1 1-.707-.707l2.01-2.01H4.5a.5.5 0 1 1 0-1h7.793l-1.94-1.94a.5.5 0 0 1 0-.707Z"></path>
                                </svg>
                              </span>
                              <span data-v-53ae356f="" className="text">
                                Logout
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABdCAYAAAA2ejFOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAwrSURBVHgB7ZxbbBTXGce/M7e9ry/xdY1vIQFCVRISO6JpaDCKipKmRH0hiuAxDyBVlZASXqq2UvJWVU0eKjVShcpDoya0L4WKyoLGoU1EKmgKDS2hXOJgbDC+4b14dmZn5vQ7Z9dmF+/Ozu6O7SWanzR7mZ2Znf3P933nO985swAeHh4eHh4eHh4eHh4eHh4edQiBVYJSKsDwcCM0NgZB0wJgWSKIpgKCYIIp6vxZ01IQDMbJM8+o8ICx4kLSkZEwSFIbUC3sfCdZRWGnyfbtc/CAsGJCcgs8ebID/EILVIvELBWSoMJdMjSUhDpmRYSkX474YVTvA1FUwE2ylmouvWfhgS3FkKRsuFDVNJ5HaqUvhOtCchHH6fqSP3CtYKJKZB6kyCQZGMiAy7gqJD13ToZ0fEPdiXg/ijjrtqDuCjkyvMl1d14pWPxVItdKifn7Mzxx6BNl8WWw4PSep5XzdodzTUh66lQ7KNAODxLM3SOZUfL4rlT+6pyI/aIsfYbPjbhQk8LOVwflj0oeClyAu/SDJiKDhaB5cT2P63lIksSWPsiKyCACWDvsDuWKkGAkHjwR88HGkRtDjpyQ54HQ0dyqOUtSjtgdwh0hVd15sl2PMMvUE+vp0aO8kfzBVgLpdHrO1M0hdOmhlCg9/OpWMmp3iJpjJHeLMXMD1A34k6INUdi4+W00qwEUaRxSyXfh4vljZXfVYZI8//wkVEHtFjkKdWSNKGJH50768CMnuIgMQeiCSPQteGLwjbK7Yy9s0SorpXYhM5k6SHdQwIZojPb1Haah0NskEIywtfT2GFg3rgIk4wCBwD54fOCA7WGYizc3V9WlrV3IkCjDmoIidnfvpc0tR9H6BkDx8bVMQGP4j2COHMfnP+D7a4CVpf2w5cm9toer0iprF9JS1qgXk2eFsnwICOFWiC6dPa1L/1rakqJFmiPH0EJv4oUP74fYuljJwzKr7OyMQoXULuTCguv91vIQsLq7DyxZYT5C9idx0e7DQDHRzaPQ1fOm7eGNZANUSO1CEmLCqoFW2NY+QPv7jhJZ3r9khYXnA3R2qvjuugbGJ8PAG6JHHxso+TWyLwQVUruQAX11qtkBX8Tq6TlEw+HD2M/YaLstClYKZqkYLwk0Nu0vuRG6N70wXJGYEtTKrYUUdPhhRWFWGAq9RQiJgQtY/zwJ1sSpQdCmTxBh20FRfvHyso1mlQA+ppwes2aLJHv26AXFVjcJKGiFvTkrdCgipeU3Sd/C5TZQMGKE3ilx3HRF+XHtFskglFWfKw7QtnTEhmjAz6wwUtF+Jl7TcJlGV8daxMwAiE9tASH8/QRcubR8mwrjpDt97aRhgVvwlKb/MA0G3oFKRWRYFhDMJUlbGRtJ9gLxf5dgOjRU4jgi5pOOOxvuCClikdQNunv2Fk1pKsHAbIwJ+VQjCINBDA+lf6J54Qzr8eyGSEPxC9ba6jifdEfIWlm0wvzEulrMbLgmIoa4Jhw6txGT55q6FoHe/uJWKQgBcIg7QgZI1c221d1zoGYrzIdilDENIHInSynZuYE4gB4qFW+EzKv/IRAI7i76oWiuskWKUuWFC55Y95dOrGuAsjxSeijXgKOafoybXcUzGTp2jSXoG4u6dwX5ZM1C8sqynnHsAoUpTZnEuloMtEhfJzs7FNPCxQChE3s7orFs0yX37ogtO5dzYEWwQukoG6k9/VFvYzBy6NkuJ9Yl0bCzFelAY/Qx88QFBRTSQBrvAJ1Z/tUoJiGtsZ2vEy1yndBBg5DwPLUG8QjHPgiGfoWt9yTmy7a5cu1CGnI7lKv/MCts7TxAJGkvrAaswWFxMrgBaOoiKoUtuaUDCRUX0sK6pbCuf+AiobE40KHFpB5teAe696+x9W7Ct9N2X1mTkPTvf24CWmYcu9rEukaohhbo780KaeWEDN8tvu3kTYwywoYf+pt/clSdO6sDjShAEuuBZLuOPmA1yjk7q6xaSB4bEzOF1kgELL1Y2csZCEVoe9s7rrXGlcKFfAjPSeLuzeIkIcWHqBarRS919UZeurLw3rINDFOBjo42fHWr1NdV39iwIdhisyqYmDjIbbW2HFgzERm8AiShmD3cGnmstAHFxDQoYNP46a12LXhVQtKRkRbQzeblH6A14mLcuLCX3riyG9YYml4AEng029hgnKR66UyGzt5hPSL70dCE3Jc//p1PxULyA4lmyVbX/Oq/+/EHHKKpxKrGxKIw9/Z1YwHiIayrmEAXSmcyPPckpMv2eIvj30XErEhIamQEjIvrS31ujF1+2dJUPlJXskq9mjBxcBHCW7lV0qn+0tuykUZBKJ+WsXhZREzHQmILDfCPv3XbzTaj2sI9d1ZTbKgW1hqKdWfSsB2s2W+iqPf6DUkc2/ltSyvclrN6cIsUBGdexMRMzfbljzZWYpFNYFL7LN+yChoXmqiDKeAsOccOg9D4SsHqWyjgERTyqr+gM+E8HBEsaGRbco4jIemnn2YTbxuMueWVZnpnAuoBjNcgPLGtoOD7qKbBB9euwLOJBFTPvZbcqUVGy00glQK+ZWdkTY5DXaAu8DAjfXtXweqOvNBDchMLSmGZR4Yy+s8PGebHhQYTF7iBORRSLV9O8jckKCGFJohxkqqOx49WFJqcB9KxDsTHthb9nDS32e0NFo3HgN7dS40Tf8lov7w39YWSMIuVZYXEjfDRWYFTlPx/Wrb/+CjUBdiYsIZHeHoHF/R++DrLulx8Z4KVth+9J0svvEBI6EMiPX3/71ScWKTotEwm9m9+F3OxL/LXWaP/g7qBpThYzJCGdoOwfvPSauHxbdgPjzL/tY9F4vYJSfnxQUl8ttDzNjYI5fvag60yjDkfbZVb1h3MzIy/mWvBCRtDYb0Ge9dZJVhtcm6an4v47C4QNj/JV5PmVv4pqOpHUCXlLXK0wsJGU9uE/MjW14g/8lNMEc7imrh1/VIc6gUssTExeZkNBcyJyNx6wtFk1GJcnk+7M65dBKl303G0gHsnZhivU0nal7dJfinGblSfYKQvdCUjE8HjZXM+f6DyHEvHatAMihmNYmvN8kh6E8a++hlUgyTqrLxWdurzikxtvjE+AHfvHuavZfF3sGnTL1Cu8lMk+Anhlp//+wRaUAx7Ijdhy5bvwVpCzTny3K6x8hZ5dioDHc3gKj1d52Duzll0r0EwYR98/lkUIpGs9bKpBosBxzLZ63sCa3oM49g+tNAYN2I5eBzWmsl5Pufc0WR8+vGH33D9triJ210wcfU36P5deZ7NXhBK6eKJsRfZl7z8zx7YW4pjrOIX8NRzr8BaIuPQ2Leyk/edJeSpjLuNBTFIJuKfUn2+NwxTPQ2mSsHAPrGxQPA1EBN7IvgMloqt/gLwhb03VayGLagZU3tfbe19DbTU2t3zyG7BG5tdKiY4a2wazHnQxSZwC9YzSyckTY2rifmZ97HxOK0QoU8gVKKWxRaRWSKbM8rG+6lATJEIGd2k0waBW6I/NO2bmYpI0bAuiz4Ls2Vn8dVNTGmSz8TL4UhIsu3FOB0Z1l27YVNWUEvZJMFoUjL1aaqqaV3Xb2PzLBFiShZ2JCxKefMjEJHiSiNJBDPgEzQqBTU5EIgrkZCaEQRLXgsRWQPzncJ/N3Ce/kiZSRwx7AY3wOGIYFOLnlECs4aKI6CGgS6aFk2dCn7BImlNE9mJGZB7lCQrKPlMShQLRIFKfp8hB/wGKKFVnHadg7n0zdllKVdFd37RT/7aW7Ym6QaGUXhea2F1xeAiTl3Pd+lFKhuzGZ+5iT0Dd6bw2cGEy1/qARsRGRUJyQfIp+avr4qY9UQZERlV3dTJZ7K2N/bycvtKsHih6uHfCExM/aYSY+Xm/tR0dyw9c6odm9/a79Vmc9AlkoIOcZ70D6ULvoN1USdVBTSxAXs9oVUTl/9VjjrBMhYnm9d+mzGzzs6mdaxS7HgnZnEZEuf36NxaiJe72nnfxZ6U7JRkvWVFRGV3aIjWNCbb007Pi+Hef1owQdkPVKxQQXdSlnSIZyyQZR2aUTgsOVVygiW/78sR9uSHG3qrK5bKvELOTDu1wGW7w9cAHMljvfIQ3CEN4MNnJ7GbeUVASUImlarEK0rxtRAyn5z7i9ATDkFSyf6ZXVQWVsIrPDw8PDw8PDw8PDw8PDw8PDw8PDw8PDz+D/CE/10MWEbjAAAAAElFTkSuQmCC"
                              alt=""
                            ></img>
                          </div>
                          <div data-v-598f8d5a="" className="tips-mian">
                            <div data-v-598f8d5a="" className="tips-main-title">
                              {' '}
                              Mass Convert Product From Other Platform{' '}
                            </div>
                            <span
                              data-v-598f8d5a=""
                              className="tips-mian-content"
                            >
                              <span className="keyword-highlight"></span>
                              Shopee can help sellers mass convert products from
                              other platforms. You can submit a convert request
                              and Seller can upload converter files in Batch
                              tools &gt; Mass Upload.
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
                                                    style={{
                                                      position: 'relative',
                                                    }}
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
                            <div
                              data-v-4d24e1ee=""
                              className="filter-col-right"
                            >
                              <div
                                data-v-4d24e1ee=""
                                className="shopee-form-item"
                              >
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
                                                    Check Details of My shop
                                                    Listing Published Limit{' '}
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
                                                  Already Published Products =
                                                  All Products - Delisted
                                                  Products - Shopee Deleted
                                                  Products{' '}
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
                                  <div
                                    data-v-3c32dae2=""
                                    className="view-modes"
                                  >
                                    <div
                                      data-v-3c32dae2=""
                                      className="view-model-item view-radio active"
                                    >
                                      <i
                                        data-v-3c32dae2=""
                                        className="list-view"
                                      >
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
                                      <i
                                        data-v-3c32dae2=""
                                        className="grid-view"
                                      >
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
                                          <th
                                            colSpan={1}
                                            rowSpan={1}
                                            className=""
                                          >
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
                                          <th
                                            colSpan={1}
                                            rowSpan={1}
                                            className=""
                                          >
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
                                          <th
                                            colSpan={1}
                                            rowSpan={1}
                                            className=""
                                          >
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
                                                                maxWidth:
                                                                  '320px',
                                                              }}
                                                            >
                                                              <div className="shopee-popover__content">
                                                                {' '}
                                                                Stock refers to
                                                                the total stock
                                                                that seller has,
                                                                including those
                                                                reserved for
                                                                promotions. If a
                                                                product has
                                                                reserved stock
                                                                for promotions,
                                                                the quantity
                                                                displayed will
                                                                include stock
                                                                that is
                                                                available for
                                                                sale.{' '}
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
                                          <th
                                            colSpan={1}
                                            rowSpan={1}
                                            className=""
                                          >
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
                                                              Boost your
                                                              products and check
                                                              Boost Details in
                                                              this column{' '}
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
                                          <th
                                            colSpan={1}
                                            rowSpan={1}
                                            className=""
                                          >
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
                                            style={{
                                              left: '0px',
                                              width: '0px',
                                            }}
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
          </div>
          <div data-v-e3436124="" className="floating-box"></div>
          <div></div>
        </div>
        <Footer></Footer>
      </body>
    </div>
  );
}
