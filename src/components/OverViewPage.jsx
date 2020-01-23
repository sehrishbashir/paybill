import './OverViewPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faLightbulb, faClock, faAngleRight, faUser, faCommentAlt } from '@fortawesome/free-solid-svg-icons'


import { Link, BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

import React, { Component } from 'react'
import $ from 'jquery'

export default class OverViewPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        $(document).ready(function () {

            var $slider = $(".slider"),
                $slideBGs = $(".slide__bg"),
                diff = 0,
                curSlide = 0,
                numOfSlides = $(".slide").length - 1,
                animating = false,
                animTime = 500,
                autoSlideTimeout,
                autoSlideDelay = 6000,
                $pagination = $(".slider-pagi");

            function createBullets() {
                for (var i = 0; i < numOfSlides + 1; i++) {
                    var $li = $("<li class='slider-pagi__elem'></li>");
                    $li.addClass("slider-pagi__elem-" + i).data("page", i);
                    if (!i) $li.addClass("active");
                    $pagination.append($li);
                }
            };

            createBullets();

            function manageControls() {
                $(".slider-control").removeClass("inactive");
                if (!curSlide) $(".slider-control.left").addClass("inactive");
                if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
            };

            function autoSlide() {
                autoSlideTimeout = setTimeout(function () {
                    curSlide++;
                    if (curSlide > numOfSlides) curSlide = 0;
                    changeSlides();
                }, autoSlideDelay);
            };

            autoSlide();

            function changeSlides(instant) {
                if (!instant) {
                    animating = true;
                    manageControls();
                    $slider.addClass("animating");
                    $slider.css("top");
                    $(".slide").removeClass("active");
                    $(".slide-" + curSlide).addClass("active");
                    setTimeout(function () {
                        $slider.removeClass("animating");
                        animating = false;
                    }, animTime);
                }
                window.clearTimeout(autoSlideTimeout);
                $(".slider-pagi__elem").removeClass("active");
                $(".slider-pagi__elem-" + curSlide).addClass("active");
                $slider.css("transform", "translate3d(" + -curSlide * 100 + "%,0,0)");
                $slideBGs.css("transform", "translate3d(" + curSlide * 50 + "%,0,0)");
                diff = 0;
                autoSlide();
            }

            function navigateLeft() {
                if (animating) return;
                if (curSlide > 0) curSlide--;
                changeSlides();
            }

            function navigateRight() {
                if (animating) return;
                if (curSlide < numOfSlides) curSlide++;
                changeSlides();
            }

            $(document).on("mousedown touchstart", ".slider", function (e) {
                if (animating) return;
                window.clearTimeout(autoSlideTimeout);
                var startX = e.pageX || e.originalEvent.touches[0].pageX,
                    winW = $(window).width();
                diff = 0;

                $(document).on("mousemove touchmove", function (e) {
                    var x = e.pageX || e.originalEvent.touches[0].pageX;
                    diff = (startX - x) / winW * 70;
                    if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
                    $slider.css("transform", "translate3d(" + (-curSlide * 100 - diff) + "%,0,0)");
                    $slideBGs.css("transform", "translate3d(" + (curSlide * 50 + diff / 2) + "%,0,0)");
                });
            });

            $(document).on("mouseup touchend", function (e) {
                $(document).off("mousemove touchmove");
                if (animating) return;
                if (!diff) {
                    changeSlides(true);
                    return;
                }
                if (diff > -8 && diff < 8) {
                    changeSlides();
                    return;
                }
                if (diff <= -8) {
                    navigateLeft();
                }
                if (diff >= 8) {
                    navigateRight();
                }
            });

            $(document).on("click", ".slider-control", function () {
                if ($(this).hasClass("left")) {
                    navigateLeft();
                } else {
                    navigateRight();
                }
            });

            $(document).on("click", ".slider-pagi__elem", function () {
                curSlide = $(this).data("page");
                changeSlides();
            });

        });













        return (
            <Router>
                <div className="OverViewPage">
                    <div className="ovp-container">

                    <Header />


                    <div className="owner-details">
                            {/* <div className="own-img"></div> */}
                            <h2>Welcome to <span>Pay<b>Bill</b></span></h2>
                            <div className="own-content">
                                <h1>Aliana Methadon</h1>
                                <h5>105 Seasame Street, Melbourne VIC</h5>
                                <p>PayBill ID : 256963356</p>
                            </div>
                        </div>
                        <div className="slider-container">
                            <div className="slider-control left inactive"></div>
                            <div className="slider-control right"></div>
                            <ul className="slider-pagi"></ul>
                            <div className="slider">
                                <div className="slide slide-0 active">
                                    <div className="slide__bg"></div>
                                    <div className="slide__content">
                                        <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                                            <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                                        </svg>
                                        <div className="slide__text">
                                            <h2 className="slide__text-heading"><FontAwesomeIcon className="icon" icon={faTint} />Water</h2>
                                            <p className="slide__text-desc">Bill January $198.9</p>
                                            <a className="slide__text-link" onClick={e => window.open('/water-bill', '_self')}>Check your bill</a>
                                            {/* <div onClick={e => window.open('/water-bill', '_self')} className="click-next"><FontAwesomeIcon icon={faAngleRight} /></div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="slide slide-1">
                                    <div className="slide__bg"></div>
                                    <div className="slide__content">
                                        <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                                            <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                                        </svg>
                                        <div className="slide__text">
                                            <h2 className="slide__text-heading"><FontAwesomeIcon className="icon"  icon={faLightbulb} />Electricity</h2>
                                            <p className="slide__text-desc">Bill January $498.9</p>
                                            <a onClick={e => window.open('/electric-bill', '_self')} className="slide__text-link">Check your bill</a>
                                            {/* <div onClick={e => window.open('/electric-bill', '_self')} className="click-next"><FontAwesomeIcon icon={faAngleRight} /></div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="slide slide-2">
                                    <div className="slide__bg"></div>
                                    <div className="slide__content">
                                        <svg className="slide__overlay" viewBox="0 0 720 405" preserveAspectRatio="xMaxYMax slice">
                                            <path className="slide__overlay-path" d="M0,0 150,0 500,405 0,405" />
                                        </svg>
                                        <div className="slide__text">
                                            <h2 className="slide__text-heading"><FontAwesomeIcon className="icon" icon={faClock} />Gas</h2>
                                            <p className="slide__text-desc">Bill January $498.9</p>
                                            <a onClick={e => window.open('/gas-bill', '_self')} className="slide__text-link">Check your bill</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="ovp-items">

                            <div className="ovp-contact">
                                <div className="ovp-item">
                                    <div className="icons new-icons">
                                        <div className="user"><FontAwesomeIcon className="prsn" icon={faUser} /></div>
                                        <div className="ovp-item-contents"><p>Update our profile details</p></div>
                                    </div>
                                    <div className="bill new-bill">
                                        <div onClick={e => window.open('/update', '_self')} className="click-next"><FontAwesomeIcon icon={faAngleRight} /></div>
                                        {/* <Link to="/update"><div className="click-next"><FontAwesomeIcon icon={faAngleRight} /></div></Link> */}
                                    </div>
                                </div>
                                <div className="ovp-item">
                                    <div className="icons new-icons">
                                        <div className="call"><FontAwesomeIcon className="prsn" icon={faCommentAlt} /></div>
                                        <div className="ovp-item-contents"><p>Call our 24/7 customer care line</p></div>
                                    </div>
                                    <div className="bill new-bill">
                                        <div className="click-next"><FontAwesomeIcon  icon={faAngleRight} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Footer />

                    </div>
                </div>
            </Router>
        )
    }
}

