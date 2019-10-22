import React from 'react'
import Loadable from 'react-loadable'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Button } from '../../components/Button'
import { styler, images, colors } from '../../theme'
import { path } from '../../utils/const'

// screens
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import ConfirmEmail from './ConfirmEmail'
import ResetPassword from './ResetPassword'

const styles = styler({
  root: {
    flex: 1,
    display: 'flex',
    height: '100vh',
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: 20,
  },
  fields: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  bg: {
    flex: 1,
    width: '100%',
    objectFit: 'cover',
  },
  cover: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: colors.yellow_to_orange,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  subTitle: {
    color: 'white',
    fontSize: 24,
  },
})

const auth = () => (
  <div className={styles.root}>
    <div className={styles.info}>
      {/* <img src={images.bg} className={styles.bg} /> */}
      <div className={styles.cover}>
        <div className={styles.coverContainer}>
          <img src={images.logo} className={styles.logo}/>
          <p className={styles.title}>React + Firebase Boilerplate</p>
          <p className={styles.subTitle}>Redux, navigation pre-setup template</p>
        </div>
      </div>
    </div>
    <div className={styles.fields}>
      <Switch>
        <Route path={path.login} component={Login} />
        <Route path={path.signup} component={Signup} />
        <Route path={path.profile} component={Profile} />
        <Route path={path.confirmEmail} component={ConfirmEmail} />
        <Route path={path.resetPassword} component={ResetPassword} />
        <Redirect to={path.login} />
      </Switch>
    </div>
  </div>
)

export default auth
