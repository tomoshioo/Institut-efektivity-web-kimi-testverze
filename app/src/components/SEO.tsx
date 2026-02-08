import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.institutefektivity.cz';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = 'Institut Efektivity | Transformace veřejné správy',
  description = 'Expertní hub, který transformuje českou veřejnou správu v moderní, AI-native ekosystém. Full-stack partner: think-tank, consulting, agency.',
  keywords = 'veřejná správa, digitalizace, AI, automatizace, consulting, efektivita, státní správa, úřady, modernizace',
  image = '/logo-neon.png',
  url,
  type = 'website'
}: SEOProps) => {
  const fullTitle = title.includes('Institut Efektivity') ? title : `${title} | Institut Efektivity`;
  const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`;
  const absoluteUrl = url ? (url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`) : SITE_URL;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Institut pro efektivní veřejnou správu z.ú." />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="cs" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={absoluteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:locale" content="cs_CZ" />
      <meta property="og:site_name" content="Institut Efektivity" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={absoluteUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={absoluteImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={absoluteUrl} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#050505" />
      <meta name="msapplication-TileColor" content="#050505" />
    </Helmet>
  );
};

export default SEO;
