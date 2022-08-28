import Filter from '../Filter/Filter'
import React, {useEffect} from 'react';
import styles from './Catalog.module.scss'
import {getGods} from '../../features/godsSlice';
import Pagination from '../Pagination/Pagination';
import CatalogItem from './CatalogItem/CatalogItem';
import {useAppDispatch, useTypedSelector} from '../../hooks/useTypedSelector';

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch()
  const gods = useTypedSelector((state) => state.gods.gods)

  useEffect(() => {
    dispatch(getGods({}))
  }, [])

  return (
    <div className={styles.wrapper}>
      <Filter/>
      <section className={styles.wrapper__items}>{gods.map(item => (
        <CatalogItem key={item.id} {...item} />))}
      <div className={styles.wrapper__paginator}>
        <Pagination/>
      </div>
      </section>
    </div>
  );
}

export default Catalog;
