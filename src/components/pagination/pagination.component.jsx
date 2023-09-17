import * as S from './pagination.styles';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

const Pagination = ({
  currentPage,
  numPages,
  numNumbers = 6,
  setCurrentPage,
}) => {
  const getFirstAndLastNums = () => {
    if (numPages < numNumbers) return [1, numPages];
    const halfNumbers = Math.floor(numNumbers / 2);

    const tempFirstNum = currentPage - halfNumbers;
    let firstNum = tempFirstNum > 0 ? tempFirstNum : 1;

    const tempLastNum =
      currentPage <= halfNumbers
        ? currentPage + halfNumbers + Math.abs(currentPage - halfNumbers - 1)
        : currentPage + halfNumbers;
    let lastNum = tempLastNum < numPages ? tempLastNum : numPages;

    if (numNumbers % 2 === 0 && numNumbers < numPages)
      currentPage < halfNumbers ? lastNum-- : firstNum++;

    if (currentPage + halfNumbers > numPages)
      firstNum -= Math.abs(numPages - currentPage - halfNumbers);

    return [firstNum, lastNum];
  };

  const checkForEnd = (i, nums) => {
    if (
      numPages <= numNumbers ||
      currentPage >= numPages - Math.floor(numNumbers / 2)
    ) {
      return i;
    } else if (i === nums[1] - 1) {
      return '...';
    } else if (i === nums[1]) {
      return numPages;
    } else return i;
  };

  const handleOnClick = (pageNum = -1) => {
    if (pageNum === '...') return;
    setCurrentPage(pageNum);
  };

  const getLabel = (pageNum, i) => {
    let label;
    if (pageNum === '...') label = 'dots';
    if (pageNum !== '...' && currentPage === i)
      label = `Page ${pageNum} of ${numPages}. This is the current page`;
    if (pageNum !== '...' && currentPage !== i)
      label = `Page ${pageNum} of ${numPages}`;
    return label;
  };

  const getNumbers = () => {
    let markup = [];
    const nums = getFirstAndLastNums();

    for (let i = nums[0]; i <= nums[1]; i++) {
      const pageNum = checkForEnd(i, nums);
      markup.push(
        <S.ItemContainer
          aria-label={getLabel(pageNum, i)}
          tabIndex={pageNum === '...' ? -1 : 0}
          key={i}
          active={currentPage === +pageNum}
          onClick={() => handleOnClick(pageNum)}
          role="link"
        >
          {pageNum}
        </S.ItemContainer>
      );
    }
    return markup;
  };

  const goToPreviousPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage === numPages) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <S.PaginationContainer role="navigation" numNumbers={numNumbers}>
      <S.ItemContainer
        role="link"
        aria-label="Previous page"
        onClick={goToPreviousPage}
      >
        <CaretLeft size={18} weight="bold" aria-hidden="true" />
      </S.ItemContainer>
      {getNumbers()}
      <S.ItemContainer
        role="link"
        aria-label="Next page"
        onClick={goToNextPage}
      >
        <CaretRight size={18} weight="bold" aria-hidden="true" />
      </S.ItemContainer>
    </S.PaginationContainer>
  );
};

export default Pagination;
