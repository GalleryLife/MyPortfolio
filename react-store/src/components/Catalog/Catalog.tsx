import React, {useEffect} from 'react';
import {useAppDispatch, useTypedSelector} from '../../hooks/useTypedSelector';
import {getGods} from '../../features/godsSlice';
import CatalogItem from './CatalogItem/CatalogItem';
import Filter from '../Filter/Filter'
import styles from './Catalog.module.scss'

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch()
  const gods = useTypedSelector((state) => state.gods.gods)
  useEffect(() => {
    dispatch(getGods())
  }, [])

  return (
    <div className={styles.wrapper}>
      <Filter/>
      <section className={styles.wrapperItems}>
        {gods.map(item => (
          <CatalogItem key={item.id} {...item}/>
        ))}
      </section>
    </div>
  );
}

export default Catalog;
