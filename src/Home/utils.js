import React from 'react';
import { Button, Popover } from 'antd';
import {
  WechatOutlined,
  TwitterOutlined,
  WeiboCircleOutlined,
  GithubOutlined,
  createFromIconfontCN,
} from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1786450_uian27ff93.js',
});

export const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;

export const getChildrenToRender = (item, i) => {
  let tag = item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  let children =
    typeof item.children === 'string' && item.children.match(isImg)
      ? React.createElement('img', { src: item.children, alt: 'img' })
      : item.children;
  if (item.name.indexOf('button') === 0 && typeof item.children === 'object') {
    children = React.createElement(Button, {
      ...item.children,
    });
  }

  if (item.name.indexOf('icon') === 0 && typeof item.children === 'object') {
    if (item.children.type === 'wechat') {
      children = <WechatOutlined />;
    }

    if (item.children.type === 'twitter') {
      children = <TwitterOutlined />;
    }

    if (item.children.type === 'weibo') {
      children = <WeiboCircleOutlined />;
    }

    if (item.children.type === 'github') {
      children = <GithubOutlined />;
    }

    if (item.children.type === 'telegram') {
      children = <IconFont type="icon-telegram" />;
    }

    if (item.children.type === 'weixin') {
      tag = 'div';
      const p_content = (
        <div>
          <img src={item.img} />
        </div>
      );

      children = (
        <Popover content={p_content}>
          <IconFont type="icon-wechat-" />
        </Popover>
      );
    }
  }

  return React.createElement(tag, { key: i.toString(), ...item }, children);
};
