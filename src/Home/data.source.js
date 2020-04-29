import React from 'react';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper k9hwted3ds-editor_css' },
  page: { className: 'home-page k9hwsvv4u3e-editor_css' },
  logo: {
    className: 'header0-logo k9hwqznblqs-editor_css',
    children: 'https://s1.ax1x.com/2020/04/27/JWCeOS.png',
    href: '#',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'nodes',
        className: 'header0-item',
        children: {
          href: '#node',
          children: [{ children: '共建节点', name: 'text' }],
        },
        subItem: null,
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner01DataSource = {
  wrapper: { className: 'banner0 k9hvq97cc1h-editor_css' },
  textWrapper: { className: 'banner0-text-wrapper k9hwrk9ui7a-editor_css' },
  title: {
    className: 'banner0-title k9hwre5qwa-editor_css',
    children: 'https://s1.ax1x.com/2020/04/27/JWCeOS.png',
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>致力于打造一流的星云链 PoD 节点服务</p>
      </span>
    ),
  },
  button: {
    className: 'banner0-button',
    href: '#node',
    children: (
      <span>
        <p>现在投票，获得 NAS</p>
      </span>
    ),
  },
};

// 节点优势
export const Content00DataSource = {
  wrapper: { className: 'home-page-wrapper content0-wrapper' },
  page: { className: 'home-page content0' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [{ name: 'title', children: '我们的优势' }],
  },
  childWrapper: {
    className: 'content0-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '每日发放收益',
            },
            {
              name: 'content',
              children: '通过智能合约自动分发奖励 NAS, 接收地址即是投票地址',
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/YPMsLQuCEXtuEkmXTTdk.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '动态投票策略',
            },
            {
              name: 'content',
              children:
                '为使参与投票人利益最大化, 根据我们共建节点的排名情况, 动态进行投票策略调整',
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'content0-block',
        md: 8,
        xs: 24,
        children: {
          className: 'content0-block-item',
          children: [
            {
              name: 'image',
              className: 'content0-block-icon',
              children:
                'https://zos.alipayobjects.com/rmsportal/EkXWVvAaFJKCzhMmQYiX.png',
            },
            {
              name: 'title',
              className: 'content0-block-title',
              children: '超高分红比例',
            },
            {
              name: 'content',
              children: '节点分红比例最高达 88%',
            },
          ],
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      { name: 'title', children: 'NAX.ONE 共建节点', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: '即刻投出 NAX, 获得 NAS PoD挖矿奖励',
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 32,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: 'https://s1.ax1x.com/2020/04/27/JhDFZn.png',
          },
          content: {
            href: 'https://node.nebulas.io/detail/naxone01',
            title: 'NAX.ONE #1 - 巨人',
            children:
              '共识挖矿分红: 88%, 分红根据投票地址投票数进行权重加成后按比例分配. 1000~10w 权重1, 10w~50w 权重1.1,50w~100w 权重1.2,100w以上权重1.3 ',
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: {
            children: 'https://s1.ax1x.com/2020/04/27/JhDFZn.png',
          },
          content: {
            href: 'https://node.nebulas.io/detail/naxone02',
            title: 'NAX.ONE #2 - 挑战者',
            children: '共识挖矿分红: 83%, 分红根据投票地址投票数按比例分配',
          },
        },
      },
    ],
  },
};
// export const Content30DataSource = {
//   wrapper: { className: 'home-page-wrapper content3-wrapper' },
//   page: { className: 'home-page content3' },
//   OverPack: { playScale: 0.3 },
//   titleWrapper: {
//     className: 'title-wrapper',
//     children: [
//       {
//         name: 'title',
//         children: '蚂蚁金融云提供专业的服务',
//         className: 'title-h1',
//       },
//       {
//         name: 'content',
//         className: 'title-content',
//         children: '基于阿里云强大的基础资源',
//       },
//     ],
//   },
//   block: {
//     className: 'content3-block-wrapper',
//     children: [
//       {
//         name: 'block0',
//         className: 'content3-block',
//         md: 8,
//         xs: 24,
//         children: {
//           icon: {
//             className: 'content3-icon',
//             children:
//               'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
//           },
//           textWrapper: { className: 'content3-text' },
//           title: { className: 'content3-title', children: '企业资源管理' },
//           content: {
//             className: 'content3-content',
//             children:
//               '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
//           },
//         },
//       },
//       {
//         name: 'block1',
//         className: 'content3-block',
//         md: 8,
//         xs: 24,
//         children: {
//           icon: {
//             className: 'content3-icon',
//             children:
//               'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
//           },
//           textWrapper: { className: 'content3-text' },
//           title: { className: 'content3-title', children: '云安全' },
//           content: {
//             className: 'content3-content',
//             children:
//               '按金融企业安全要求打造的完整云上安全体系，全方位保障金融应用及数据安全。',
//           },
//         },
//       },
//       {
//         name: 'block2',
//         className: 'content3-block',
//         md: 8,
//         xs: 24,
//         children: {
//           icon: {
//             className: 'content3-icon',
//             children:
//               'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
//           },
//           textWrapper: { className: 'content3-text' },
//           title: { className: 'content3-title', children: '云监控' },
//           content: {
//             className: 'content3-content',
//             children:
//               '分布式云环境集中监控，统一资源及应用状态视图，智能分析及故障定位。',
//           },
//         },
//       },
//       {
//         name: 'block3',
//         className: 'content3-block',
//         md: 8,
//         xs: 24,
//         children: {
//           icon: {
//             className: 'content3-icon',
//             children:
//               'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
//           },
//           textWrapper: { className: 'content3-text' },
//           title: { className: 'content3-title', children: '移动' },
//           content: {
//             className: 'content3-content',
//             children:
//               '一站式移动金融APP开发及全面监控；丰富可用组件，动态发布和故障热修复。',
//           },
//         },
//       },
//       {
//         name: 'block4',
//         className: 'content3-block',
//         md: 8,
//         xs: 24,
//         children: {
//           icon: {
//             className: 'content3-icon',
//             children:
//               'https://zos.alipayobjects.com/rmsportal/UsUmoBRyLvkIQeO.png',
//           },
//           textWrapper: { className: 'content3-text' },
//           title: { className: 'content3-title', children: '分布式中间件' },
//           content: {
//             className: 'content3-content',
//             children:
//               '金融级联机交易处理中间件，大规模分布式计算机，数万笔/秒级并发能力，严格保证交易数据统一性。',
//           },
//         },
//       },
//       {
//         name: 'block5',
//         className: 'content3-block',
//         md: 8,
//         xs: 24,
//         children: {
//           icon: {
//             className: 'content3-icon',
//             children:
//               'https://zos.alipayobjects.com/rmsportal/ipwaQLBLflRfUrg.png',
//           },
//           textWrapper: { className: 'content3-text' },
//           title: { className: 'content3-title', children: '大数据' },
//           content: {
//             className: 'content3-content',
//             children:
//               '一站式、全周期大数据协同工作平台，PB级数据处理、毫秒级数据分析工具。',
//           },
//         },
//       },
//     ],
//   },
// };
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: 'https://s1.ax1x.com/2020/04/27/JWCeOS.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: '致力于打造一流的星云链 PoD 节点服务',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [{ name: 'link0', href: '#node', children: '共建节点' }],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            // { href: '#', name: 'link0', children: 'FAQ' },
            {
              href: 'mailto:includeleec@gmail.com',
              name: 'link1',
              children: '联系我们',
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关注' },
        childWrapper: {
          className: 'contact',
          children: [
            {
              img: 'https://s1.ax1x.com/2020/04/29/JHVpk9.th.jpg',
              name: 'icon',
              children: {
                type: 'weixin',
              },
            },
            {
              href: 'https://www.weibo.com/u/7440511426',
              name: 'icon',
              children: {
                type: 'weibo',
              },
            },

            {
              href: 'https://twitter.com/Naxone1',
              name: 'icon',
              children: {
                type: 'twitter',
              },
            },
            {
              href: 'https://t.me/naxone',
              name: 'icon',
              children: {
                type: 'telegram',
              },
            },
            {
              href: 'https://github.com/nax-one',
              name: 'icon',
              children: {
                type: 'github',
              },
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2020 by <a href="https://nax.one">Nax.one</a> All Rights Reserved
      </span>
    ),
  },
};
