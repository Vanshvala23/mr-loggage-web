import React from 'react';
import './Home.css';
import logo from '../assets/nav.png';
import BG from '../assets/Bg.jpeg';
import { FaLuggageCart } from "react-icons/fa";
import { MdWarehouse } from "react-icons/md";
import delivery from '../assets/Delivery.jpg';
import Image from '../assets/Image.jpeg';
import start from '../assets/image.png';
import mrloggage from '../assets/Mr Loggage[1].png';
import { FcCustomerSupport } from "react-icons/fc";

function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="container">
          <nav className="navigation">
            <ul>
                <h>Mr Loggage</h>
                <img src={logo} alt="logo" />
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Signup</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Your Hassle-Free Travel Companion</h1>
            <p>"Effortless luggage logistics for stress-free journeys"</p>
            <div className="hero-buttons">
              <button className="button">Book Now</button>
              <button className="Learn">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={BG} alt="Hero Image" />
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <h2>OUR SERVIES</h2>
          <div className="service-cards">
            <div className="service-card">
              <div className="service-icon">
                <FaLuggageCart size="50px" cursor="pointer" transition="all 0.2s ease-in-out" color='Green' />
              </div>
              <h3>LUGGAGE PICKUP</h3>
              <p>Enjoy the convenience of having your luggage picked up from your location. Our reliable team ensures a hassle-free start to your journey.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <MdWarehouse size="50px" cursor="pointer" transition="all 0.2
                s ease-in-out" color='Green' />
              </div>
              <h3>LUGGAGE STORAGE</h3>
              <p>Secure and affordable storage solutions for your luggage. Whether short-term or long-term, your belongings are safe with us.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src={delivery} alt="Door-to-Door Delivery" />
              </div>
              <h3>DOOR-TO-DOOR DELIVERY</h3>
              <p>Get your luggage delivered directly to your destination. We handle your bags with care and ensure they arrive on time.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/icon-insurance-coverage.png" alt="Insurance Coverage" />
              </div>
              <h3>INSURANCE COVERAGE</h3>
              <p>Travel with peace of mind knowing your luggage is insured. We offer comprehensive insurance options for added security.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/images/icon-real-time-tracking.png" alt="Real-Time Tracking" />
              </div>
              <h3>REAL-TIME TRACKING</h3>
              <p>Stay informed with real-time tracking of your luggage. Monitor the status and location of your belongings throughout the journey.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <FcCustomerSupport color='green'  size='50px' />
              </div>
              <h3>CUSTOMER SUPPORT</h3>
              <p>Our dedicated support team is available around the clock to assist you with any inquiries or issues. Your satisfaction is our priority.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="stats">
  <div class="stats-container">
    <div class="stats-icon">
      <i class="fas fa-tasks fa-lg"></i>
    </div>
    <div class="stats-content">
      <span>PROJECTS DONE:</span>
      <span class="number">46</span>
    </div>
    <div class="stats-icon">
      <i class="fas fa-smile fa-lg"></i>
    </div>
    <div class="stats-content">
      <span>HAPPY CUSTOMERS:</span>
      <span class="number">38</span>
    </div>
    <div class="stats-icon">
      <i class="fas fa-suitcase fa-lg"></i>
    </div>
    <div class="stats-content">
      <span>LUGGAGE HANDELED:</span>
      <span class="number">46</span>
    </div>
    <div class="stats-icon">
      <i class="fas fa-users fa-lg"></i>
    </div>
    <div class="stats-content">
      <span>TEAM MEMBERS:</span>
      <span class="number">12</span>
    </div>
  </div>
