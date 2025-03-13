import React from 'react';
import renderer from 'react-test-renderer';
import { Title } from '@components/ui/title/title';

describe('Title Component', () => {
  it('should render with title only', () => {
    const component = renderer.create(<Title title="Hello World" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with title and subtitle', () => {
    const component = renderer.create(<Title title="Hello World" subtitle="Welcome to the application" />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render the title text correctly', () => {
    const testTitle = 'Test Title';
    const component = renderer.create(<Title title={testTitle} />);

    // Get the rendered output as string and check if it contains the title
    const renderedOutput = JSON.stringify(component.toJSON());
    expect(renderedOutput).toContain(testTitle);
  });

  it('should not render subtitle when not provided', () => {
    const component = renderer.create(<Title title="Hello World" />);

    // Get the rendered output as string and check that it doesn't contain subtitle class
    const renderedOutput = JSON.stringify(component.toJSON());
    expect(renderedOutput).not.toContain('heading-title__subtitle');
  });
});
