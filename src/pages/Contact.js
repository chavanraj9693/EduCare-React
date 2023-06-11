import React from "react";
import { Icon } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';


function Contact() {
    return (
      <section className="contact" style={{ background: 'linear-gradient(to bottom, #070606, #333333)', color: '#000000', padding: '50px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000', marginBottom: '20px' }}>Contact Us</h2>
          <p className="section-description" style={{ fontSize: '18px', color: '#555555', marginBottom: '20px' }}>Feel free to reach out to us for any inquiries or questions. We'd love to hear from you!</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/rajchavan9693" target="_blank" rel="noopener noreferrer">
              <Icon component={LinkedInIcon} fontSize="large" />
            </a>
            <a href="https://github.com/chavanraj9693" target="_blank" rel="noopener noreferrer">
              <Icon component={GitHubIcon} fontSize="large" />
            </a>
            <a href="https://github.com/chavanraj9693" target="_blank" rel="noopener noreferrer">
              <Icon component={InstagramIcon} fontSize="large" />
            </a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
  