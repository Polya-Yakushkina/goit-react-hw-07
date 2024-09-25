import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";
import clsx from "clsx";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={clsx(css.container)}>
      <div className={clsx(css.card)}>
        <p className={clsx(css.text)}><IoPerson className={clsx(css.icon)}/> {name}</p>
        <p className={clsx(css.text)}><FaPhoneAlt className={clsx(css.icon)}/> {number}</p>
      </div>
      <RiDeleteBin6Line 
        className={clsx(css.deleteIcon)} 
        onClick={handleDelete} 
      />
    </div>
  );
}