import { Button } from "../../../ui/Button";
import { FormContainer, StyledForm } from "./StyleFaq";

function GetDetailsForm() {
  function submitForm(e) {
    e.preventDefault();
  }
  return (
    <StyledForm>
      <FormContainer>
        <p>Get a Phone Call</p>
        <form>
          <input
            type="tel"
            placeholder="Enter Your Phone Number...."
            autoComplete="off"
          />
          <input type="submit" value="Place A Call" onClick={submitForm} />
        </form>
      </FormContainer>
    </StyledForm>
  );
}

export default GetDetailsForm;
