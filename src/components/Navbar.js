import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';

class NavbarHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
          <Navbar style={{backgroundColor: '#F5F8FA', borderBottom: '1px solid #CBD6E2'}} light expand="md" className="py-3 d-none d-lg-block" fixed="top">
          <div className="container">
          <Nav className="mr-auto" navbar>
            <img className="mt-2" src="images/globe.PNG" alt="globe icon" style={{height: '30px', width: '30px'}} />
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{color: 'black', fontSize: '1rem'}}>
                English
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  Deutsch
                </DropdownItem>
                <DropdownItem>
                  日本語
                </DropdownItem>
                <DropdownItem>
                  Español
                </DropdownItem>
                <DropdownItem>
                  Português
                </DropdownItem>
                <DropdownItem>
                  Français
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> 
            <div className="vertical-line" /> 
            <NavItem>
              <NavLink href="#" style={{fontSize: '1rem', color: 'black'}}>Contact Sales</NavLink>
            </NavItem>
            <Collapse navbar style={{marginLeft: '40vw'}}>
              <Button outline style={{color: '#FF7A59', border: '1px solid #FF7A59', backgroundColor: 'white'}}>Log in</Button>
              <Button className="ml-3" style={{color: 'white', backgroundColor: '#FF7A59', border: 'none'}}>Get HubSpot free</Button>
            </Collapse>
          </Nav>
          </div>
          </Navbar> 
        <Navbar color="faded" light expand="lg" className="py-3" style={{marginTop: '70px'}}>
          <div className="container">
            <NavbarBrand href="#">
              <img src="images/logo.PNG" alt="logo" style={{height: 40}}/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar style={{marginLeft: '30vw'}}>
              <Nav className="mr-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{fontSize: '1rem', color: 'black', marginRight: 20}}>
                    Software
                  </DropdownToggle>
                  <DropdownMenu style={{width: '400px'}}>
                    <DropdownItem>
                      <div className="container row pr-0 mr-0">
                        <div className="col-2 pl-0">
                          <img src="images/i1.PNG" alt="design" className="navdropimg"/>
                        </div>
                        <div className="col-10 p-0">
                          <p className="headnav">Free HubSpot CRM</p>
                          <small className="bodydropnav">All your contacts and companies, 100% free.</small>
                        </div>
                      </div>
                    </DropdownItem>
                    <hr />
                    <DropdownItem style={{paddingBottom: 10}}>
                      <div className="container row pr-0 mr-0">
                        <div className="col-2 pl-0">
                          <img src="images/i2.PNG" alt="design" className="navdropimg"/>
                        </div>
                        <div className="col-10 p-0">
                          <p className="headnav">Marketing Hub</p>
                          <small className="bodydropnav">Marketing software to increase traffic and leads. Free and premium plans.</small>
                        </div>
                      </div>
                    </DropdownItem>
                    
                    <DropdownItem style={{paddingBottom: 10}}>
                      <div className="container row pr-0 mr-0">
                        <div className="col-2 pl-0">
                          <img src="images/i3.PNG" alt="design" className="navdropimg"/>
                        </div>
                        <div className="col-10 p-0">
                          <p className="headnav" style={{width:100}}>Sales Hub</p>
                          <small className="bodydropnav">Sales software for closing more deals, faster. Free and premium plans.</small>
                        </div>
                      </div>
                    </DropdownItem>
                    
                    <DropdownItem style={{paddingBottom: 10}}>
                      <div className="container row pr-0 mr-0">
                        <div className="col-2 pl-0">
                          <img src="images/i4.PNG" alt="design" className="navdropimg"/>
                        </div>
                        <div className="col-10 p-0">
                          <p className="headnav">Service Hub</p>
                          <small className="bodydropnav">Software for providing first-class customer service. Free and premium plans.</small>
                        </div>
                      </div>
                    </DropdownItem>
              
                    <DropdownItem >
                      <div className="container row pr-0 mr-0">
                        <div className="col-2 pl-0">
                          <img src="images/i5.PNG" alt="design" className="navdropimg"/>
                        </div>
                        <div className="col-10 p-0">
                          <p className="headnav">CMS Hub</p>
                          <small className="bodydropnav">Content management software to power websites. Premium plans and free trial.</small>
                        </div>
                      </div>
                    </DropdownItem>
                    <br />
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink href="#" style={{fontSize: '1rem', color: 'black', marginRight: 20}}>
                    Pricing
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{fontSize: '1rem', color: 'black', marginRight: 20}}>
                    Resources
                  </DropdownToggle>
                  <DropdownMenu right style={{width: '800px'}}>
                    <div className="container row">
                      <DropdownItem style={{padding: 25}} className="col-4">
                        <p className="headnav">Blog</p>
                        <small className="bodydropnav">Read marketing, sales, agency, and customer success blog content.</small>
                      </DropdownItem>
                      <DropdownItem style={{padding: 25}} className="col-4">
                        <p className="headnav">Customer Stories</p>
                        <small className="bodydropnav">Hear from the businesses that use HubSpot to grow better every day.</small>
                      </DropdownItem>
                      <DropdownItem style={{padding: 25}} className="col-4">
                        <p className="headnav">Developers</p>
                        <small className="bodydropnav">Create apps and custom integrations businesses HubSpot.</small>
                      </DropdownItem>
                    </div>
                    <hr className="mt-0 mb-0"/>
                    <div className="container row">
                      <DropdownItem style={{padding: 25}} className="col-4">
                        <p className="headnav">Ebooks, Guides & More</p>
                        <small className="bodydropnav">Get access to HubSpot’s most popular marketing resources.</small>
                      </DropdownItem>
                      <DropdownItem style={{padding: 25}} className="col-4">
                        <p className="headnav">Onboarding & services</p>
                        <small className="bodydropnav">Find training and consulting services to help you thrive with HubSpot.</small>
                      </DropdownItem>
                      <DropdownItem style={{padding: 25}} className="col-4">
                        <p className="headnav">Research & Reports</p>
                        <small className="bodydropnav">Get up-to-date research and data on hot business trends.</small>
                      </DropdownItem>
                    </div>
                    <hr className="mt-0 mb-0"/>
                    <div className="container row">
                      <DropdownItem style={{padding: 25}} className="col-4">
                        <p className="headnav">Free Courses & Certifications</p>
                        <small className="bodydropnav">Take courses on the latest business trends, taught by industry experts.</small>
                      </DropdownItem>
                      <DropdownItem style={{padding: 25}} className="col-4">
                        <p className="headnav">What is Inbound?</p>
                        <small className="bodydropnav">Get a primer on how inbound helps your business grow better.</small>
                      </DropdownItem>
                      <DropdownItem style={{padding: 25}} className="col-4">
                        <p className="headnav">Customer Support</p>
                        <small className="bodydropnav">Get help if you have questions about using HubSpot software.</small>
                      </DropdownItem>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{fontSize: '1rem', color: 'black', marginRight: 20}}>
                    Partners
                  </DropdownToggle>
                  <DropdownMenu right style={{width: '600px'}}>
                    <div className="container row">
                      <DropdownItem style={{padding: 25}} className="col-6">
                        <p className="headnav">Hire a Partner</p>
                        <small className="bodydropnav">Find a partner in our global community of service providers who help you grow.</small>
                      </DropdownItem>
                      <DropdownItem style={{padding: 25}} className="col-6">
                        <p className="headnav">Partner with Us</p>
                        <small className="bodydropnav">Explore our sales, agency, and app partnership programs.</small>
                      </DropdownItem>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={{fontSize: '1rem', color: 'black', marginRight: 20}}>
                    About
                  </DropdownToggle>
                  <DropdownMenu right style={{width: '700px'}}>
                    <div className=" row">
                      <div className="col-4">
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <p className="headnav">Company</p>
                        </DropdownItem>
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <small className="bodydropnav">About Us</small>
                        </DropdownItem>
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <small className="bodydropnav">Contact Us</small>
                        </DropdownItem>
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <small className="bodydropnav">Management Team</small>
                        </DropdownItem>
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <small className="bodydropnav">Board of Directors</small>
                        </DropdownItem>
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <small className="bodydropnav">Careers</small>
                        </DropdownItem>
                      </div>
                      <div className="col-4">
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <p className="headnav">News</p>
                        </DropdownItem>
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <small className="bodydropnav">HubSpot News</small>
                        </DropdownItem>
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <small className="bodydropnav">Press Resources</small>
                        </DropdownItem>
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <small className="bodydropnav">Speakers</small>
                        </DropdownItem>
                      </div>
                      <div className="col-4">
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <p className="headnav">Investers</p>
                        </DropdownItem>
                        <DropdownItem style={{paddingBottom: 15, fontSize:'1rem'}}>
                          <small className="bodydropnav">Investers Relations</small>
                        </DropdownItem>
                      </div>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default NavbarHeader;