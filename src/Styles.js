import styled, { css } from 'styled-components'

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

const btnDanger = btn('#e27c79', '#c9302c')

export default styled.div`

  .loading {    
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin: 50px;
  }

  form,
  div.form {
    background-color: #eff1f2;
    text-align: left;
    max-width: 300px;
    margin: 10px auto;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 10px;

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      border: 1px solid transparent;
      &.active {
        background-color: paleturquoise;
        border-color: turquoise;
      }
      & > label {
        color: #333;
        width: 110px;
        min-width: 60px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > .downshift > input,
      & > select,
      & > textarea {
        outline: none;
        margin-bottom: 5px;
        flex: 1;
        padding: 4px 5px;
        margin: 0 10px;
        font-size: 12px;
        border: none;
        border-bottom: 2px solid #017278;
        background: transparent;
        &[disabled] {
          background: #eee;
        }
      }
      & > input[type='checkbox'] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          margin-left: 0;
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
        &.downshift {
          margin-left: 0;
          padding-left: 15px;
          flex: 1;
          & > input {
            width: 100%;
            padding: 6px 5px;
            font-size: 1em;
            margin-left: 0;
            border: 1px solid #ccc;
            border-radius: 3px;
          }
        }
      }
      & > span {
        line-height: 32px;
        margin-left: 10px;
        color: #800;
        font-weight: bold;
      }
      & > button.remove {
        ${btnDanger};
      }
    }
    & > .buttons {
      outline: none;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      margin-top: 15px;
    }

    .error {
      display: flex;
      font-weight: bold;
      color: #800;
      flex-flow: row nowrap;
      justify-content: center;
    }
    pre {
      position: relative;
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
    .submitting {
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      padding: 0;
      text-align: center;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      z-index: 10;
      font-weight: bold;
      font-size: 0.8em;
    }
    .saving {
      font-size: 0.8em;
      font-weight: bold;
      color: darkblue;
      margin: 8px 0 0 7px;
    }
  }
  button {
    &[type='submit'] {
      outline:none;
      padding: 5px 55px;
      border-radius: 100px;
      border: 1px solid #017278;
      background-color: #017278;
      color: #ffffff;
      font-weight: 800;
      box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.75);
    }
    &[type='button'] {
      padding: 5px 25px;
      border-radius: 100px;
      border: 1px solid #362e67;
      background-color: #362e67;
      color: #ffffff;
      font-weight: 800;
      box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.75);
    }
  }
  .downshift-options {
    border: 1px solid #ddd;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    & > div {
      padding: 3px 5px;
    }
  }

  .modal-content{
    width: 100%;
    padding: 20px;
    border: 1.5px solid #ffffff;
    background-image: url(https://www.faysalbank.com/wp-content/themes/faysalbank/images/footer-barkat-pattern.jpg);
  }
  .modal-body h1{
    text-align: center;
    color: #ffffff;
    font-size: 25px;
    padding: 0;
  }
`
