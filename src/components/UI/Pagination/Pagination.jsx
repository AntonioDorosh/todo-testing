import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({paginate, todosCurrent, currentPage}) => {

    return (
        <nav className={styles.nav__pagination}>
            {currentPage > 1 && <button className={styles.prev__button} onClick={() => paginate(currentPage - 1)}>Prev</button>}
            {Array.from({length: todosCurrent}, (_, i) => i + 1).map((number, index) => (
                <button
                    key={index}
                    onClick={() => paginate(number)}
                    className={styles.pagination__button + ' ' + (currentPage === number ? styles.active : '')}
                >
                    {number}
                </button>
            )
            )}
            {currentPage < todosCurrent && <button className={styles.next_button} onClick={() => paginate(currentPage + 1)}>Next</button>}
        </nav>
    );
};

export default Pagination;