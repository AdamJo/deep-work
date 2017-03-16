import React, { PureComponent } from 'react';

import { PageTemplate, Header, Charts } from 'components';

const HomePage = class HomePage extends PureComponent {
  render() {
    return (
      <PageTemplate {...this.props} header={<Header />}>
        {/*<ChartMenu/>*/}
        <Charts {...this.props} />
      </PageTemplate>
    );
  }
};

export default HomePage;
