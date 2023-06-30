
/**
 * @jest-environment jsdom
 */

const { dropItIn } = require('./domHandler.js');

describe('dropItIn', () => {
  let targetContainer;

  beforeEach(() => {
    // Set up the target container
    targetContainer = {
      addChild: jest.fn(),
    };
  });

  it('should add an HTMLElement to the target container', () => {
    const array = document.createElement('div');
    const result = dropItIn(array, targetContainer);

    expect(targetContainer.addChild).toHaveBeenCalledWith(array);
    expect(result).toBe(targetContainer);
  });

  it('should add an array of elements to the target container', () => {
    const array = [document.createElement('div'), document.createElement('span')];
    const result = dropItIn(array, targetContainer);

    array.forEach((element) => {
      expect(targetContainer.addChild).toHaveBeenCalledWith(element);
    });
    expect(result).toBe(targetContainer);
  });

  it('should return the target container when item is neither HTMLElement nor array', () => {
    const item = 'not an HTMLElement or array';
    const result = dropItIn(item, targetContainer);

    expect(targetContainer.addChild).not.toHaveBeenCalled();
    expect(result).toBe(targetContainer);
  });
});