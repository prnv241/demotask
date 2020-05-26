import React from 'react'

export default function Footer() {
  return (
    <div className="footercontain">
      <div className="container">
        <div className="row lists">
          <div className="col-lg-3">
            <p className="fottitle">Increase Your Traffic</p>
            <a className="footermenu" href="/">Ad Software</a>
            <a className="footermenu" href="/">Blog Software</a>
            <a className="footermenu" href="/">SEO Software</a>
            <a className="footermenu" href="/">Social Media Software</a>
            <a className="footermenu" href="/">Content Management System</a>
          </div>
          <div className="col-lg-3">
            <p className="fottitle">Connect With Leads</p>
            <a className="footermenu" href="/">Find New Prospects</a>
            <a className="footermenu" href="/">Email Tracking</a>
            <a className="footermenu" href="/">Sales Email Templates</a>
            <a className="footermenu" href="/">Click to Call Your Leads</a>
            <a className="footermenu" href="/">Email Marketing</a>
          </div>
          <div className="col-lg-3">
            <p className="fottitle">Close and Manage Leads</p>
            <a className="footermenu" href="/">Document Tracking Tool</a>
            <a className="footermenu" href="/">Meeting Schedule Tool</a>
            <a className="footermenu" href="/">Sales Automation Tool</a>
            <a className="footermenu" href="/">Lead Management Tool</a>
            <a className="footermenu" href="/">Pipeline Management Tool</a>
          </div>
          <div className="col-lg-3">
            <p className="fottitle">Support and Tools</p>
            <a className="footermenu" href="/">HubSpot Partners</a>
            <a className="footermenu" href="/">Join a Local User Group</a>
            <a className="footermenu" href="/">PieSync Integrations</a>
            <a className="footermenu" href="/">HubSpot Templates</a>
            <a className="footermenu" href="/">Free Tools and Generators</a>
          </div>
        </div>
        <div className="row lists">
          <a className="footermenu ml-auto mr-4" style={{fontSize: '1.2rem'}} href="/">English</a>
          <a className="footermenu mr-4" style={{fontSize: '1.2rem'}} href="/">Deutsch</a>
          <a className="footermenu mr-4" style={{fontSize: '1.2rem'}} href="/">日本語</a>
          <a className="footermenu mr-4" style={{fontSize: '1.2rem'}} href="/">Español</a>
          <a className="footermenu mr-4" style={{fontSize: '1.2rem'}} href="/">Português</a>
          <a className="footermenu mr-auto" style={{fontSize: '1.2rem'}} href="/">Français</a>
        </div>
        <hr style={{border: '1px solid #CBD6E2'}}/>
        <div>
          <img src="images/fot.PNG" alt="fotlogo"/>
          <a className="footermenu mr-4" style={{fontSize: '1.2rem', float:'right'}} href="/">Leagal Stuff</a>
          <a className="footermenu mr-4" style={{fontSize: '1.2rem', float:'right'}} href="/">Privacy Policy</a>
          <p className="footermenu" style={{paddingBottom: '40px', marginBottom: 0}}>Copyright © 2020 HubSpot, Inc.</p>
        </div>
      </div>
    </div>
  )
}
