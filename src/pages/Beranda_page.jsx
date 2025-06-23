import React from 'react';
import Media from 'react-media';
import BerandaContent1 from '../components/BerandaContent1';
import BerandaContentMobile1 from '../components/BerandaContentMobile1';
import BerandaContent2 from '../components/BerandaContent2';
import BerandaContentMobile2 from '../components/BerandaContentMobile2';
import BerandaContent3 from '../components/BerandaContent3';
import BerandaContentMobile3 from '../components/BerandaContentMobile3';

function Beranda_page() {
  return (
    <>
      <Media
        queries={{
          mobile: '(max-width: 599px)',
          desktop: '(min-width: 600px)',
        }}>
        {(matches) => (
          <>
            {matches.mobile && <BerandaContentMobile1 />}
            {matches.desktop && <BerandaContent1 />}
            {matches.mobile &&  <BerandaContentMobile2 />}
            {matches.desktop &&  <BerandaContent2 />}
            {matches.mobile && <BerandaContentMobile3 />}
            {matches.desktop && <BerandaContent3 />}
           
          </>
        )}
      </Media>

   
    </>
  );
}

export default Beranda_page;
