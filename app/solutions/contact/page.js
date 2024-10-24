import ContactForm from "@/app/_components/ContactForm";
import Header from "@/app/_components/Header";
import { ContactPageHeader } from "./";
import Clients from "@/app/_components/home/Clients";
import Footer from "@/app/_components/Footer";
import styles from "./page.module.css";
import Headline from "@/app/_components/Headline";

export default () => {
  const clients = ["Mercedes Benz", "BMW", "Porsche", "Volkswagen"];

  return (
    <div className={styles.contactPage}>
      <Header />
      <Headline />
      <div className={styles.contactPageContent}>
        <div className={styles.contactPageContentForm}>
          <ContactPageHeader />
          <ContactForm />
        </div>
        <Clients clients={clients} />
      </div>
      <Footer page={"sol"} />
    </div>
  );
};
