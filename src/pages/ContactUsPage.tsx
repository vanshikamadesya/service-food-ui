import ContactForms from "../components/ContactForms";
import Index from "../components/Contactus";
import Maps from "../components/Maps/Maps";

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
      <Maps />
    </div>
  );
};

export default ContactUsPage;
