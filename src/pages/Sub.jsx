import React from 'react';
import Header from 'components/Common/Header';
import LikeFiles from 'components/Sub/LikeFiles';
import Footer from 'components/Common/Footer';

const Sub = () => {
  console.log('sub');
  return (
    <>
      <Header />
      <LikeFiles />
      <Footer />
    </>
  );
};

export default Sub;
