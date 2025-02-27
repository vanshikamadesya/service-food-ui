import  { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Field, FieldProps } from 'formik'; // Import FieldProps

import * as Yup from 'yup';

const ContactForm = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const branches = ['HAMILTON PRODUCE', 'CHRISTCHURCH/CANTERBURY', 'AUCKLAND FOODSERVICE', 'TARANAKI', 'GREYMOUTH'];

  // Validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string(), // Additional validation can be added if needed
    branch: Yup.string().required('Required'),
    subject: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  });

  return (
    <div className="w-full bg-[#EFEBE7] font-inter">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-medium text-center mb-12 text-[#3A342B] relative">
          CONTACT US
          <div className="w-16 h-0.5 bg-[#777777] absolute left-1/2 -translate-x-1/2 mt-2"></div>
        </h1>

        <Formik
          initialValues={{ fullName: '', email: '', phoneNumber: '', branch: '', subject: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            alert('Form submitted successfully!');
            console.log(values);
            resetForm();
          }}
        >
          {({ setFieldValue, values }) => (
            <Form className="space-y-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {['Full Name', 'Email'].map((label, i) => (
                  <div key={i}>
                    <label className="block mb-2 text-[#666666]">{label}</label>
                    <Field
                      type={label === 'Email' ? 'email' : 'text'}
                      name={label.toLowerCase().replace(' ', '')}
                      className="w-full p-3 border rounded focus:outline-none border-[#777777]"
                      required
                    />
                    <ErrorMessage name={label.toLowerCase().replace(' ', '')} component="div" className="text-red-500 text-sm" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-[#666666]">Phone Number</label>
                  <Field name="phoneNumber">
                    {({ field, form }: FieldProps) => ( // Explicitly type field and form
                      <input
                        {...field}
                        type="tel"
                        className="w-full p-3 border rounded focus:outline-none border-[#777777]"
                        onChange={(e) => {
                          const value = e.target.value;
                          const filteredValue = value.replace(/[^0-9+]/g, '');
                          form.setFieldValue(field.name, filteredValue);
                        }}
                      />
                    )}
                  </Field>
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm" />
                </div>

                <div className="relative">
                  <label className="block mb-2 text-[#666666]">Service Foods Branch</label>
                  <button
                    type="button"
                    className="w-full p-3 border rounded text-left flex justify-between items-center bg-white focus:outline-none border-[#777777] text-[#666666]"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span>{values.branch || '(Select an option)'}</span>
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <ul className="absolute z-10 w-full mt-1 bg-white border rounded shadow-lg max-h-60 overflow-auto border-[#777777]">
                      {branches.map((branch, i) => (
                        <li
                          key={i}
                          className="p-3 hover:bg-gray-200 cursor-pointer"
                          onClick={() => {
                            setFieldValue('branch', branch);
                            setDropdownOpen(false);
                          }}
                        >
                          {branch}
                        </li>
                      ))}
                    </ul>
                  )}
                  <ErrorMessage name="branch" component="div" className="text-red-500 text-sm" />
                </div>
              </div>

              {['Subject', 'Message'].map((label, i) => (
                <div key={i}>
                  <label className="block mb-2 text-[#666666]">{label}</label>
                  {label === 'Message' ? (
                    <Field as="textarea" name="message" className="w-full p-3 border rounded focus:outline-none h-64 border-[#777777]" required />
                  ) : (
                    <Field type="text" name="subject" className="w-full p-3 border rounded focus:outline-none border-[#777777]" required />
                  )}
                  <ErrorMessage name={label.toLowerCase()} component="div" className="text-red-500 text-sm" />
                </div>
              ))}

              <div className="text-right">
                <button type="submit" className="px-6 py-3 text-white rounded bg-[#86704D]">Send</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
