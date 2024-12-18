import { Image } from "../../sharedReact/Image";

export const NewsStory = (props) => {
  const { pressrel, title, subtitle, authorname, email, children, topicsTitle } =
    props;

  return (
    <section className="container news-story">
      <div className="">
        <header className="">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </header>
        <figure>
          <Image className="image" src="/resources/images/Rectangle 36.png" />
          <p className="news-story__date">{pressrel}</p>
          <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
        </figure>
        <section className="news-story__share">
          <div className="addthis_sharing_toolbox"></div>
        </section>
        <article>
          <div className="article-container">
            <div className="newsFirstCol">
              <div>{children}</div>
              <div />
              <section className="news-story__topics">
                <h4>{topicsTitle}</h4>
                <hr />
                <a href="#">Arthritus</a>
                <a href="#">Arthritus</a>
                <a href="#">Arthritus</a>
              </section>
              {/* Hide this on desktop */}
              <div className="media-contact-mobile">
                <section className="">
                  <h4>Media Contacts</h4>
                  <div>
                    <p className="news-story__media-contact-email"><a href={"mailto:'mmbrubaker@health.ucsd.edu'"}>Michelle Brubaker - mmbrubaker@health.ucsd.edu</a></p>
                  </div>
                </section>
                <section className="news-story__care">
                  <h4>Care at UC San Diego</h4>
                  <a href="#">Infectious Disease</a>
                  <a href="#">Infectious Disease</a>
                </section>
              </div>
            </div>
            <div className="newsSecondCol">
              By: <br /> <p className="news-story__author"><a href={"mailto:'mmbrubaker@health.ucsd.edu'"}> {authorname} - {email}</a></p>
              <div className="media-contact-desktop">
                <section className="">
                  <h4>Media Contacts</h4>
                  <div>
                    <p className="news-story__media-contact-email"><a href={"mailto:'mmbrubaker@health.ucsd.edu'"}>Michelle Brubaker - mmbrubaker@health.ucsd.edu</a></p>
                  </div>
                </section>
                <section className="news-story__care">
                  <h4>Care at UC San Diego</h4>
                  <a href="#">Infectious Disease</a>
                  <a href="#">Infectious Disease</a>
                </section>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div />
    </section>
  );
};
