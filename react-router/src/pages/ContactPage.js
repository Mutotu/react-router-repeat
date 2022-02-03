const ContactPage = (props) => {
  let myPerson = "Muto";
  return (
    <>
      <main>This is the ContactPage</main>
      <h1>Hello {props.myPerson}</h1>
    </>
  );
};

export default ContactPage;
