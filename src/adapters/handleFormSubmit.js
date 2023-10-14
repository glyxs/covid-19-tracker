import formDataEncoder from "../helpers/formDataEncoder";

const handleFormSubmit = (
  event,
  submitSuccess,
  errorHandler,
  message,
  email,
) => {
  event.preventDefault();
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formDataEncoder({
      "form-name": event.target.getAttribute("name"),
      message,
      email,
    }),
  })
    .then(() => {
      submitSuccess();
    })
    .catch((error) => {
      errorHandler(error);
    });
};

export default handleFormSubmit;
