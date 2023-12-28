import React from "react";
import StarRating from "./StarRating";

export default function MultipleItems({ feedbacks }) {
  return (
    <>
      <div className="max-w-7xl grid grid-cols-3 w-full gap-2">
      {feedbacks &&
        feedbacks.map((feedback) => (
          <div key={feedback.id || null} className="cardX">
            <div className="cardx-cont">
              <div className="cardx-left">
                <img
                  src={
                    feedback.user.picturename || "https://placehold.co/500x500"
                  }
                  alt="User"
                />
              </div>
              <div className="cardx-right">
                <h3>{feedback.user.shortName || "Clients Name"}</h3>
                <span>
                  <StarRating rating={feedback.rating || 0} />
                </span>
              </div>
            </div>
            <blockquote className="italic text-balance">
              {`"${feedback.feedback}"` ||
                `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem neque perferendis magni et dolores natus vero iure,
              quae, rem amet odit alias aliquid atque temporibus, ab omnis! A,
              eius! Vero!`}
            </blockquote>
          </div>
        ))}
      </div>
    </>
  );
}
