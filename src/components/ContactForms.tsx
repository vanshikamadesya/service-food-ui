import React, { useState } from 'react';
import { Formik, Form, ErrorMessage, Field, FieldProps } from 'formik';
import * as Yup from 'yup';
import TitleSection from './TitleSection';

interface ContactFormProps {
  title?: string;
  showDivider?: boolean;
  titleAlignment?: 'left' | 'center' | 'right';
  titlePosition?: 'top' | 'bottom';
  buttonAlignment?: 'left' | 'center' | 'right';
  buttonPosition?: 'top' | 'bottom';
}

const ContactForm: React.FC<ContactFormProps> = ({
  title = 'CONTACT US',
  showDivider = true,
  titleAlignment = 'center',
  titlePosition = 'top',
  buttonAlignment = 'right',
  buttonPosition = 'bottom',
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const branches = ['HAMILTON PRODUCE', 'CHRISTCHURCH/CANTERBURY', 'AUCKLAND FOODSERVICE', 'TARANAKI', 'GREYMOUTH'];

  // Validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string(),
    branch: Yup.string().required('Required'),
    subject: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  });

  // Button alignment class
  const buttonAlignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className="w-full bg-[#EFEBE7] font-inter">
      <div className="container mx-auto px-4 py-16 max-w-4xl ">
        {titlePosition === 'top' && (
          <TitleSection 
            title={title} 
            showDivider={showDivider}
            titleAlignment={titleAlignment}
            titlePosition={titlePosition}
            className="mb-2"
          />
        )}

        <Formik
          initialValues={{ fullName: '', email: '', phoneNumber: '', branch: '', subject: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
          }}
        >
          {({ setFieldValue, values }) => (
            <Form className="space-y-4 md:space-y-8 w-full px-5 md:px-0 mt-10 md:mt-0">
              {buttonPosition === 'top' && (
                <div className={`${buttonAlignmentClass[buttonAlignment]} mt-4 md:mt-8`}>
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-10 py-2 text-white  rounded-lg bg-[#86704D] text-lg font-medium border-2 border-[#86704D] hover:bg-[#7a664a] transition-colors duration-300"
                  >
                    Send
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
                {['Full Name', 'Email'].map((label, i) => (
                  <div key={i} className="mb-0">
                    <label className="block mb-1 md:mb-4 text-[#666666] text-lg">{label}</label>
                    <Field
                      type={label === 'Email' ? 'email' : 'text'}
                      name={label.toLowerCase().replace(' ', '')}
                      className="w-full p-3 md:p-4 border rounded-lg focus:outline-none border-[#777777]"
                      required
                    />
                    <ErrorMessage name={label.toLowerCase().replace(' ', '')} component="div" className="text-red-500 text-sm mt-0.5" />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
                <div className="mb-0">
                  <label className="block mb-1 md:mb-4 text-[#666666] text-lg">Phone Number</label>
                  <Field name="phoneNumber">
                    {({ field, form }: FieldProps) => (
                      <input
                        {...field}
                        type="tel"
                        className="w-full p-3 md:p-4 border rounded-lg focus:outline-none border-[#777777]"
                        onChange={(e) => {
                          const value = e.target.value;
                          const filteredValue = value.replace(/[^0-9+]/g, '');
                          form.setFieldValue(field.name, filteredValue);
                        }}
                      />
                    )}
                  </Field>
                  <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-0.5" />
                </div>

                <div className="relative mb-0">
                  <label className="block mb-1 md:mb-4 text-[#666666] text-lg">Service Foods Branch</label>
                  <button
                    type="button"
                    className="w-full p-3 md:p-4 border rounded-lg text-left flex justify-between items-center bg-white focus:outline-none border-[#777777] text-[#666666]"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <span>{values.branch || '(Select an option)'}</span>
                    <svg 
                      className={`w-5 h-5 md:w-6 md:h-6 text-gray-400 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div 
                    className={`absolute z-10 w-full overflow-hidden transition-all duration-300 ease-in-out ${
                      dropdownOpen ? 'max-h-60 opacity-100 mt-1' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="bg-white border rounded-lg shadow-lg overflow-auto border-[#777777]">
                      {branches.map((branch, i) => (
                        <li
                          key={i}
                          className="p-3 md:p-4 hover:bg-gray-200 cursor-pointer transition-colors duration-200"
                          onClick={() => {
                            setFieldValue('branch', branch);
                            setDropdownOpen(false);
                          }}
                        >
                          {branch}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ErrorMessage name="branch" component="div" className="text-red-500 text-sm mt-0.5" />
                </div>
              </div>

              <div className="mb-0">
                <label className="block mb-1 md:mb-4 text-[#666666] text-lg">Subject</label>
                <Field 
                  type="text" 
                  name="subject" 
                  className="w-full p-3 md:p-4 border rounded-lg focus:outline-none border-[#777777]" 
                  required 
                />
                <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-0.5" />
              </div>

              <div className="mb-0">
                <label className="block mb-1 md:mb-4 text-[#666666] text-lg">Message</label>
                <Field 
                  as="textarea" 
                  name="message" 
                  className="w-full p-3 md:p-4 border rounded-lg focus:outline-none h-48 md:h-64 border-[#777777]" 
                  required 
                />
                <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-0.5" />
              </div>

              {buttonPosition === 'bottom' && (
                <div className={`${buttonAlignmentClass[buttonAlignment]} mt-4 md:mt-8`}>
                  <button 
                    type="submit" 
                    className="w-full md:w-auto px-8 py-2 md:px-10 md:py-2 text-white rounded-lg bg-[#86704D] text-base md:text-lg font-medium border-2 border-[#86704D] hover:bg-[#7a664a] transition-colors duration-300"
                  >
                    Send
                  </button>
                </div>
              )}
            </Form>
          )}
        </Formik>

        {titlePosition === 'bottom' && (
          <TitleSection 
            title={title} 
            showDivider={showDivider}
            titleAlignment={titleAlignment}
            titlePosition={titlePosition}
            className="mt-8" 
          />
        )}
      </div>
    </div>
  );
};

export default ContactForm;
