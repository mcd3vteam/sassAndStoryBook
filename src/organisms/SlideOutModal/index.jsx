export const SlideOutModal = () => (
  <div className="sidebarMenu">
    <button type="button" className="sidebarMenu__header btn">
      <span className="btn-label">Related Information</span>
      <span className="fas fa-times" />
      <span className="fas fa-bars"/>
    </button>
    <h1 className="sidebarMenu__title">Head and Neck Cancers</h1>
    <ul className="sidebarMenu__Inner">
      <li>
        <a href="#" target="_blank" className="sidebarMenu__Inner-item">
          <span className="sidebarMenu__Inner-item-text">
            Voice and Swallowing Disorders
          </span>
          <span className="fas fa-arrow-right" />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" className="sidebarMenu__Inner-item">
          <span className="sidebarMenu__Inner-item-text">
            Radiation Therapy
          </span>
          <span className="fas fa-arrow-right" />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" className="sidebarMenu__Inner-item">
          <span className="sidebarMenu__Inner-item-text">
            Personalized Cancer Therapy
          </span>
          <span className="fas fa-arrow-right" />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" className="sidebarMenu__Inner-item">
          <span className="sidebarMenu__Inner-item-text">
            Lymphedema Management
          </span>
          <span className="fas fa-arrow-right" />
        </a>
      </li>
      <li>
        <a href="#" target="_blank" className="sidebarMenu__Inner-item">
          <span className="sidebarMenu__Inner-item-text">
            Language and Speech Therapy
          </span>
          <span className="fas fa-arrow-right" />
        </a>
      </li>
    </ul>
  </div>
);
