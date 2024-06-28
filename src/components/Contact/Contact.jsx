import css from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";

function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.container}>
      <ul className={css.item}>
        <li className={css.itemContact}>
          <FaUser />
          <p>{name}</p>
        </li>
        <li className={css.itemContact}>
          <FaPhone />
          <p>{number}</p>
        </li>
      </ul>
      <button type="button" className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
