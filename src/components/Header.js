import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Header,Icon, Image } from 'semantic-ui-react'
function Headder({text,icon}) {
    return (
        
            <Header as='h2' icon textAlign='center'>
      <Icon name={icon} circular />
      <Header.Content>{text}</Header.Content>
    </Header>
       
    )
}

export default Headder
