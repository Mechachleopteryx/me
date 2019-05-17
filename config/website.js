module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'me - Luciano Júnior', // Navigation and Site Title
  titleAlt: 'Luciano Júnior', // Title for JSONLD
  description: 'Brazillian dev personal blog',
  headline: 'Writing and publishing content for peopl', // Headline for schema.org JSONLD
  url: 'https://me.juniorluciano.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Luciano', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Luciano Júnior', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@luciannojunior', // Twitter Username
  facebook: 'luciannojunior', // Facebook Site Name

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
