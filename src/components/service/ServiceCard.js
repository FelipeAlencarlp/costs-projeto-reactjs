import { BsFillTrashFill } from 'react-icons/bs';

import styles from '../project/ProjectCard.module.css';

function ServiceCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault(e);
    handleRemove(id, cost);
  }

  return (
    <div className={styles.projectCard}>
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R${cost}
      </p>

      <p>{description}</p>

      <div className={styles.projectCardActions}>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;