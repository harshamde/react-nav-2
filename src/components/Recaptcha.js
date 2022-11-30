import logo from './logo.svg';
import './App.css';

import ReCAPTCHA from 'react-google-recaptcha'





const Recaptcha = () => {
  let val = ""
  function onChange(value) {
    val = value;
  }

  async function verifyCaptcha() {
    console.log('Captcha value:', val);

    let url = "http://localhost:8080/verify"
    const response = await fetch(url, {
      body: val,
      method: "post"
    });

    console.log(response);
  }

  return (
    <div className="App">
      <ReCAPTCHA
        sitekey=""
        onChange={onChange}
      />

      <button onClick={verifyCaptcha} >Submit</button>
    </div>
  );
};


export default Recaptcha;
