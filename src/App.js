import React, { Component } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import Footer from './components/Footer';
class App extends Component {
  state = {
    cardlist: [
      {
        name: 'Free HubSpot CRM',
        desc: 'Everything you need to organize, track, and build better relationships with leads and customers. Yes, its 100% free. Forever without any cost.',
        img: 'images/i1.PNG',
        f1: 'Contact Insights',
        f2: 'Deals',
        f3: 'Tasks'
      },
      {
        name: 'CMS Hub',
        desc: 'Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.',
        img: 'images/i2.PNG',
        f1: 'Drag-and-Drop Editor ',
        f2: 'SEO Recommendations',
        f3: 'Website Themes'
      },
      {
        name: 'Marketing Hub',
        desc: 'Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale without any cost.',
        img: 'images/i3.PNG',
        f1: 'Lead Generation',
        f2: 'Marketing Automation',
        f3: 'Analytics'
      },
      {
        name: 'Sales Hub',
        desc: 'Time-saving sales software that helps you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.',
        img: 'images/i4.PNG',
        f1: 'Email Tracking',
        f2: 'Meeting Scheduling',
        f3: 'Email Automation'
      },
      {
        name: 'Service Hub',
        desc: 'Customer service software to help you connect with customers, exceed expectations, and turn them into promoters that grow your business.',
        img: 'images/i5.PNG',
        f1: 'Tickets',
        f2: 'Customer Feedback',
        f3: 'Knowledge Base'
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="coinfo">
          <p className="container" style={{color: 'white', padding: 30, marginBottom: 0}}>Global health and safety is our top priority. <a style={{color: 'white'}} href="https://www.hubspot.com/company-news/coronavirus-response" class="promo-banner-website"><strong>Learn how HubSpot is responding</strong></a> to COVID-19 and its economic impact on the communities we serve.</p>
        </div>
        <div className="colorbuffer">
          <div className="colorbody">
            <h1 className="mainheading"><strong>There’s a better way to grow.</strong></h1>
            <p className="colortext">Marketing, sales, and service software that helps your business grow without compromise. Because “good for the business” should also mean “good for the customer.”</p>
            <button className="btn" style={{backgroundColor: '#FF7A59', borderRadius: '5px', color: 'white', padding: 25, marginTop: 10}}><strong>Get HubSpot free</strong></button>
            <p className="colorfooter">Get started with FREE tools, and upgrade as you grow.</p>
          </div>
        </div>
        <div className="colorcontain"></div>
        <div className="cardcontainer">
          <div className="container" style={{paddingTop: 100}}>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <p className="headtitle"><strong>Powerful alone. Better together.</strong></p>
                <p className="headbody">HubSpot offers a full stack of software for marketing, sales, and customer service, with a completely free CRM at its core. They’re powerful alone — but even better when used together.</p>
              </div>
              { this.state.cardlist.map(card => <ServiceCard card={card} />) }
            </div>
          </div>
        </div>
        <div className="compcontian">
          <div className="compbody">
            <h2><strong>Learn and grow with award-winning support and a thriving community behind you.</strong></h2>
            <p className="pt-3 comptext">You don't have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpot's legendary customer support team and a community of thousands of marketing and sales pros just like you.</p>
          </div>
          <img src="images/comp.PNG" alt="companies" className="compimg"/>
        </div>
        <div className="records">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <h1><strong>78,700</strong></h1>
                <p className="recdet">customers in over 120 countries growing their businesses with HubSpot</p>
              </div>
              <div className="col-lg-8">
                <img src="images/recs.PNG" className="recimg" alt="comprec"/>
              </div>
            </div>
          </div>
        </div>
        <div className="personcontain">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="mainheading"><strong>Start Growing With HubSpot Today</strong></h1>
                <p className="colortext">With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</p>
                <button className="btn" style={{backgroundColor: '#FF7A59', borderRadius: '5px', color: 'white', padding: 25, marginTop: 10}}><strong>Get HubSpot free</strong></button>
                <p className="colorfooter" style={{minWidth: '100%'}}>Get started with FREE tools, and upgrade as you grow.</p>
              </div>
                <div className="col-lg-6">
                <img src="images/girl.webp" className="girlimg" alt="girl"/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
