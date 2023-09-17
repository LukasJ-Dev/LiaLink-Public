import React, { useRef, useState } from 'react';

import Button, { BUTTON_SIZES } from '../button/button.component';

import * as S from './search.styles.jsx';
import { theme } from '../../styles/themes';
import { CaretLeft, MagnifyingGlass } from '@phosphor-icons/react';
import { IconButtonContainer } from '../../styles/mixins';
import FlexBetweenWrap from '../common/FlexBetweenWrap/FlexBetweenWrap';

export default function Search({ searchArray, searchCallback }) {
  const searchInputRef = useRef();
  const [searchTerm, SetSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleChangeText = e => {
    SetSearchTerm(e.currentTarget.value);
  };

  const filterByValue = (array, string) => {
    return array.filter(o =>
      Object.keys(o).some(key =>
        JSON.stringify(o[key]).toLowerCase().includes(string)
      )
    );
  };

  const handleSearch = e => {
    if (e.key && e.key !== 'Enter') return;

    handleToggleSearch();
    const searchResult = filterByValue(searchArray, searchTerm.toLowerCase());
    searchCallback(searchResult, searchTerm);
  };

  const handleToggleSearch = () => {
    setIsSearching(!isSearching);
  };

  return (
    <>
      {isSearching && (
        <S.SearchContainer isSearching={isSearching}>
          <FlexBetweenWrap gap={10}>
            <IconButtonContainer
              aria-label="Close search"
              onClick={handleToggleSearch}
            >
              <CaretLeft
                size={24}
                color="#fff"
                weight="bold"
                aria-hidden="true"
              />
            </IconButtonContainer>

            <S.SearchInput
              ref={searchInputRef}
              onChange={e => handleChangeText(e)}
              id="site-search"
              type="search"
              onKeyDown={handleSearch}
            />
            <Button
              color={theme.colors.secondary}
              callback={handleSearch}
              size={BUTTON_SIZES.X_SMALL}
              secondaryOutline={true}
            >
              Search
            </Button>
          </FlexBetweenWrap>
        </S.SearchContainer>
      )}

      <IconButtonContainer
        aria-label="Search jobs"
        onClick={handleToggleSearch}
      >
        <MagnifyingGlass
          aria-hidden="true"
          size={30}
          weight="bold"
          color="#fff"
        />
      </IconButtonContainer>
    </>
  );
}
