const Pagination = ({meta, currentPage, setCurrentPage}) => {
      {meta && meta.last_page && (
        <div className="flex items-center justify-center mt-4 space-x-2">
          {/**prev gilaki */}
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {/**გვერდები */}
          {Array.from({ length: meta.last_page }, (_, i) => {
            const pageNumber = i + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                disabled={currentPage === pageNumber}
              >
                {pageNumber}
              </button>
            );
          })}
          {/*next gilaki */}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === meta.last_page}
          >
            Next
          </button>
        </div>
      )}
}

export default Pagination;