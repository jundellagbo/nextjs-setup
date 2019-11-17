import React from 'react'
import Head from 'next/head'

import Link from 'next/link'

import FButton from '@components/customs/button'
import MainLayout from '@components/layout/MainLayout'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'

class Home extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }


  render() {
    const BottomHeader = () => (
      <div className={`d-flex justify-content-between align-items-center f-fullwidth`}>
        <div></div>
        <FButton variant={'primary'} className={'f-border-radius-60'}>Book an Appointment</FButton>
      </div>
    )

    return (
      <MainLayout bottomHeader={<BottomHeader />}>
        <Head>
          <title>EasyCity Homepage</title>
        </Head>
        <div className={'f-card-content'}>
          <p>Content Here</p>
        </div>
      </MainLayout>
    )
  }
}

const mapStateToProps = state => {
  return {
      increments: state.increments,
      todo: state.todo
  }
}

const mapActionToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'increment/increment' }),
    setName: name => dispatch({ type: 'todo/setName', payload: name })
  }
}

export default connect(mapStateToProps, mapActionToProps)(Home)