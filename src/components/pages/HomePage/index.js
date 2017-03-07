import React from 'react';

import { PageTemplate, Header, Charts} from 'components';

const HomePage = () => {
  return (
  <PageTemplate header={<Header />}>
    {/*<ChartMenu/>*/}
    <Charts/>
  </PageTemplate>);
};

export default HomePage;
