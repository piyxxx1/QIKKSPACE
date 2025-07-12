import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const SEO: React.FC<SEOProps> = ({
  title = 'QIKK SPACE - Website Development, App Development & AI/ML Services',
  description = 'QIKK SPACE offers professional website development, app development, and AI/ML services. Transform your ideas into digital reality with our expert team.',
  keywords = 'website development, app development, AI services, ML services, digital transformation, web design, mobile apps',
  image = '/assets/qikksapceiconlogo.png',
  url = 'https://qikkspace.com',
  type = 'website'
}) => {
  const fullTitle = title.includes('QIKK SPACE') ? title : `${title} | QIKK SPACE`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="QIKK SPACE" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO; 