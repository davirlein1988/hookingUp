import React, { Fragment, useState } from 'react';
import LoadingIndicator from '../LoadingIndicator';

const styles = {
  header: {
    color: '#000',
    background: '#eee',
    textAlign: 'center',
  },
  menu: {
    background: '#aa44cc',
    borderRadius: '5px',
    display: 'flex',
  },
  input: {},
  itemList: {
    display: 'inline',
    marginLeft: '2rem',
  },
};

const Header = () => <div style={styles.header}>Super awesome app</div>;

const Menu = ({ height }) => (
  <div style={{ height, ...styles.menu }}>
    <ul style={{ width: '100%' }}>
      <li style={styles.itemList}>Home</li>
      <li style={styles.itemList}>About</li>
      <li style={styles.itemList}>Services</li>
      <li style={styles.itemList}>Contact</li>
    </ul>
  </div>
);
const List = ({ task }) => (
  <ul>
    <li>{task}</li>
  </ul>
);

const Wrapper = ({ children }) => <div>{children}</div>;

const TextInput = ({ task, setTask }) => {
  const onChange = evt => {
    setTask(evt.target.value);
  };
  const onClick = evt => {
    setTask(evt.target.value);
  };
  return (
    <div>
      <input
        value={task}
        onChange={onChange}
        type="text"
        style={styles.input}
      />
      <button onClick={onClick} type="submit">
        Click
      </button>
    </div>
  );
};

export const Layout = ({ children, isLoading }) => {
  const [task, setTask] = useState('');
  return <Fragment>{children}</Fragment>;
};
