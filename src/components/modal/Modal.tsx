import style from "./Modal.module.css";
import { Link } from "react-router";

type ModalProps = {
  modalItem: string;
  menuModalOpen: number;
};

export default function Modal({
  modalItem,
  menuModalOpen,
}: ModalProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={style.modal_wrapper}>
      <Link to="/" className={style.modal_item}>
        {modalItem}
      </Link>
    </div>
  );
}
