export const BMI = ({
  title,
  description,
  description2,
  description3,
  firstName,
  lastName,
  email,
  subject,
  message,
}) => {
  return (
    <div className="custom_form">
      <form
        method="post"
        noValidate="novalidate"
        className="EPiServerForms ValidationSuccess"
      >
        <input
          type="hidden"
          className="Form__Element Form__SystemElement FormHidden FormHideInSummarized"
          name="__FormGuid"
        />
        <input
          type="hidden"
          className="Form__Element Form__SystemElement FormHidden FormHideInSummarized"
          name="__FormHostedPage"
        />
        <input
          type="hidden"
          className="Form__Element Form__SystemElement FormHidden FormHideInSummarized"
          name="__FormLanguage"
        />
        <input
          type="hidden"
          className="Form__Element Form__SystemElement FormHidden FormHideInSummarized"
          name="__FormCurrentStepIndex"
        />
        <input
          type="hidden"
          className="Form__Element Form__SystemElement FormHidden FormHideInSummarized"
          name="__FormSubmissionId"
        />
        <input name="__RequestVerificationToken" type="hidden" />
        <h2 className="Form__Title">{title}</h2>
        <aside className="Form__Description">
          <span>{description}</span>
          <hr />
          <span>{description2}</span>
          <hr /> <span>{description3}</span>
          <hr />
        </aside>
        <div className="Form__Status">
          <div
            role="alert"
            aria-live="polite"
            className="Form__Status__Message hide"
            data-f-form-statusmessage
          ></div>
        </div>
        <div className="Form__MainBody">
          <section className="Form__Element FormStep Form__Element--NonData ">
            <div
              className="Form__Element FormTextbox"
              data-f-element-name="__field_10334"
              data-f-type="textbox"
            >
              <label
                htmlFor="6250e316-b646-4e65-83c9-580095efe6d3"
                className="Form__Element__Caption"
              >
                {firstName}
              </label>
        
              <input
                name="__field_10334"
                id="6250e316-b646-4e65-83c9-580095efe6d3"
                type="text"
                className="FormTextbox__Input"
                aria-describedby="__field_10334_desc"
                placeholder="First Name"
                value=""
                data-f-datainput
                aria-invalid="true"
              />
              <span
                className="Form__Element__ValidationError"
                data-f-linked-name="__field_10334"
                data-f-validationerror=""
                id="__field_10334_desc"
              >
                Please enter a valid first name.
              </span>
            </div>

            <div className="Form__Element FormTextbox">
              <label
                htmlFor="e1d9da91-c4be-457d-9213-f5d88df884b3"
                className="Form__Element__Caption"
              >
                {lastName}
              </label>
              <input
                name="__field_10335"
                type="text"
                className="FormTextbox__Input"
                aria-describedby="__field_10335_desc"
                placeholder="Last Name"
                value=""
                aria-invalid="false"
              />
              <span className="Form__Element__ValidationError">
                Please enter a valid last name.
              </span>
            </div>

            <div className="Form__Element FormTextbox ValidationRequired">
              <label
                htmlFor="eec797bd-32a0-4e98-aede-bc70ded0344c"
                className="Form__Element__Caption"
              >
                {email}
              </label>
              <input
                name="__field_10336"
                id="eec797bd-32a0-4e98-aede-bc70ded0344c"
                type="text"
                className="FormTextbox__Input"
                aria-describedby="__field_10336_desc"
                placeholder="Email address"
                value=""
                required
                aria-required="true"
                aria-invalid="false"
              />
              <span
                className="Form__Element__ValidationError"
                id="__field_10336_desc"
              >
                Please enter a valid email address.
              </span>
            </div>

            <div className="Form__Element FormTextbox">
              <label
                htmlFor="3adda773-7c68-471d-8987-994c94500a97"
                className="Form__Element__Caption"
              >
                {subject}
              </label>
              <input
                name="__field_10337"
                id="3adda773-7c68-471d-8987-994c94500a97"
                type="text"
                className="FormTextbox__Input"
                aria-describedby="__field_10337_desc"
                placeholder="Subject"
                value=""
                aria-invalid="false"
              />
              <span
                className="Form__Element__ValidationError"
                id="__field_10337_desc"
              >
                Please enter a valid subject.
              </span>
            </div>

            <div className="Form__Element FormTextbox FormTextbox--Textarea">
              <label
                htmlFor="53e21171-ca89-480a-b39c-33d1f84af700"
                className="Form__Element__Caption"
              >
                {message}
              </label>
              <textarea
                name="__field_10338"
                id="53e21171-ca89-480a-b39c-33d1f84af700"
                className="FormTextbox__Input"
                placeholder="Enter your message"
                data-f-label="Message"
                data-f-datainput
                aria-describedby="__field_10338_desc"
                aria-invalid="false"
              />
              <span
                className="Form__Element__ValidationError"
                id="__field_10338_desc"
              >
                Please enter a valid message.
              </span>
            </div>

            <button
              id="9cec3f37-be13-4d38-b5db-2c3a93b7b450"
              name="submit"
              type="submit"
              value="9cec3f37-be13-4d38-b5db-2c3a93b7b450"
              className="Form__Element FormExcludeDataRebind FormSubmitButton "
            >
              Submit
            </button>
          </section>
        </div>
      </form>
    </div>
  );
};
