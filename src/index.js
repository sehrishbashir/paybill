import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import CustomRouter from './CustomRouter';
import * as serviceWorker from './serviceWorker';

import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import Card from './Card'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './cardUtils'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
//   window.alert(JSON.stringify(values, 0, 2))
}


const App1 = () => (
  <Styles>
    <App />

    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        form,
        submitting,
        pristine,
        values,
        active
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Card 
              number={values.number || ''}
              name={values.name || ''}
              expiry={values.expiry || ''}
              cvc={values.cvc || ''}
              focused={active}
            />
            <div>
              <Field
                name="number"
                component="input"
                type="text"
                pattern="[\d| ]{16,22}"
                placeholder="Card Number"
                format={formatCreditCardNumber}
              />
            </div>
            <div>
              <Field
                name="name"
                component="input"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <Field
                name="expiry"
                component="input"
                type="text"
                pattern="\d\d/\d\d"
                placeholder="Valid Thru"
                format={formatExpirationDate}
                />
              </div>
              <div>
              <Field
                name="cvc"
                component="input"
                type="text"
                pattern="\d{3,4}"
                placeholder="CVC"
                format={formatCVC}
                />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting}  data-toggle="modal" data-target="#exampleModalCenter">
                Pay Now
              </button>
              <div className="modal fade"  id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <h1>Thank you for paying</h1>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={e => window.open('/over-view-page', '_self')}>Close</button>
                    </div>
                  </div>
                </div>
              </div>

              <button 
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            {/* <h2>Values</h2>
            <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </form>
        )
      }}
    />
    
  </Styles>
)

ReactDOM.render(<App1 />, document.getElementById('root'))
// ReactDOM.render(<App />, document.getElementById('root'));
