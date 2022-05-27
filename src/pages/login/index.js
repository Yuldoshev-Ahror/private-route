import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import fetchs
import { fetchLogin } from "../../Redux/actions/admin";

// ant desgin components
import { Input, Tooltip, Button, message } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  UnlockOutlined,
  IeOutlined
} from "@ant-design/icons";

// import styles
import {
  Container,
  Content,
  MainContent,
  Title,
  InputTitle,
  ItemContainer,
  ButtonContainer,
} from "./style";

// import middleware
import {
  loginUserNameValidateFunc,
  loginPasswordValidateFunc,
  loginSubdomainValidateFunc,
} from "../../middleware/loginValidate";

const Login = () => {
  const [isLodading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState({ value: "", error: "", success: "" });
  const [password, setPassword] = useState({ value: "", error: "", success: "" });
  const [subdomain, setSubdomain] = useState({ value: "", error: "", success: "" });

  const dispatch = useDispatch();
  const login = useSelector((state) => state.Admin.login);

  useEffect(() => {
    setIsLoading(false);
    if (login.success) {
      message.success("This is a success message");
    }
    if (login.failed) {
      setUserName({ ...userName, error: login.errorMessage, success: "" });
      setPassword({ ...password, error: login.errorMessage, success: "" });
      setSubdomain({ ...subdomain, error: login.errorMessage, success: "" });
      message.error(login.errorMessage);
    }
    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  const handleChangeUserName = (element) => {
    if (!element.target.value)
      return setUserName({ value: "", success: "", error: "" });

    loginUserNameValidateFunc({userName: element.target.value})
        .then((res) => {
            if(!res.error)
                return setUserName({value: res.data.userName, success: "success", error: ""});
                setUserName({value: res.data.userName, success: "", error: res.errorMessage})
        })
  };

  const handleChangePassword = (element) => {
    if (!element.target.value)
      return setPassword({ value: "", success: "", error: "" });

    loginPasswordValidateFunc({password: element.target.value})
        .then((res) => {
            if(!res.error)
                return setPassword({value: res.data.password, success: "success", error: ""});
                setPassword({value: res.data.password, success: "", error: res.errorMessage})
        })
  };

  const handleChangeSubdomain = (element) => {
    if (!element.target.value)
    return setSubdomain({ value: "", success: "", error: "" });

    loginSubdomainValidateFunc({subdomain: element.target.value})
        .then((res) => {
            if(!res.error)
                return setSubdomain({value: res.data.subdomain, success: "success", error: ""});
            setSubdomain({value: res.data.subdomain, success: "", error: res.errorMessage})
        })
  };

  const loginFunc = (event) => {
    setIsLoading(true);
    dispatch(fetchLogin({ 
        userName: userName.value, 
        password: password.value, 
        subdomain: subdomain.value
    }));
  };

  return (
    <Container>
      <Content>
        <MainContent>
          <Title>Login</Title>
          <ItemContainer>
            <InputTitle>User name</InputTitle>
            <Input
              value={userName.value}
              name="userName"
              onChange={handleChangeUserName}
              placeholder="Enter your user name"
              prefix={<UserOutlined />}
              suffix={
                <Tooltip
                  title={
                    userName.success
                      ? userName.success
                      : userName.error
                      ? userName.error
                      : "Enter your user name"
                  }
                >
                  <InfoCircleOutlined
                    style={{
                      color: userName.success
                        ? "green"
                        : userName.error
                        ? "red"
                        : "rgba(0,0,0,.45)",
                    }}
                  />
                </Tooltip>
              }
            />
          </ItemContainer>
          <ItemContainer>
            <InputTitle>Password</InputTitle>
            <Input
              value={password.value}
              name="password"
              onChange={handleChangePassword}
              placeholder="Enter your password"
              prefix={<UnlockOutlined />}
              suffix={
                <Tooltip
                  title={
                    password.success
                      ? password.success
                      : password.error
                      ? password.error
                      : "Enter your password"
                  }
                >
                  <InfoCircleOutlined
                    style={{
                      color: password.success
                        ? "green"
                        : password.error
                        ? "red"
                        : "rgba(0,0,0,.45)",
                    }}
                  />
                </Tooltip>
              }
            />
          </ItemContainer>
          <ItemContainer>
            <InputTitle>Subdomain</InputTitle>
            <Input
              value={subdomain.value}
              name="subdomain"
              onChange={handleChangeSubdomain}
              placeholder="Enter your subdomain"
              prefix={<IeOutlined />}
              suffix={
                <Tooltip
                  title={
                    subdomain.success
                      ? subdomain.success
                      : subdomain.error
                      ? subdomain.error
                      : "Enter your subdomain"
                  }
                >
                  <InfoCircleOutlined
                    style={{
                      color: subdomain.success
                        ? "green"
                        : subdomain.error
                        ? "red"
                        : "rgba(0,0,0,.45)",
                    }}
                  />
                </Tooltip>
              }
            />
          </ItemContainer>
          <ButtonContainer>
            <Button type="primary" loading={isLodading} onClick={loginFunc}>
              Login
            </Button>
          </ButtonContainer>
        </MainContent>
      </Content>
    </Container>
  );
};

export default Login;
