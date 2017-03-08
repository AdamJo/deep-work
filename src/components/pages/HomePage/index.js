import React from 'react';

import { PageTemplate, Header, Charts} from 'components';

const HomePage = ({...props}) => {
  return (
  <PageTemplate {...props} header={<Header />}>
    {/*<ChartMenu/>*/}
    <Charts {...props}/>
  </PageTemplate>);
};

export default HomePage;
