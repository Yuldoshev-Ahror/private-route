import React, { useState } from 'react';
import { Input, Button } from "antd"

import {
    Container,
    Content
} from "./style"

const Search = ({callback}) => {

    const [ searchName, setSearchName ] = useState("");

    return (
        <Container>
            <Content>
                <Input placeholder="Search" onChange={(element) => setSearchName(element.target.value)} />
                <Button onClick={() => callback(searchName)} type="primary">Search</Button>
            </Content>
        </Container>
    );
}

export default Search;
