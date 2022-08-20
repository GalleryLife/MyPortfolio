import React, {useEffect} from 'react';
import {useAppDispatch, useTypedSelector} from '../../hooks/useTypedSelector';
import {getGods} from '../../features/godsSlice';
import CatalogItem from './CatalogItem/CatalogItem';
import styles from './Catalog.module.scss'

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch()
  const {gods} = useTypedSelector(({gods}) => gods)
  const cart = useTypedSelector(({cart}) => cart)
  useEffect(() => {
    dispatch(getGods())
  }, [cart])

  return (
    <div className=''>
      <section className={styles.wrapper}>
        {gods.map(item => (
          <CatalogItem key={item.id} {...item}/>
        ))}
      </section>
    </div>
  );
}

export default Catalog;
