export const ExpressYourGratitudeForm = ({
  title,
  description,
  description2,
  theirName,
  theirLocation,
  theirDepartment,
  yourName,
  yourPhone,
  yourEmail,
  message,
  submitMessage,
}) => {
  return (
    <div className="express-your-gratitude">
      <div className="custom_form">
        <form
          method="post"
          novalidate="novalidate"
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
                  {theirName}
                </label>
                <input
                  name="__field_10334"
                  id="6250e316-b646-4e65-83c9-580095efe6d3"
                  type="text"
                  className="FormTextbox__Input"
                  aria-describedby="__field_10334_desc"
                  placeholder="Their Name"
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
                  Please enter a valid name.
                </span>
              </div>

              <div className="Form__Element FormTextbox">
                <label
                  htmlFor="e1d9da91-c4be-457d-9213-f5d88df884b3"
                  className="Form__Element__Caption"
                >
                  {theirLocation}
                </label>
                <input
                  name="__field_10335"
                  type="text"
                  className="FormTextbox__Input"
                  aria-describedby="__field_10335_desc"
                  placeholder="Location"
                  value=""
                  aria-invalid="false"
                />
                <span className="Form__Element__ValidationError">
                  Please enter a valid location.
                </span>
              </div>

              <div className="Form__Element FormTextbox ValidationRequired">
                <label
                  htmlFor="eec797bd-32a0-4e98-aede-bc70ded0344c"
                  className="Form__Element__Caption"
                >
                  {theirDepartment}
                </label>
                <input
                  name="__field_10336"
                  id="eec797bd-32a0-4e98-aede-bc70ded0344c"
                  type="text"
                  className="FormTextbox__Input"
                  aria-describedby="__field_10336_desc"
                  placeholder="Department"
                  value=""
                  required
                  aria-required="true"
                  aria-invalid="false"
                />
                <span
                  className="Form__Element__ValidationError"
                  id="__field_10336_desc"
                >
                  Please enter a valid department.
                </span>
              </div>

              <div className="Form__Element FormTextbox">
                <label
                  htmlFor="3adda773-7c68-471d-8987-994c94500a97"
                  className="Form__Element__Caption"
                >
                  {yourName}
                </label>
                <input
                  name="__field_10337"
                  id="3adda773-7c68-471d-8987-994c94500a97"
                  type="text"
                  className="FormTextbox__Input"
                  aria-describedby="__field_10337_desc"
                  placeholder="Your Name"
                  value=""
                  aria-invalid="false"
                />
                <span
                  className="Form__Element__ValidationError"
                  id="__field_10337_desc"
                >
                  Please enter a valid name.
                </span>
              </div>

              <div className="Form__Element FormTextbox">
                <label
                  htmlFor="3adda773-7c68-471d-8987-994c94500a97"
                  className="Form__Element__Caption"
                >
                  {yourPhone}
                </label>
                <input
                  name="__field_10337"
                  id="3adda773-7c68-471d-8987-994c94500a97"
                  type="text"
                  className="FormTextbox__Input"
                  aria-describedby="__field_10337_desc"
                  placeholder="Phone Number"
                  value=""
                  aria-invalid="false"
                />
                <span
                  className="Form__Element__ValidationError"
                  id="__field_10337_desc"
                >
                  Please enter a phone number.
                </span>
              </div>

              <div className="Form__Element FormTextbox">
                <label
                  htmlFor="3adda773-7c68-471d-8987-994c94500a97"
                  className="Form__Element__Caption"
                >
                  {yourEmail}
                </label>
                <input
                  name="__field_10337"
                  id="3adda773-7c68-471d-8987-994c94500a97"
                  type="text"
                  className="FormTextbox__Input"
                  aria-describedby="__field_10337_desc"
                  placeholder="Email"
                  value=""
                  aria-invalid="false"
                />
                <span
                  className="Form__Element__ValidationError"
                  id="__field_10337_desc"
                >
                  Please enter a valid email address.
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

              <span>{submitMessage}</span>

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
    </div>
  );
};
