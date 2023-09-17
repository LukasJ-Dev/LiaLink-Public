import * as S from './form.styles';

/* 
props = {
  submitHandler: Function - onSubmit,
  button: Button Component - button to use for submitting
  children: Form Components
  id: String (OPTIONAL) - name of page (default = timestamp as string)
  
}
*/

const Form = ({
  submitHandler = () => {},
  children = null,
  id = Date.now().toString(),
  button = null,
}) => {
  const handleSubmit = event => {
    event.preventDefault();

    const form = document.getElementById(id);
    const formFieldElements = form.querySelectorAll('input');
    const formFieldTextAreaElements = form.querySelectorAll('textarea');

    const formFields = {};
    formFieldElements.forEach(input => (formFields[input.name] = input.value));
    formFieldTextAreaElements.forEach(
      textarea => (formFields[textarea.name] = textarea.value)
    );

    submitHandler(formFields);
  };

  return (
    <S.FormContainer id={id} onSubmit={handleSubmit}>
      {children && children}
      <S.ButtonContainer>{button && button}</S.ButtonContainer>
    </S.FormContainer>
  );
};

export default Form;
