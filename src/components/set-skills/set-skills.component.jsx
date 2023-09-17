import { useDispatch, useSelector } from 'react-redux';

import { selectUserSkills } from '../../store/features/user/user.selectors';
import { updateUserSkillsListAsync } from '../../store/features/user/user.slice';

import InputFilter from '../input-filter/input-filter.component';
import Button from '../button/button.component';

import uniqid from 'uniqid';

import { NUM_SKILLS_IN_SETTINGS } from '../../utils/variables.utils';

import * as S from './set-skills.styles';
import { theme } from '../../styles/themes';
import { ArrowRight, X } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';

// const userSkills = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'TypeScript',
//   'React',
//   'Git',
//   'Figma',
//   'VS Code',
//   'Agile',
//   'Go',
//   'Swift',
//   'Kotlin',
//   'R',
//   'Ruby',
//   'Matlab',
//   'Scala',
//   'Rust',
//   'Perl',
// ];

const skillsList = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Git',
  'Figma',
  'VS Code',
  'Agile',
  'Python',
  'Next',
  'PHP',
  'Java',
  'C#',
  'C++',
  'Mongo',
  'NoSQL',
  'MySQL',
  'GitHub',
  'Trello',
];

const SetSkills = ({ callback }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userSkills = useSelector(selectUserSkills);
  const id = uniqid();

  const addSkill = skill => {
    document.getElementById(id).value = '';

    if (userSkills.includes(skill)) return;

    const newUserSkills = [...userSkills, skill];
    dispatch(updateUserSkillsListAsync(newUserSkills));
  };

  const removeSkill = skill => {
    const newUserSkills = [...userSkills].filter(item => item !== skill);
    dispatch(updateUserSkillsListAsync(newUserSkills));
  };

  return (
    <S.SetSkillsContainer>
      <S.SkillsSection>
        <section>
          {userSkills.length > 0 && (
            <>
              <h2 tabIndex={0}>Your skills</h2>
              <S.UserSkillsContainer>
                {userSkills.map((skill, i) => {
                  if (i < NUM_SKILLS_IN_SETTINGS)
                    return (
                      <S.SkillButtons
                        aria-label={`Remove skill ${skill}`}
                        onClick={() => removeSkill(skill)}
                        key={skill}
                      >
                        {skill}
                        <X aria-hidden="true" weight="bold" color="#fff" />
                      </S.SkillButtons>
                    );
                })}
                {userSkills.length > NUM_SKILLS_IN_SETTINGS && (
                  <div>{`+ ${
                    userSkills.length - NUM_SKILLS_IN_SETTINGS
                  } more`}</div>
                )}
              </S.UserSkillsContainer>
            </>
          )}
        </section>
        <section>
          <h2 tabIndex={0}>Add new skills</h2>
          <S.AddSkillsContainer>
            <InputFilter
              id={id}
              list={skillsList}
              label={t('labels.select_a_skill')}
              buttonLabel={t('labels.add')}
              name="skills"
              callback={addSkill}
            />
          </S.AddSkillsContainer>
        </section>
      </S.SkillsSection>
      <Button
        color={theme.colors.secondary}
        callback={callback}
        iconRight={<ArrowRight size={24} weight="bold" />}
      >
        {t('labels.save_and_continue')}
      </Button>
    </S.SetSkillsContainer>
  );
};

export default SetSkills;
