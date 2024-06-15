import { useEffect } from 'react';

const HubspotGenericForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '40167629',
          formId: '89efb7ce-1f7e-4db3-93f2-06deeb8dfb5f',
          target: '#hubspotForm',
          onFormReady: function () {
            const style = document.createElement('style');
            style.innerHTML = `
              #hubspotForm .hs-form fieldset {
                border: none !important;
                padding: 0 !important;
              }
              #hubspotForm .hs-form .hs-form-field {
                margin-bottom: 30px !important;
              }
              #hubspotForm .hs-form .hs-form-field.mb-40 {
                margin-bottom: 40px !important;
              }
              #hubspotForm .hs-form .hs-form-field.mb-35 {
                margin-bottom: 35px !important;
              }
              #hubspotForm .hs-form label {
                display: block !important;
                margin-bottom: 5px !important;
              }
              #hubspotForm .hs-form input,
              #hubspotForm .hs-form textarea {
                width: 100% !important;
                padding: 10px !important;
                border: 1px solid #ccc !important;
                border-radius: 5px !important;
                margin-bottom: 15px !important;
              }
              #hubspotForm .hs-form .hs-button {
                display: block !important;
                width: 100% !important;
                padding: 10px !important;
                background-color: #007bff !important;
                color: #fff !important;
                text-align: center !important;
                border: none !important;
                border-radius: 5px !important;
                cursor: pointer !important;
              }
            `;
            document.head.appendChild(style);
          }
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id="hubspotForm"></div>
  );
};

export default HubspotGenericForm;
