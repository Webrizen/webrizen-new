import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/MultipleItems.css';
import StarRating from "./StarRating";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    const { feedbacks } = this.props;
    return (
      <>
        <Slider {...settings} className="slider">
        {feedbacks &&
            feedbacks.map((feedback) => (
              <div key={feedback.id || null} className="cardX">
                <div className="cardx-cont">
                <div className="cardx-left">
                <img src={feedback.user.picturename || 'https://placehold.co/500x500'} alt="User" />
                </div>
                <div className="cardx-right">
                <h3>{feedback.user.shortName || 'Clients Name'}</h3>
                <span><StarRating rating={feedback.rating || 0} /></span>
                </div>
                </div>
                <blockquote>{`"${feedback.feedback}"` || `Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem neque perferendis magni et dolores natus vero iure,
              quae, rem amet odit alias aliquid atque temporibus, ab omnis! A,
              eius! Vero!`}</blockquote>
              </div>
            ))}
        </Slider>
      </>
    );
  }
}