export default {
  title: "Atoms/Buttons",
};

const roundButtonsComponent = () => (
  <div className="row" style={{ paddingLeft: "40px", paddingRight: "40px" }}>
    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
      <h3>CMS Rich Text Button</h3>
      <a href="#" className="button-round">
        Specal Button
      </a>
      <h3>Primary</h3>
      <div>
        <div>
          <p className="body">small button (anchor, button, span)</p>
          <a href="#" className="btn-round btn-sm btn-primary">
            <span className="fas fa-arrow-right" />
          </a>
          <button type="button" className="btn-round btn-sm btn-primary">
            <span className="fas fa-arrow-right" />
          </button>
          <span className="btn-round btn-sm btn-primary">
            <span className="fas fa-arrow-right" />
          </span>
        </div>

        <div>
          <p className="body">md button (anchor, button, span)</p>
          <a href="#" className="btn-round btn-md btn-primary">
            <span className="fas fa-arrow-right" />
          </a>
          <button type="button" className="btn-round btn-md btn-primary">
            <span className="fas fa-arrow-right" />
          </button>
          <span className="btn-round btn-md btn-primary">
            <span className="fas fa-arrow-right" />
          </span>
        </div>
        <div>
          <p className="body">lg button (anchor, button, span)</p>
          <a href="#" className="btn-round btn-lg btn-primary">
            <span className="fas fa-arrow-right" />
          </a>
          <button type="button" className="btn-round btn-lg btn-primary">
            <span className="fas fa-arrow-right" />
          </button>
          <span className="btn-round btn-lg btn-primary">
            <span className="fas fa-arrow-right" />
          </span>
        </div>
      </div>

      <div>
        <div>
          <h3>responsive button</h3>
          <div>
            <p className="body">button (anchor, button, span)</p>
            <a href="#" className="btn-round btn-primary btn-responsive">
              <span className="fas fa-arrow-right" />
            </a>
            <button
              type="button"
              className="btn-round btn-primary btn-responsive"
            >
              <span className="fas fa-arrow-right" />
            </button>
            <span className="btn-round  btn-primary btn-responsive">
              <span className="fas fa-arrow-right" />
            </span>
          </div>
          <div>
            <p className="body">
              button with text button (anchor, button, div)
            </p>
            <a href="#" className="btn">
              <span className="btn-label">Call Us</span>
              <span className="btn-round btn-primary btn-responsive">
                <span className="fas fa-arrow-right" />
              </span>
            </a>
            <button type="button" className="btn">
              <span className="btn-label">Call Us</span>
              <span className="btn-round btn-primary btn-responsive">
                <span className="fas fa-arrow-right" />
              </span>
            </button>
            <div className="btn">
              <span className="btn-label">Call Us</span>
              <span className="btn-round btn-primary btn-responsive">
                <span className="fas fa-arrow-right" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
      <h3>Secondary</h3>
      <div>
        <div>
          <p className="body">small button (anchor, button, span)</p>
          <a href="#" className="btn-round btn-sm btn-secondary">
            <span className="fas fa-arrow-right" />
          </a>
          <button type="button" className="btn-round btn-sm btn-secondary">
            <span className="fas fa-arrow-right" />
          </button>
          <span className="btn-round btn-sm btn-secondary">
            <span className="fas fa-arrow-right" />
          </span>
        </div>

        <div>
          <p className="body">md button (anchor, button, span)</p>
          <a href="#" className="btn-round btn-md btn-secondary">
            <span className="fas fa-arrow-right" />
          </a>
          <button type="button" className="btn-round btn-md btn-secondary">
            <span className="fas fa-arrow-right" />
          </button>
          <span className="btn-round btn-md btn-secondary">
            <span className="fas fa-arrow-right" />
          </span>
        </div>
        <div>
          <p className="body">lg button (anchor, button, span)</p>
          <a href="#" className="btn-round btn-lg btn-secondary">
            <span className="fas fa-arrow-right" />
          </a>
          <button type="button" className="btn-round btn-lg btn-secondary">
            <span className="fas fa-arrow-right" />
          </button>
          <span className="btn-round btn-lg btn-secondary">
            <span className="fas fa-arrow-right" />
          </span>
        </div>
      </div>

      <h3>Outlined</h3>
      <div>
        <div>
          <p className="body">small button (anchor, button, span)</p>
          <a href="#" className="btn-round btn-sm btn-outlined">
            <span className="fas fa-arrow-right" />
          </a>
          <button type="button" className="btn-round btn-sm btn-outlined">
            <span className="fas fa-arrow-right" />
          </button>
          <span className="btn-round btn-sm btn-outlined">
            <span className="fas fa-arrow-right" />
          </span>
        </div>

        <div>
          <p className="body">md button (anchor, button, span)</p>
          <a href="#" className="btn-round btn-md btn-outlined">
            <span className="fas fa-arrow-right" />
          </a>
          <button type="button" className="btn-round btn-md btn-outlined">
            <span className="fas fa-arrow-right" />
          </button>
          <span className="btn-round btn-md btn-outlined">
            <span className="fas fa-arrow-right" />
          </span>
        </div>
        <div>
          <p className="body">lg button (anchor, button, span)</p>
          <a href="#" className="btn-round btn-lg btn-outlined">
            <span className="fas fa-arrow-right" />
          </a>
          <button type="button" className="btn-round btn-lg btn-outlined">
            <span className="fas fa-arrow-right" />
          </button>
          <span className="btn-round btn-lg btn-outlined">
            <span className="fas fa-arrow-right" />
          </span>
        </div>
      </div>

      <h3>Disabled button (anchor, button, span)</h3>
      <div>
        <a href="#" className="btn-round btn-sm btn-primary disabled">
          <span className="fas fa-arrow-right" />
        </a>
        <button type="button" className="btn-round btn-sm btn-primary" disabled>
          <span className="fas fa-arrow-right" />
        </button>
        <div className="disabled">
          <span className="btn-round btn-sm btn-primary">
            <span className="fas fa-arrow-right" />
          </span>
        </div>
        <a href="#" className="btn btn-secondary disabled">
          <span className="btn-label">Button</span>
          <span className="fas fa-arrow-right" />
        </a>
        <button type="button" className="btn" disabled>
          <span className="btn-label">Call Us</span>
          <span className="btn-round btn-sm btn-primary">
            <span className="fas fa-arrow-right" />
          </span>
        </button>
        <div className="btn disabled">
          <span className="btn-label">Call Us</span>
          <span className="btn-round btn-lg btn-primary">
            <span className="fas fa-arrow-right" />
          </span>
        </div>
      </div>
    </div>
    <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4">
      <h3>Buttons With Text</h3>
      <div>
        <h4>No Button</h4>
        <div>
          <p className="body">one size (anchor, button, div)</p>
          <a href="#" className="btn btn-secondary">
            <span className="btn-label">Button</span>
            <span className="fas fa-arrow-right" />
          </a>
          <button type="button" className="btn btn-secondary">
            <span className="btn-label">Button</span>
            <span className="fas fa-arrow-right" />
          </button>
          <div className="btn btn-secondary">
            <span className="btn-label">Button</span>
            <span className="fas fa-arrow-right" />
          </div>
        </div>
        <h4>With Button</h4>
        <div>
          <p className="body">small button (anchor, button, div)</p>
          <a href="#" className="btn">
            <span className="btn-label">Call Us</span>
            <span className="btn-round btn-sm btn-primary">
              <span className="fas fa-arrow-right" />
            </span>
          </a>
          <button type="button" className="btn">
            <span className="btn-label">Call Us</span>
            <span className="btn-round btn-sm btn-primary">
              <span className="fas fa-arrow-right" />
            </span>
          </button>
          <div className="btn">
            <span className="btn-label">Call Us</span>
            <span className="btn-round btn-sm btn-primary">
              <span className="fas fa-arrow-right" />
            </span>
          </div>
        </div>
        <div>
          <p className="body">md button (anchor, button, div)</p>
          <a href="#" className="btn">
            <span className="btn-label">Call Us</span>
            <span className="btn-round btn-md btn-primary">
              <span className="fas fa-arrow-right" />
            </span>
          </a>
          <button type="button" className="btn">
            <span className="btn-label">Call Us</span>
            <span className="btn-round btn-md btn-primary">
              <span className="fas fa-arrow-right" />
            </span>
          </button>
          <div className="btn">
            <span className="btn-label">Call Us</span>
            <span className="btn-round btn-md btn-primary">
              <span className="fas fa-arrow-right" />
            </span>
          </div>
        </div>
        <div>
          <p className="body">lg button (anchor, button, div)</p>
          <a href="#" className="btn">
            <span className="btn-label">Call Us</span>
            <span className="btn-round btn-lg btn-primary">
              <span className="fas fa-arrow-right" />
            </span>
          </a>
          <button type="button" className="btn">
            <span className="btn-label">Call Us</span>
            <span className="btn-round btn-lg btn-primary">
              <span className="fas fa-arrow-right" />
            </span>
          </button>
          <div className="btn">
            <span className="btn-label">Call Us</span>
            <span className="btn-round btn-lg btn-primary">
              <span className="fas fa-arrow-right" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export const RoundButtons = roundButtonsComponent.bind({});
