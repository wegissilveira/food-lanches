import React from 'react'

import Layout from './containers/Layout/Layout'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  fab, 
  faFacebookSquare, 
  faGooglePlusSquare, 
  faInstagramSquare, 
  faLinkedin, 
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faHamburger,
  faPizzaSlice,
  faCocktail,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

library.add(
  fab,
  faInstagramSquare,
  faLinkedin,
  faFacebookSquare,
  faTwitterSquare,
  faGooglePlusSquare,
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faHamburger,
  faPizzaSlice,
  faCocktail,
  faChevronLeft,
  faChevronRight
)

function App() {
  return (
    <Layout />
  );
}

export default App;
