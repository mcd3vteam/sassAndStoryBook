export const Typography = () => (
  <div className="root">
    <h1>h1 SemiBold</h1>
    <h1 className="bold">h1 Bold </h1>
    <h1 className="reg">
      h1 Reg <em>italic Lorem ipsum dolor</em>{" "}
    </h1>
    <h1 className="light">h1 Light</h1>
    <br />
    <h2>
      h2 SemiBold <em>italic Lorem ipsum dolor</em>
    </h2>
    <h2 className="bold">h2 Bold</h2>
    <h2 className="reg">h2 Reg</h2>
    <h2 className="light">h2 Light</h2>
    <br />
    <h3>h3 SemiBold</h3>
    <h3 className="bold">
      h3 Bold <em>italic Lorem ipsum dolor</em>
    </h3>
    <h3 className="reg">h3 Reg</h3>
    <h3 className="light">h3 Light</h3>
    <br />
    <h4>h4 SemiBold</h4>
    <h4 className="bold">h4 Bold</h4>
    <h4 className="reg">h4 Reg</h4>
    <h4 className="light">h4 Light</h4>
    <br />
    <p className="body">Body 1 (p.body) Reg</p>
    <p className="body bold">Body 1 (p.body) Bold</p>
    <p className="body semibold">Body 1 (p.body) SemiBold</p>
    <p className="body light">Body 1 (p.body) Light</p>
    <br />
    <p>Body 2 (p) Reg</p>
    <p className="bold">Body 2 (p) Bold</p>
    <p className="semibold">Body 2 (p) SemiBold</p>
    <p className="light">Body 2 (p) Light</p>
    <br />
    <small>Caption + Legal (small) Reg</small>
    <br />
    <small className="bold">Caption + Legal (small) Bold</small>
    <br />
    <small className="semibold">Caption + Legal (small) SemiBold</small>
    <br />
    <small className="light">Caption + Legal (small) Light</small>
    <br />
    <em>italic Lorem ipsum dolor</em>
  </div>
);
