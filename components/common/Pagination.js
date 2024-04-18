import styled from 'styled-components';

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  span {
    margin: 0 10px;
    padding: 5px 10px;
    cursor: pointer;
    user-select: none;
  }

  .page-item {
    &:hover {
      background-color: #ddd;
    }
  }

  .disabled {
    color: #ccc;
    pointer-events: none;
  }
`;

const Pagination = ({ currentPage, totalPages, paginate, nextPageGroup, prevPageGroup }) => {
    const pageNumbers = [];
    const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    const endPage = Math.min(startPage + 9, totalPages);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginationWrapper>
            {currentPage > 10 && (
                <span onClick={prevPageGroup}>&laquo;</span>
            )}
            {pageNumbers.map(number => (
                <span key={number} className="page-item" onClick={() => paginate(number)}>
                    {number}
                </span>
            ))}
            {currentPage < totalPages && currentPage <= totalPages - 10 && (
                <span onClick={nextPageGroup}>&raquo;</span>
            )}
        </PaginationWrapper>
    );
};

export default Pagination;
