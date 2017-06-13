const treeview = require('../src/index');

describe('basic list', () => {
  it('should render single element correctly', () => {
    const tree = treeview([
      {
        value: 'first',
        id: 1
      }
    ]);
    expect(tree).toMatchSnapshot();
  });
  it('should render two elements correctly', () => {
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
  it('should render empty list correctly', () => {
    const tree = treeview([]);
    expect(tree).toMatchSnapshot();
  });
  it('should render list with uniqe id', () => {
    const tree = treeview([{
      value:'no id generate guid',
    }]);
    const id = tree.children[0].getAttribute('id');
    expect(id).not.toBe(null);
    expect(id).toMatch(/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/);
  });
});