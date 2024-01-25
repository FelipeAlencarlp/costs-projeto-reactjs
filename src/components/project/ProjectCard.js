import { Link } from 'react-router-dom';

import styles from './ProjectCard.module.css';

import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function ProjectCard({ id, name, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  }

  return (
    <div className={styles.projectCard}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>

      <p className={styles.categoryText}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>

      <div className={styles.projectCardActions}>
        <Link to="/">
          <BsPencil /> Editar
        </Link>

        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;