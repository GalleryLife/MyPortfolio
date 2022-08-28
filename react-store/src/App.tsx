import {Spin} from 'antd';
import React, {Suspense} from 'react';
import styles from './App.module.scss';
import Cart from './components/Cart/Cart';
import Modal from './components/PurchaseModal/PurchaseModal';
import {Route, Routes} from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import {LoadingOutlined, ShoppingCartOutlined} from '@ant-design/icons';
const Catalog = React.lazy(() => import('./components/Catalog/Catalog'));

const antIcon = <LoadingOutlined style={{fontSize: 100}} spin/>

const App: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Modal/>
      <header className={styles.wrapper__header}>
        <a href='./' className={styles.header__logo}>
          <h1 className={styles.logo__title}>React-shop</h1>
          <span>online shops</span>
        </a>
        <nav>
          <ul className={styles.header__nav}>
            <NavMenu rout='/' text='Shop'/>
            <NavMenu rout='/cart' text={<ShoppingCartOutlined style={{fontSize: '25px', color: '#000'}}/>}/>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={
            <Suspense fallback={<Spin indicator={antIcon}/>}>
              <Catalog/>
            </Suspense>
          }/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
