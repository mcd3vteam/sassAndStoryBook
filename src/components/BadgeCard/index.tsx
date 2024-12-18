// export const BadgeCard = () => <h1 class="container">Hi</h1>;

import React from "react";
import { Image } from "../../sharedReact/Image";

export const BadgeCard = (props) => {
    const { badgeImgSrc, badgeUrl, instance = "third" } = props;

    return(
        <a className={`badge-card badge-card--${instance}`} href={badgeUrl}>
            {badgeImgSrc && (
                <div className="badge-card__image">
                    <Image 
                        alt="Lorem ipsum"
                        src={badgeImgSrc}
                        data-animate
                        data-animate-duration="2"
                        data-animate-y="100"
                    />
                </div>
            )}
        </a>
    );
};

export const BadgeCardGrid = (props) => {
    const { children } = props;

    return (
        <section className="container badge-card-composition">
            <div 
                className="row badge-row"
                data-animate="children"
                data-animate-duration="4"
                data-animate-stagger="0.2"
                data-animate-y="200"
            >
                {children}
            </div>
        </section>
    )
}