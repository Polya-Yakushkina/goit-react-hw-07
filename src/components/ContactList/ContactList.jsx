import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts, selectFilteredContacts } from "../../redux/selectors";

import clsx from "clsx";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={clsx(css.list)}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={clsx(css.item)}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}