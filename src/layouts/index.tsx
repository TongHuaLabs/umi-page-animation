import React from 'react';
import { IRouteComponentProps } from 'umi';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useTransition, animated, UseTransitionProps } from 'react-spring';
import { Switch } from 'react-router';

type BasicLayoutProps = IRouteComponentProps;

const foward: UseTransitionProps<JSX.Element, React.CSSProperties> = {
  from: { opacity: 0, transform: 'translateX(100%)' },
  enter: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  leave: { opacity: 0, transform: 'translateX(-100%)' },
  config: { duration: 2000 },
};

const back: UseTransitionProps<JSX.Element, React.CSSProperties> = {
  from: { opacity: 0, transform: 'translateX(-100%)' },
  enter: {
    opacity: 1,
    transform: 'translateX(0)',
  },
  leave: { opacity: 0, transform: 'translateX(100%)' },
  config: { duration: 2000 },
};

const BasicLayout: React.FC<BasicLayoutProps> = ({
  children,
  location,
  history,
}) => {
  const newSwitch = (
    <Switch location={location}>{children.props.children}</Switch>
  );

  // Example using React-Transition-Group
  // return (
  //   <TransitionGroup
  //     childFactory={(child: any) =>
  //       React.cloneElement(child, {
  //         classNames: history.action === 'PUSH' ? 'forward' : 'back',
  //       })
  //     }
  //   >
  //     <CSSTransition key={location.pathname} timeout={2000}>
  //       {newSwitch}
  //     </CSSTransition>
  //   </TransitionGroup>
  // );

  // Example using react-spring
  const transitions = useTransition(
    newSwitch,
    location.pathname,
    history.action === 'PUSH' ? foward : back,
  );

  return (
    <div>
      {transitions.map(({ item, key, props: style }) => {
        return (
          <animated.div
            key={key}
            style={{
              ...style,
              width: '100vw',
              position: 'fixed',
              top: 0,
              minHeight: '100vh',
            }}
          >
            {item}
          </animated.div>
        );
      })}
    </div>
  );
};

export default BasicLayout;
