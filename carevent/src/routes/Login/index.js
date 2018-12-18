import React, { Component } from 'react'
import { connect } from 'dva'
import { Alert, Card, Form } from 'antd'
import Login from '../../components/Login'
import styles from './Login.less'

const { UserName, Password, Submit } = Login
@Form.create()
@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
export default class LoginPage extends Component {
  state = {}

  handleSubmit = (err, values) => {
    if (!err) {
      this.props.dispatch({
        type: 'login/login',
        payload: {
          authProvider: 'localauthconfig',
          code: `${values.userName}:${values.password}`,
        },
      })
    }
  }

  renderMessage = (content) => {
    return (
      <Alert
        style={{ marginBottom: 24 }}
        message={content}
        type="error"
        showIcon
      />
    )
  }

  render() {
    const { login, submitting } = this.props
    return (
      <div className={styles.main}>
        <Card style={{ borderRadius: '10px' }}>
          <Login
            defaultActiveKey="account"
            onTabChange={this.onTabChange}
            onSubmit={this.handleSubmit}
            form={this.props.form}
          >
            {login.status === 'error' &&
              submitting === false &&
              this.renderMessage(login.message || 'username or password error')}
            <UserName name="userName" placeholder="username" />
            <Password name="password" placeholder="password" />
            <Submit loading={submitting}>Login</Submit>
          </Login>
        </Card>
      </div>
    )
  }
}
