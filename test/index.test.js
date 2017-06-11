const treeview = require('../src/index');

describe('basic list', () => {
  it('should render basic two elements correctly', () => {
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
  it('should render basic single element correctly', () => {
    const tree = treeview([
      {
        value: 'first',
        id: 1
      }
    ]);
    expect(tree).toMatchSnapshot();
  });
});