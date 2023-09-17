import * as S from './default-profile-logo.styles';

export default function DefaultProfileLogo({
  profileName,
  height = 30,
  width = 30,
  fontSize = 20,
}) {
  const firstLetter = profileName.charAt(0);

  return (
    <S.DefaultProfileContainer aria-hidden="true" width={width} height={height}>
      <S.ProfileLetterText fontSize={fontSize}>
        {firstLetter}
      </S.ProfileLetterText>
    </S.DefaultProfileContainer>
  );
}