</section>
      <section className="testimonials">
        <div className="container">
          <h2>Public Cheers For Us!</h2>
          <p>Find out how our users are spreading the words!</p>
          <div className="testimonials-slider">
            <div className="testimonial">
              <div className="testimonial-user">
                <img src="/images/testimonial-user1.jpg" alt="Testimonial User 1" />
                <div className="testimonial-user-info">
                  <h3>Hikmet Atceken</h3>
                  <p>@hiatceken</p>
                </div>
              </div>
              <p>Mr. Luggage made my trip stress-free! Quick and reliable service. Highly recommend!</p>
            </div>
            <div className="testimonial">
              <div className="testimonial-user">
                <img src="/images/testimonial-user2.jpg" alt="Testimonial User 2" />
                <div className="testimonial-user-info">
                  <h3>Arda Guler</h3>
                  <p>@ardaguler_</p>
                </div>
              </div>
              <p>I was worried about handling my luggage during my multi-city trip, but @MrLuggage took care of everything. From doorstep pickup to timely delivery at each stop, their service was flawless. Highly recommend for hassle-free travel!</p>
            </div>
            <div className="testimonial">
              <div className="testimonial-user">
                <img src="/images/testimonial-user3.jpg" alt="Testimonial User 3" />
                <div className="testimonial-user-info">
                  <h3>Maria Ancelotti</h3>
                  <p>@maria_ancelotti</p>
                </div>
              </div>
              <p>Excellent service! My luggage was delivered safely and on time. #HappyCustomer</p>
            </div>
            <div className="testimonial">
              <div className="testimonial-user">
                <img src="/images/testimonial-user4.jpg" alt="Testimonial User 4" />
                <div className="testimonial-user-info">
                  <h3>Ragip Diler</h3>
                  <p>@rgdiler</p>
                </div>
              </div>
              <p>Big shoutout to @MrLuggage for their awesome luggage pickup and delivery service. It made my travel so much easier and stress-free. #TravelCompanion</p>
            </div>
            <div className="testimonial">
              <div className="testimonial-user">
                <img src="/images/testimonial-user5.jpg" alt="Testimonial User 5" />
                <div className="testimonial-user-info">
                  <h3>Jenny Wilson</h3>
                  <p>@willson_jenny_19</p>
                </div>
              </div>
              <p>Traveling has never been easier thanks to @MrLuggage. Their real-time tracking and prompt customer support kept me informed and reassured throughout my journey. My luggage arrived safely and on time. Couldn't ask for better service!</p>
            </div>
            <div className="testimonial">
              <div className="testimonial-user">
                <img src="/images/testimonial-user6.jpg" alt="Testimonial User 6" />
                <div className="testimonial-user-info">
                  <h3>Hikmet Atceken</h3>
                  <p>@hiatceken</p>
                </div>
              </div>
              <p>Mr. Luggage made my trip stress-free! Quick and reliable service. Highly recommend!</p>
            </div>
            <div className="testimonial">
              <div className="testimonial-user">
                <img src="/images/testimonial-user7.jpg" alt="Testimonial User 7" />
                <div className="testimonial-user-info">
                  <h3>Guy Hawkins</h3>
                  <p>@ghawkins</p>
                </div>
              </div>
              <p>Thank you @MrLuggage for your impeccable service. My bags were picked up and delivered right to my hotel. No more dragging luggage around!</p>
            </div>
          </div>
          <button className="view">View More</button>
        </div>
      </section>
      <section className="why-choose-us">
        <div className="container">
          <h2>Why choose Us</h2>
          <div className="why-choose-us-cards">
            <div className="why-choose-us-card">
              <div className="why-choose-us-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3>Punctual Delivery</h3>
              <p>Our commitment to on-time arrivals ensures peace of mind during your travels.</p>
            </div>
            <div className="why-choose-us-card">
              <div className="why-choose-us-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Careful Handling</h3>
              <p>We treat your items with utmost care, ensuring they arrive in pristine condition.</p>
            </div>
            <div className="why-choose-us-card">
              <div className="why-choose-us-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Excellent Support</h3>
              <p>Responsive and friendly assistance for all your queries and needs.</p>
            </div>
            <div className="why-choose-us-card">
              <div className="why-choose-us-icon">
                <i className="fas fa-plane"></i>
              </div>
              <h3>Travel Convenience</h3>
              <p>Our commitment to on-time arrivals ensures peace of mind during your travels.</p>
            </div>
            <div className="why-choose-us-card">
              <div className="why-choose-us-icon">
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <h3>Great Value</h3>
              <p>Affordable rates paired with quality service for a satisfying travel experience.</p>
            </div>
            <div className="why-choose-us-card">
              <div className="why-choose-us-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Trusted and Recommended</h3>
              <p>Consistently positive feedback and high satisfaction from our valued clients.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="container">
          <h2>ABOUT US</h2>
          <div className = "rectangle"></div>
          <div className="about-us-content">
            <p>Mr Loggage, your travel companion, dedicated to providing seamless and reliable luggage transportation services, ensuring you travel light and worry-free.</p>
          </div>
          <div className="about-us-image">
            <img src={Image} alt="About Us Image" />
          </div>
        </div>
      </section>
      <section className="about-company">
        <div className="container">
          <h2>ABOUT COMPANY</h2>
          <div className="about-company-content">
            <p>Mr Loggage is a luggage logistics company offering services like door-to-door delivery, airport transfers, and temporary storage. It aims to provide convenient, reliable, and stress-free luggage management for travelers, ensuring safe efficient handling from collection to delivery.</p>
            <p>Dedicated to providing seamless and reliable luggage transportation services, ensuring you travel light and worry-free.</p>
          </div>
          <div className="about-company-image">
            <img src={start} alt="About Company Image" />
          </div>
        </div>
      </section>
      <section className="unique-factor">
        <h2>UNIQUE FACTOR</h2>
        <div className="container">
          <div className="unique-factor-cards">
            <div className="unique-factor-card">
              <div className="unique-factor-icon">
                <i className="fas fa-tag"></i>
              </div>
              <h3>Affordable Pricing</h3>
            </div>
            <div className="unique-factor-card">
              <div className="unique-factor-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Excellent Handling</h3>
            </div>
            <div className="unique-factor-card">
              <div className="unique-factor-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <h3>Quick Support</h3>
            </div>
            <div className="unique-factor-card">
              <div className="unique-factor-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h3>Excellent Feedback</h3>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-logo">
            <img src={mrloggage} alt="Mr Loggage Logo" />
          </div>
          <div className="footer-content">
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Train service</a></li>
                <li><a href="#">Airplane service</a></li>
                <li><a href="#">Direct delivery</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Booking</a></li>
                <li><a href="#">Tracking</a></li>
                <li><a href="#">Notification</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Find Us</h3>
              <ul>
                <li><a href="tel:+919265362375"><i className="fas fa-phone-alt"></i> +919265362375</a></li>
                <li><a href="mailto:founder@mrloggage.com"><i className="fas fa-envelope"></i> founder@mrloggage.com</a></li>
                <li><a href="https://www.mrloggage.com"><i className="fas fa-globe"></i> www.mrloggage.com</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-social">
            <ul>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;