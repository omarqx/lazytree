const treeview = require('../src/index');

describe('basic list rendering', () => {
  it('renders correctly', () => {
    const tree = treeview([
      {
        value: 'first',
        id: 1
      },
      {
        value: 'second',
        id: 2
      }
    ]);
    expect(tree).toMatchSnapshot();
  });
});