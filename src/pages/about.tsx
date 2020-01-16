import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                The TomorrowScale podcast is a passion project created by Justin Briggs, intended for those interested in frontier technology companies.
              </p>
              <p>
                The host of the TomorrowScale Podcast is Justin Briggs. Justin is an executive with deep experience building biotechnology, nanotechnology, and software companies. Justin currently serves as Senior Director of Drug Development at Tetherex Pharmaceuticals, a company developing a first-in-class monoclonal antibody in Phase 2 clinical trials for multiple inflammatory conditions. Justin also advises companies on challenging research, product development, and commercialization programs as Principal of BriggsBio, LLC.  Previously, Justin served as Vice President of Development & Operations at Accele BioPharma and Venture Associate at Accele Venture Partners, a biotechnology accelerator and seed-stage venture capital firm where he managed a portfolio of therapeutic and diagnostics companies tackling diseases ranging from diabetes, infectious diseases, cancer, and even hearing loss. Prior to that, Justin served various research, development, operations, and management roles for venture-backed companies including Altheus Therapeutics, Crescendo Bioscience (acquired Myriad Genetics), PolySkope Labs, Ted’s Brain Science, Southwest Nanotechnologies, and KemmX Corp. Justin co-founded companies including Chorus Labs, a productivity software company, and SnapLab Technologies, which developed high-throughput automated analytical equipment and machine vision AI systems for energy exploration. Justin has a degree in Biomedical Sciences from the University of Oklahoma, an M.B.A. with High Honors from Oklahoma City University, and holds multiple US and International patents.
              </p>
              <p>
                In nunc lacus, dapibus vitae lacus sit amet, efficitur iaculis neque. Suspendisse ut
                tellus quis leo vestibulum tincidunt. Aenean nec enim ac dolor lacinia semper. Ut
                sed laoreet libero. Nunc elementum sollicitudin accumsan. Nunc eu augue neque. Proin
                a tortor nibh. Cras eu nisl ornare sapien feugiat pellentesque. Mauris dignissim vel
                quam eu pellentesque. Integer sit amet posuere quam, eu ullamcorper odio. Nullam a
                lacus tempus sapien dignissim ullamcorper. In hac habitasse platea dictumst. Proin
                quis massa aliquam, feugiat tortor sit amet, tincidunt urna. Donec posuere pulvinar
                lectus, ac semper ipsum vulputate quis.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
