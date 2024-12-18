export const Modal = (props) => {
  const { children, id, videoSrc } = props;

  return (
    <div
      className="modal"
      id={id}
      {...(videoSrc && { "data-modal-video-src": videoSrc })}
    >
      <div className="modal__overlay" />
      <div className="modal__content">
        {videoSrc ? (
          <div className="modal__video-container">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="modal__video"
              frameBorder="0"
              title="YouTube video player"
            />
          </div>
        ) : (
          children
        )}
        <button type="button" className="modal__close">
          <span className="fas fa-times" />
        </button>
      </div>
    </div>
  );
};
