import { NewsStory } from ".";

export default {
  title: "Organisms/News Story",
};

const storyArgs = {
  title:
    "Faculty Mentor Training Program Strengthens University’s Institutional Climate",
  subtitle:
    "A pioneering program at UC San Diego Health Sciences serves as a successful model for medical schools looking to improve faculty diversity and success",
  pressrel: "Jan 2021 . Press Release",
  authorname: "Michelle Brubaker",
  topicsTitle: "Topics",
  email: "mmbrubaker@health.ucsd.edu",
};

const StoryComponent = (args) => (
  <NewsStory {...args}>
    <p>
      Many universities are in search of strategies to improve their faculty
      diversity and institutional climate. One factor known to be critical for
      faculty satisfaction is proper mentorship, but many faculty, particularly
      women and those from underrepresented racial and ethnic backgrounds, lack
      clear access to high quality mentoring. To address this, the Office of
      Faculty Affairs at University of California San Diego Health Sciences
      developed a formal Faculty Mentor Training Program (FMTP), which they hope
      other universities will be inspired to replicate.
      <br />
      <br />
      In a paper published online on December 23, 2021 in the Journal of
      Clinical and Translational Science , FMTP leadership detailed the
      program’s design and success in improving mentorship quality and faculty
      satisfaction, especially among underrepresented faculty.
    </p>
    <blockquote>
      “Our goal was to create an opportunity for all faculty to receive high
      quality and effective mentorship,”
    </blockquote>
    <p>
      “Our goal was to create an opportunity for all faculty to receive high
      quality and effective mentorship,” said study first author JoAnn Trejo,
      PhD, professor in the Department of Pharmacology at UC San Diego School of
      Medicine and assistant vice chancellor for UC San Diego Health Sciences
      Faculty Affairs. “This has never been done before in a health system-wide
      fashion, but now that we’ve developed and tested this approach, it can be
      applied to any medical school in the nation.”
      <ul>
        <li>Thing 1</li>
        <li>Thing Two</li>
      </ul>
    </p>
    <h3>Subtitle 2</h3>
    <p>
      Trejo and her colleagues set out to establish an evidence-based mentorship
      program that all faculty, including physicians, researchers and educators,
      would have access to. They especially hoped this would help address
      disparities in mentoring of women, LGBTQ and other underrepresented
      faculty.
      <ol>
        <li>Thing One</li>
        <li>Thing Two</li>
      </ol>
    </p>
    <h4>Subtitle 3</h4>
    <p>
      Trejo says hiring diverse faculty is only the first step, but making them
      feel welcomed and a sense of belonging in the community is what really
      impacts their success. “Good mentoring involves being able to connect with
      a person in an authentic way and trust that they have your best interest
      in mind,” said Trejo. “Those sorts of relationships may not be as easy to
      establish when there are cultural differences between the mentor and
      mentee. So if you leave mentorship to happen by chance, as we often do,
      underrepresented individuals find fewer opportunities to be mentored by
      senior faculty, and the quality of their mentorship is not as high.”
    </p>
    <br />
    <br />
    <p>
      FMTP has now trained 23 percent of all Health Sciences faculty between
      2017 and 2020, and shows no signs of slowing down. Senior faculty mentors
      receive training in effective communication, promoting work-life balance
      and addressing equity and inclusion, and later develop their own mentoring
      philosophy statements. Junior faculty mentees learn how to maximize their
      mentoring relationships and are encouraged to establish a career
      development plan. Senior and junior faculty are then matched within their
      departments based in part on clinical and research interests.
    </p>
    <figure>
      <div className="image">
        <img src="/resources/images/Rectangle 38.png" alt="news graphic" />
      </div>
      <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
    </figure>

    <p>
      Following this three-year pilot of the program, data now reveal how the
      trainings have influenced the culture at UC San Diego Health Sciences.
      FMTP participants were significantly more satisfied with the quality of
      mentoring received compared to non-participants, with the greatest
      increase in satisfaction reported by underrepresented faculty (from 38
      percent satisfied in 2017 to 61 percent in 2019). Underrepresented faculty
      also reported an improved morale and a greater sense that their
      environment was supportive for underrepresented faculty.
    </p>
    <p>
      The surveys also suggested some areas for continued improvement. While
      senior faculty reported feeling more confident in their ability to mentor
      women, LGBTQ and underrepresented faculty, they were still not sure if
      they were meeting these mentees’ expectations. Future plans for FMTP now
      include additional sessions focused on culturally aware mentorship.
    </p>
    <p>
      Since many of the mentoring skills taught by FMTP are universally
      applicable, Trejo believes it will continue to have impact not only on the
      faculty, but also on all of their mentees, including medical students,
      residents, fellows, graduate students and postdocs.
    </p>
    <blockquote>
      “We’re very excited about what we’ve learned and accomplished so far,”
    </blockquote>
    <p>
      “We’re very excited about what we’ve learned and accomplished so far,”
      said Trejo. “I’m astounded by the unique ways each department has
      successfully implemented formal mentorship, and we look forward to helping
      the program grow and expand at UC San Diego Health Sciences and beyond.”
    </p>
    <p>
      Co-authors include: Deborah Wingard, Virginia Hazen, Alexandra Bortnick,
      Karen Van Hoesen and Vivian Reznik, all at UC San Diego, as well as Angela
      Byars-Winston and Christine Pfund at the University of Wisconsin, Madison.
    </p>
    <p>
      UC San Diego FMTP is supported by institutional funds provided by UC San
      Diego Chancellor Pradeep Khosla and Vice Chancellor of Health Sciences
      David Brenner, MD, and the UC San Diego Altman Clinical Translational
      Research Institute (National Institutes of Health, grant 5KL2TR001444-07).
    </p>
  </NewsStory>
);

export const WithStory = StoryComponent.bind({});
WithStory.args = storyArgs;
