import React from 'react';
import {Button} from 'antd';
import styles from './Filter.module.scss';
import {Field, Form, Formik} from 'formik';
import {SearchOutlined} from '@ant-design/icons';
import {getGods} from '../../features/godsSlice';
import {useAppDispatch} from '../../hooks/useTypedSelector';

const Filter: React.FC = () => {
  const dispatch = useAppDispatch()
  const initialValues = {
    title: '',
    minPrice: '',
    maxPrice: '',
    category: []
  }

  const formSubmit = (values: any) => {
    dispatch(getGods({...values, fromForm: true}))
  }

  return (
    <section className={styles.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={formSubmit}
      >
        <Form className={styles.wrapper__form}>
          <div className={styles.form__search}>
            <Field
              className={styles.form__searchInput}
              placeholder='Search'
              type='text'
              name='title'/>
          </div>
          <div className={styles.wrapper__price}>
            <Field name='minPrice' type='number' placeholder='min'/>
            <Field name='maxPrice' type='number' placeholder='max'/>
          </div>
          <Button
            type='primary'
            htmlType='submit'
            icon={<SearchOutlined/>}
          >Search</Button>
        </Form>
      </Formik>
    </section>
  )
}

export default Filter;
