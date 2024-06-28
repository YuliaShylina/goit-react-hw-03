// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useId } from "react";
// import { nanoid } from "nanoid";
// import css from "./ContactForm.module.css";

// const ContactForm = ({ onSubmit }) => {
//   const id = useId();

//   const handleSubmit = (values, actions) => {
//     const newContact = {
//       id: nanoid(),
//       name: values.name,
//       number: values.number,
//     };
//     onSubmit(newContact);
//     actions.resetForm();
//   };

//   const validationSchema = Yup.object({
//     name: Yup.string()
//       .required("Required")
//       .min(3, "Name must be at least 3 characters")
//       .max(50, "Name must not exceed 50 characters"),
//     number: Yup.string()
//       .required("Required")
//       .matches(/^[0-9\-]+$/, "Phone number can only contain digits and dashes")
//       .min(3, "Phone number must be at least 3 characters")
//       .max(15, "Phone number must not exceed 15 characters"),
//   });

//   return (
//     <Formik
//       initialValues={{ name: "", number: "" }}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//       validateOnChange={true}
//     >
//       <Form className={css.form}>
//         <div className={css.container}>
//           <label className={css.label} htmlFor={`name${id}`}>
//             Name
//           </label>

//           <Field
//             className={css.input}
//             type="text"
//             name="name"
//             id={`name${id}`}
//             placeholder=""
//           />
//           <ErrorMessage className={css.error} name="name" component="span" />
//         </div>
//         <div className={css.container}>
//           <label className={css.label} htmlFor={`number${id}`}>
//             Number
//           </label>
//           <Field
//             className={css.input}
//             type="text"
//             name="number"
//             id={`number${id}`}
//             placeholder=""
//           />
//           <ErrorMessage className={css.error} name="number" component="span" />
//         </div>
//         <button type="submit" className={css.submitButton}>
//           Add Contact
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// export default ContactForm;

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const id = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    onSubmit(newContact);
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must not exceed 50 characters"),
    number: Yup.string()
      .required("Required")
      .matches(/^[0-9\-]+$/, "Phone number can only contain digits and dashes")
      .min(3, "Phone number must be at least 3 characters")
      .max(15, "Phone number must not exceed 15 characters")
      .test(
        "no-only-dashes",
        "Phone number cannot contain only dashes",
        (value) => value && value.replace(/-/g, "").length > 0
      ),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <div className={css.container}>
            <label className={css.label} htmlFor={`name${id}`}>
              Name
            </label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={`name${id}`}
              placeholder=""
            />
            {touched.name && errors.name && (
              <span className={css.error}>{errors.name}</span>
            )}
          </div>
          <div className={css.container}>
            <label className={css.label} htmlFor={`number${id}`}>
              Number
            </label>
            <Field
              className={css.input}
              type="text"
              name="number"
              id={`number${id}`}
              placeholder=""
            />
            {touched.number && errors.number && (
              <span className={css.error}>{errors.number}</span>
            )}
          </div>
          <button type="submit" className={css.submitButton}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
