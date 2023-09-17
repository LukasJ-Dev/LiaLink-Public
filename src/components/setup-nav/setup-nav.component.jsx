import * as S from './setup-nav.styles';

const SetupNav = ({ navItems, callback, currentPage = 0 }) => {
  return (
    <S.SetupNavDiv>
      {navItems.map((item, i) => {
        return (
          <S.NavItem
            currentPage={currentPage === i}
            onClick={() => callback(i)}
            key={item}
            role="link"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && callback(i)}
          >
            {item}
          </S.NavItem>
        );
      })}
    </S.SetupNavDiv>
  );
};

export default SetupNav;
