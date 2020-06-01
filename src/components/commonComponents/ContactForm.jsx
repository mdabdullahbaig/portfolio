import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { TextField } from "@material-ui/core";
import TransitionWraperCard from "./TransitionWraperCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ContactFormSchema = yup.object().shape({
  clientName: yup.string().required(),
  clientEmail: yup
    .string()
    .email()
    .required(),
  clientSubject: yup.string().required(),
  clientMessage: yup.string().required()
});

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: ContactFormSchema
  });
  const notify = () =>
    toast("Sent Successfully!", {
      autoClose: 2000
    });

  const onSubmit = (data, e) => {
    async function postMessage() {
      // call to server
      const promise = axios.post(
        process.env.REACT_APP_URL,
        data
      );
      const response = await promise;
    }
    postMessage();
    e.target.reset();
    notify();
  };

  return (
    <TransitionWraperCard>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          inputRef={register}
          name="clientName"
          label="Your Name"
          error={!!errors.clientName}
          helperText={errors.clientName ? "This field is required!" : ""}
        />
        <br />
        <TextField
          inputRef={register}
          name="clientEmail"
          label="Your Email"
          error={!!errors.clientEmail}
          helperText={errors.clientEmail ? "Must be an email!" : ""}
        />
        <br />
        <TextField
          inputRef={register}
          name="clientSubject"
          label="Subject"
          error={!!errors.clientSubject}
          helperText={errors.clientSubject ? "This field is required!" : ""}
        />
        <br />
        <TextField
          inputRef={register}
          name="clientMessage"
          label="Message"
          error={!!errors.clientMessage}
          helperText={errors.clientMessage ? "This field is required!" : ""}
        />
        <br />
        <button type="submit" className="btn btn-outline-success">
          Send
        </button>
      </form>
    </TransitionWraperCard>
  );
}

export default ContactForm;
