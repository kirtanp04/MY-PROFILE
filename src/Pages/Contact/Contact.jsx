/* eslint-disable react/no-unescaped-entities */
import { useFormik } from "formik";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";
import "./contact.css";
import Seo from "../../Seo";
import { FiSend } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import { formSchema } from "../../schemas";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageWrapper from "../../../GlobalMotion/Motion";
import { motion } from "framer-motion";

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const Contact = () => {
  const [show, setShow] = useState(false);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formSchema,
      onSubmit: async (values) => {
        try {
          setShow(true);
          await axios
            .post("https://portfolio-server-6st2.onrender.com/contact", {
              values,
            })
            .then((res) => {
              if (res.data.mess === "sent") {
                setShow(false);
                toast.success("Success!", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              } else {
                setShow(false);
                toast.error("Oops server error!", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
              }
            });
        } catch {
          setShow(false);
          toast.error("Oops server error!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      },
    });
  return (
    <>
      <PageWrapper>
        <Seo
          title={"Kirtan Patel | Contact"}
          desc={"This is my contact page,fell free to connect"}
        />

        <section className="contact section">
          <h2 className="section__title">
            Get In <span>Touch</span>
          </h2>

          <div className="contact__container container grid">
            <div className="contact__data">
              <h3 className="contact__title">Don't be Shy</h3>

              <p className="contact__description">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>

              <div className="contact__info">
                <div className="info__item">
                  <FaEnvelopeOpen className="info__icon" />

                  <div>
                    <span className="info__title">Mail Me</span>
                    <h4 className="info__desc">
                      {" "}
                      <a
                        href="mailto:kirtanpatel6189@gmail.com"
                        style={{ color: "var(--text-color)" }}
                      >
                        kirtanpatel6189@gmail.com
                      </a>
                    </h4>
                  </div>
                </div>

                <div className="info__item">
                  <FaPhoneSquareAlt className="info__icon" />

                  <div>
                    <span className="info__title">Call Me</span>
                    <h4 className="info__desc">
                      <a
                        href="tel:+91-798-448-4483"
                        style={{ color: "var(--text-color)" }}
                      >
                        +91-798-448-4483
                      </a>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="contact__socials">
                <Tooltip title="facebook">
                  <a
                    href="https://www.facebook.com/kirtanp04"
                    className="contact__social-link"
                  >
                    <FaFacebookF />
                  </a>
                </Tooltip>
                <Tooltip title="instagram">
                  <a
                    href="https://www.instagram.com/kirtanp04"
                    className="contact__social-link"
                  >
                    <FaInstagram />
                  </a>
                </Tooltip>
                <Tooltip title="linkedin">
                  <a
                    href="https://www.linkedin.com/in/kirtanp04"
                    className="contact__social-link"
                  >
                    <FaLinkedinIn />
                  </a>
                </Tooltip>
                <Tooltip title="github">
                  <a
                    href="https://github.com/kirtanp04"
                    className="contact__social-link"
                  >
                    <FaGithubAlt />
                  </a>
                </Tooltip>
              </div>
            </div>

            <form className="contact__form">
              <div className="form__input-group">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "spring", delay: 0.2 }}
                  className="form__input-div"
                >
                  <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your Name"
                    className="form__control"
                  />
                  {errors.name && touched.name ? <p>{errors.name}</p> : null}
                </motion.div>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "spring", delay: 0.4 }}
                  className="form__input-div"
                >
                  <input
                    type="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="email"
                    placeholder="Your Email"
                    className="form__control"
                  />
                  {errors.email && touched.email ? <p>{errors.email}</p> : null}
                </motion.div>

                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, type: "spring", delay: 0.6 }}
                  className="form__input-div"
                >
                  <input
                    type="text"
                    name="subject"
                    value={values.subject}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Your Subject"
                    className="form__control"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ y: 100, opacity: 0, scale: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", delay: 0.8 }}
                className="form__input-div"
              >
                <textarea
                  name="message"
                  value={values.message}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="form__control textarea"
                ></textarea>
                {errors.message && touched.message ? (
                  <p>{errors.message}</p>
                ) : null}
              </motion.div>
              {show ? (
                <>
                  <div
                    className="spinner-border "
                    style={{ color: "var(--first-color)" }}
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </>
              ) : (
                <>
                  <motion.button
                    initial={{ opacity: 0,scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring", delay: 1 }}
                    onClick={handleSubmit}
                    className="button"
                  >
                    Send Message
                    <span className="button__icon contact__button-icon">
                      <FiSend />
                    </span>
                  </motion.button>
                </>
              )}
            </form>
          </div>
        </section>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </PageWrapper>
    </>
  );
};

export default Contact;
