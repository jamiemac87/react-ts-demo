import * as React from 'react';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { AppState } from '../store/reducers';
import { UpdateNameActionCreator } from '../store/actions/user.actions';

interface StateProps {
  name: string;
}

interface DispatchProps {
  updateName: (name: string) => void,
}

interface Props extends StateProps, DispatchProps {
  greeting: string;
}

class App extends React.Component<Props> {
  public render() {
    return (
      <React.Fragment>
        <div>
          {this.props.name}
          <br />
          {this.props.greeting}
        </div>

        <button onClick={this.updateName}>Click me</button>
      </React.Fragment>
    );
  }

  updateName = () => {
    this.props.updateName('james');
  }

}
const mapStateToProps: MapStateToProps<StateProps, Props, AppState> = (state) => {
  return state.user;
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, Props> = (dispatch) => {
  return {
    updateName: (name) => dispatch(new UpdateNameActionCreator(name))
  }
}

export const ConnectedApp = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(App);
