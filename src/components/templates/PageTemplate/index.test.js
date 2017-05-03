import PageTemplate from '.';

it('renders', (props = {}) => {
  shallow(
    <PageTemplate header="header" footer="footer" {...props}>
      test
    </PageTemplate>,
  );
});
