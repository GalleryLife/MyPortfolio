import React from 'react';
import styles from './App.module.scss';
import NavMenu from './components/NavMenu/NavMenu';
import {ShoppingCartOutlined} from '@ant-design/icons'
import Catalog from './components/Catalog/Catalog';
import {Link, Route, Routes} from 'react-router-dom';
import Cart from './components/Cart/Cart';

const App: React.FC = () => {
  return (
    <div className={styles.appWrapper}>
      <header className={styles.header}>
        <NavMenu/>
        <a href='./' className={styles.logo}>
          <h1 className={styles.headerLogo}>React-shop</h1>
          <span>online shops</span>
        </a>
        <div className={styles.actions}>
          <Link to='./cart'>
            <ShoppingCartOutlined style={{fontSize: '25px', color: '#000'}}/>
          </Link>
          <button>Eng</button>
        </div>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Catalog/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
