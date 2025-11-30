import React from 'react'

function Pagination({ page, totalPages = 10, onChange }) {
    const goToPage = (p) => {
      if (p > 0 && p <= totalPages) onChange(p);
    };
  
    return (
      <div style={styles.container}>
        {/* Prev */}
        <button
          onClick={() => goToPage(page - 1)}
          style={styles.button}
          disabled={page === 1}
        >
          Prev
        </button>
  
        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, idx) => {
          const p = idx + 1;
          return (
            <button
              key={p}
              onClick={() => goToPage(p)}
              style={{
                ...styles.pageNumber,
                ...(p === page ? styles.activePage : {}),
              }}
            >
              {p}
            </button>
          );
        })}
  
        {/* Next */}
        <button
          onClick={() => goToPage(page + 1)}
          style={styles.button}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    );
}

export default Pagination;

  
  //
  // ─── Inline Styles ─────────────────────────────────────────────────────────────
  //
  
const styles = {
    container: {
      display: "flex",
      gap: "6px",
      justifyContent: "center",
      marginTop: "1rem",
    },
    button: {
      padding: "5px 10px",
      border: "1px solid #333",
      background: "#0d1117",
      color: "white",
      borderRadius: "5px",
      cursor: "pointer",
    },
    pageNumber: {
      padding: "5px 10px",
      borderRadius: "5px",
      background: "#161b22",
      color: "white",
      cursor: "pointer",
      border: "1px solid #333",
    },
    activePage: {
      background: "#238636",
      fontWeight: "bold",
    },
};
  