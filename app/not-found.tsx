import React from 'react';

export const rootNotFoundMetadata = {
  title: 'Not Found',
  description: 'Page not found :(',
};

const RootNotFound: React.FC = () => {
  return <div>Sorry this page was not found :/</div>;
}

export default RootNotFound;
