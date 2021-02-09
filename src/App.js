import React, {useState} from 'react';

function App() {
  return (
  <div>
    <Folder name="Desktop" isOpen={false}>
      <Folder name="Music">
        <File name="all_star.mp4"/>
        <File name="express_file.mp4"/>
      </Folder>
    <File name="dog.jpeg"/>
    <File name="cat.png"/>
    </Folder>
    <Folder name="Application"/>

  </div>
  );
}


const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const {name, children} = props

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return <div>
      <span onClick={handleClick}>{name}</span>
      <div style={{marginLeft: '17px'}}>
        {isOpen ? children : null}
      </div>
    </div>
};
const File = (props) => {
  return <div>{props.name}</div>
};

export default App;

