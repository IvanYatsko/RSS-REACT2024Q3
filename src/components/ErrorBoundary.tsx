import { Component, ErrorInfo } from 'react';
import IProps from '../types/props';
import ButtonTryAgain from './ButtonTryAgain';
import { IState } from '../types/state';

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromError(): IState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Ошибка:', error, errorInfo);
  }

  private handleClick() {
    this.setState({ hasError: false });
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Sorry, an error occurred, we are working on it</h1>
          <ButtonTryAgain onClick={this.handleClick}></ButtonTryAgain>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
