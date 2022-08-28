import React from 'react';
import {Modal} from 'antd';
import {Button, Form, Input, Select} from 'antd';
import {purchase} from '../../features/cartSlice';
import {toggleModal} from '../../features/modalSlice';
import {useAppDispatch, useTypedSelector} from '../../hooks/useTypedSelector';
import styles from "../Filter/Filter.module.scss";
import {Field, Formik} from "formik";
import {SearchOutlined} from "@ant-design/icons";
import * as Yup from 'yup'
import {getGods} from "../../features/godsSlice";

const PurchaseModal: React.FC = () => {
  const {isVisible} = useTypedSelector(({purchaseModal}) => purchaseModal)
  const {cart} = useTypedSelector((state) => state.cart.cartSLice)

  const dispatch = useAppDispatch()

  const handleOnCancel = () => dispatch(toggleModal())

  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    creditCard: ''
  }
  const validationSchema = Yup.object({
    firstname: Yup.string()
      .min(3, 'Must be 15 characters or less')
      .required('Required'),
    lastname: Yup.string()
      .min(5, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    creditCard: Yup.string()
      .min(16, 'Must be 16 characters')
      .max(16, 'Must be 16 characters')
      .required('Required')
  })
  const formSubmit = (values: any, {setSubmitting }: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    handleOnCancel()
    dispatch(purchase(true))
  }

  return (
    <Modal
      title='Purchase Modal'
      visible={isVisible}
      onCancel={handleOnCancel}
      footer={null}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={(values: any, {setSubmitting }: any) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          handleOnCancel()
          dispatch(purchase(true))
        }}
        validationSchema={validationSchema}
      >{({errors, touched}) => (
          <Form className={styles.wrapper__form}>
            <Field
              className={styles.form__searchInput}
              placeholder='First name'
              type='text'
              name='firstname'
            />
            {errors.firstname && touched.firstname ? (
              <span>{errors.firstname}</span>
            ) : ''}
            <Field
              className={styles.form__searchInput}
              placeholder='Last name'
              type='text'
              name='lastname'
            />
            {errors.lastname && touched.lastname ? (
              <span>{errors.lastname}</span>
            ) : ''}
            <Field
              className={styles.form__searchInput}
              placeholder='Email'
              type='email'
              name='email'
            />
            {errors.email && touched.email ? (
              <span>{errors.email}</span>
            ) : ''}
            <Field
              className={styles.form__searchInput}
              placeholder='xxxx xxxx xxxx xxxx'
              type='string'
              name='creditCard'
            />
            {errors.creditCard && touched.creditCard ? (
              <span>{errors.creditCard}</span>
            ) : ''}

            <button
              type='submit'
            >Submit</button>
          </Form>
        )}
      </Formik>
    </Modal>
  )
}


export default PurchaseModal;
