import ContactForms from "../components/ContactForms";
import Index from "../components/Contactus";
import MapsModule from "../components/Maps";

const ContactUsPage = () => {
  return (
    <div>
      <Index />
      <ContactForms
        title="CONTACT US"
        titleAlignment="center"
        titlePosition="top"
        buttonAlignment="right"
        buttonPosition="bottom"
      />
      <MapsModule/>
    </div>
  );
};

export default ContactUsPage;
