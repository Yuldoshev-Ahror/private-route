import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";

import { fetGetProducts } from "../../Redux/actions/admin";

import {
    Container,
    Content
} from "./style";

// import Components
import Search from "../../components/Search";

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
        title: 'Supplier Id',
        dataIndex: 'supplierId',
    }
  ];

const Main = () => {

    const dispatch = useDispatch();
    const [controllerProducts, setControllerProducts] = useState(null);

    const products = useSelector(state => state.Admin.products);

    useEffect(() => {
        if(!products.data)
            return dispatch(fetGetProducts());
        setControllerProducts(products.data.items)
    }, [dispatch, products.data]);

    const handleSearch = (searchName) => {
        if(!searchName) return setControllerProducts(products.data.items);
        let foudProducts = controllerProducts.filter((item) => item.name.includes(searchName));
        foudProducts = foudProducts.sort((a, b) => {
            if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            return 0
        });

        setControllerProducts(foudProducts)
    }

    if(!controllerProducts) return <div>loding...</div>
    
    return (
        <Container>
            <Content>
                <Search callback={handleSearch} />
                <Table columns={columns} dataSource={Array(100).fill({name: "salom", supplierId: 1})} size="middle" />
            </Content>
        </Container>
    );
}

export default Main;
