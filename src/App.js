import { useEffect, useState} from 'react';
import './App.css';
import { Header } from './componentes/Header/Header';
import Products from './componentes/Products/Products';
import { getProducts } from './products';
import { useFilters } from './hooks/useFilters';
import Navbar from './NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailContainer from './componentes/DetailContainer/DetailContainer';
import { ChakraProvider } from '@chakra-ui/react';
import Cart from './componentes/Cart/Cart';
    
    function App() {
      const { filterProducts} = useFilters()
      const [products, setProducts] = useState([])

      useEffect(() => {
        getProducts(setProducts)
      }, [])

  

      const filteredProducts = filterProducts(products)


  return(
    <ChakraProvider>
        <Cart/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products products={filteredProducts}/>}/>
          <Route path="/detail/:id" element={<DetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
    
  )
}

export default App;
