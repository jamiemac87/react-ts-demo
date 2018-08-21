import * as React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store/reducers';

interface StateProps {
  name: string;
}

interface Props extends StateProps {
  greeting: string;
}

class App extends React.Component<Props> {
  public render() {
    return (
      <div>
        {this.props.name}
        {this.props.greeting}
      </div>
    );
  }
}


const mapStateToProps = (state: AppState): StateProps => {
  return state;
};

export const ConnectedApp = connect(mapStateToProps)(App);
