// App.js

import React, { useState, useEffect } from "react";
import { Layout, Menu, Input, Typography, Divider, List, Button, Avatar, message, Col, Row } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import axios from "axios";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function CryptoTracker() {
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 50,
            page: 1,
            sparkline: false,
          },
        });
        setCryptos(response.data);
      } catch (error) {
        message.error("Failed to fetch cryptocurrency data");
      }
    };

    fetchCryptos();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const addFavorite = (crypto) => {
    if (!favorites.some((fav) => fav.id === crypto.id)) {
      setFavorites([...favorites, crypto]);
      message.success(`${crypto.name} added to favorites`);
    } else {
      message.info(`${crypto.name} is already in favorites`);
    }
  };

  const removeFavorite = (crypto) => {
    setFavorites(favorites.filter((fav) => fav.id !== crypto.id));
    message.success(`${crypto.name} removed from favorites`);
  };

  const filteredCryptos = searchTerm
    ? cryptos.filter((crypto) => crypto.name.toLowerCase().includes(searchTerm))
    : cryptos;

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "#fff", padding: "10px 50px", display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Title style={{ color: "#000", margin: 0 }}>Crypto Portfolio</Title>
        <Input
          placeholder="Search cryptocurrency..."
          prefix={<SearchOutlined style={{ color: '#1890ff' }} />}
          onChange={handleSearch}
          style={{ width: 300, marginRight: '20px' }}
        />
      </Header>
      <Content style={{ padding: "20px 50px", marginTop: "20px" }}>
        <Row gutter={16}>
          <Col span={12}>
            <Title level={3} style={{ color: "#000" }}>All Cryptocurrencies</Title>
            <List
              itemLayout="horizontal"
              dataSource={filteredCryptos}
              renderItem={crypto => (
                <List.Item
                  actions={[
                    <Button type="primary" onClick={() => addFavorite(crypto)} disabled={favorites.some(fav => fav.id === crypto.id)}>
                      Add to Favorites
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={crypto.image} />}
                    title={<span style={{ color: "#000" }}>{crypto.name}</span>}
                    description={<span style={{ color: "#666" }}>USD {crypto.current_price.toFixed(2)}</span>}
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={12}>
            <Title level={3} style={{ color: "#000" }}>Your Favorites</Title>
            <List
              itemLayout="horizontal"
              dataSource={favorites}
              renderItem={crypto => (
                <List.Item
                  actions={[
                    <Button type="link" onClick={() => removeFavorite(crypto)} style={{ color: "#f5222d" }}>
                      Remove
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={crypto.image} />}
                    title={<span style={{ color: "#000" }}>{crypto.name}</span>}
                    description={<span style={{ color: "#666" }}>USD {crypto.current_price.toFixed(2)}</span>}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
        Crypto Tracker ©2024 Created by OpenAI
      </Footer>
    </Layout>
  );
}

export default CryptoTracker;
