import React, { useEffect } from 'react';
import * as S from './Contact.styled';
import Page from '../../hocs/Page/Page';
import { Link } from 'react-router-dom';
import Gallery from '../../hocs/Gallery/Gallery';

import { FaGithub, FaLinkedin, FaRobot, FaInstagram } from 'react-icons/fa';

import FRONTVIEW from '../../assets/img/art/frontview.png';
import SIDEVIEW from '../../assets/img/art/sideview.png';

const CONTACT_ART = [
  {
    src: FRONTVIEW,
    caption: 'Piece 5.'
  },
  {
    src: SIDEVIEW,
    caption: 'Piece 6.'
  }
]

const Contact: React.FC<{}> = React.memo(() => {
  useEffect(() => {
    document.title = "contact – nobot #0000";
  });

  return (
    <Page reversed>
      <S.Text>
        <h1>my contact details</h1>
        <h3>messaging me</h3>
        <p>
          if you want to talk, feel free to shoot me an email at <b><u><a href="mailto:kirkilese@gmail.com">kirkilese@gmail.com</a></u></b>!
          i'd love to explain anything you've found on this website, take suggestions,
          or even just make a new connection.
        </p>
        <p>
          my other social medias can be found below, all being <b>evankirkiles</b>:
        </p>
        <S.MediaRow>
          <S.SocialMedia>
            <Link to={{pathname: 'https://github.com/evankirkiles'}} >
              <FaGithub size={30} />
            </Link>
          </S.SocialMedia>
          <S.SocialMedia>
            <Link to={{pathname: 'https://www.linkedin.com/in/evankirkiles/'}} >
              <FaLinkedin size={30} />
            </Link>
          </S.SocialMedia>
          <S.SocialMedia>
            <Link to={{pathname: 'https://www.instagram.com/evankirkiles/'}} >
              <FaInstagram size={30} />
            </Link>
          </S.SocialMedia>
          <S.SocialMedia>
            <Link to={{pathname: 'https://nobot.space'}} >
              <FaRobot size={30} />
            </Link>
          </S.SocialMedia>
        </S.MediaRow>
        and lastly,
        <Link to="/files/evankirkiles_resume.pdf" target="_blank" download>
          <S.ResumeDownload>my resume can be found <u>here</u> if you're a recruiter ;)</S.ResumeDownload>
        </Link>
      </S.Text>
      <Gallery images={CONTACT_ART} />
    </Page>
  );
});

export default Contact;