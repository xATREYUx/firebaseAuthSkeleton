import React, { useRef, useState } from "react";
import Header from "../header-footer/Header";

import { ReactComponent as BlobTop } from "../../../shared/images/blobTop.svg";
import { ReactComponent as BubbleBlobs } from "../../../shared/images/bubbleBlobs.svg";
import {
  AnimationLookDown,
  AnimationFreeFall,
  AnimationCoupleSitting,
} from "../../../shared/SilhouetteBlocks/SilhouetteBlocks";

import AboutThisSite from "../../../components/aboutThisSite/AboutThisSite";

import {
  Column,
  Title,
  FlexBreak,
  Paragraph,
} from "../../../shared/shared.styles";

import {
  HomePageContainer,
  SectionContainer,
  AboutMeContainer,
} from "./home-page.styles";
import PostList from "../../posts/PostList";

const HomePage = () => {
  const [loadedPosts, setLoadedPosts] = useState([]);
  const bubblesRef = useRef();

  return (
    <HomePageContainer>
      <Header />
      <SectionContainer id="section-container">
        <BlobTop className="backBlobTop" />
        <AnimationCoupleSitting />
        <Column id="section-column-left">
          <Title>React Engineering</Title>
          <AboutThisSite />
          <PostList posts={loadedPosts} />
        </Column>
        <Column id="section-column-right">
          {/* <ProfileSection /> */}
          <AnimationLookDown />
          <AboutMeContainer className="aboutMeContiner">
            <AnimationFreeFall />
            <Paragraph className="aboutMeText">
              Code is salvation. Supercharging processes with tech is fun. Red
              pill, all day. Redux rocks. Teach script to kids. I got components
              for days. StackOverflow amazes me. I like them styled with Sass.
              More beeps and boops. Keep renders down. Make javascript your
              b****. Captain Archer is the best starship Captain; change my
              mind. I could have loved Cary Grant. Data, Data, Data. If google
              can’t answer your question, you’re asking the wrong one. Must
              learn more Python. "The jungian thing." It’s only logical. K. I.
              S. S. Dare to dream. Covid sucks. Dark mode 24/7. The Rock for
              President. Birds & squirrels, home runs & touchdowns. Thrive,
              don’t survive. Port in, zone out. Cable guys don’t know what a
              packet is. I scream love and punk rock at the sky. There are
              levels to this game.
            </Paragraph>
          </AboutMeContainer>
        </Column>
      </SectionContainer>
      {/* <HomeMidSectionOne posts={loadedPosts} /> */}
      <BubbleBlobs className="bubbleBlobs" ref={bubblesRef} />
      <BlobTop className="backBlobBottom" preserveAspectRatio="none" />
    </HomePageContainer>
  );
};

export default HomePage;