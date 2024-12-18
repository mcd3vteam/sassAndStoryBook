export const MedicalServicesCard = ({ list }) => {
  return list.map((item) => {
    return (
      <section className="medical-services-card" key={item}>
        <>
          <div className="medical-services-card__top">
            <a href="#">{item.service}</a>
            { item.options.length === 0 ? null : (
              <button
                aria-expanded="false"
                className="medical-services-card__button"
              />
            )}
          </div>
          <div className="card-info hidden">
            <hr />
            {item.options.map((option) => {
              return (
                <>
                  <a href="#" className="medical-services-card__link">
                    {option}
                  </a>{" "}
                  <hr />
                </>
              );
            })}
          </div>
        </>
      </section>
    );
  });
};
