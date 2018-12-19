/* eslint no-underscore-dangle:0 */
import React, { Component } from 'react';
import { Table, Pagination, Tab, Search } from '@icedesign/base';
import IceContainer from '@icedesign/container';
import IceImg from '@icedesign/img';
import DataBinder from '@icedesign/data-binder';
import IceLabel from '@icedesign/label';
import { enquireScreen } from 'enquire-js';
import SubCategoryItem from './SubCategoryItem';
import './ComplexTabTable.scss';

@DataBinder({
  tableData: {
    // 详细请求配置请参见 https://github.com/axios/axios
    url: '/api/v1/product/list',
    params: {
    },
    responseFormatter: (responseHandler, res, originResponse) => {
      // 做一些数据转换
      const newRes = {
        // status: res.code !== 0 ? 'SUCCESS' : 'ERROR',
        data: res.page,
      };
      // 回传给处理函数
      // 不做回传处理会导致数据更新逻辑中断
      responseHandler(newRes, originResponse);
    },
    defaultBindingData: {
      list: [],
      totalCount: 1,
      totalPage: 1,
      pageSize: 1,
      currPage: 1,
    },
  },
})
export default class ComplexTabTable extends Component {
  static displayName = 'ComplexTabTable';

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.queryCache = {};
    this.state = {
      isMobile: false,
      currentTab: 'solved',
      currentCategory: '1',
      tabList: [
        {
          text: '已解决',
          count: '123',
          type: 'solved',
          subCategories: [
            {
              text: '申请账号失败',
              id: '1',
            },
            {
              text: '粉丝数为0',
              id: '2',
            },
            {
              text: '空间不足',
              id: '3',
            },
            {
              text: '系统报错',
              id: '4',
            },
            {
              text: '网络异常',
              id: '5',
            },
            {
              text: '不在范围',
              id: '6',
            },
          ],
        },
        {
          text: '待解决',
          count: '10',
          type: 'needFix',
          subCategories: [
            {
              text: '网络异常',
              id: '21',
            },
            {
              text: '空间不足',
              id: '22',
            },
          ],
        },
        {
          text: '待验证',
          count: '32',
          type: 'needValidate',
          subCategories: [
            {
              text: '系统报错',
              id: '34',
            },
            {
              text: '网络异常',
              id: '35',
            },
            {
              text: '不在范围',
              id: '36',
            },
          ],
        },
      ],
    };
  }

  componentDidMount() {
    this.enquireScreenRegister();
    this.queryCache.page = 1;
    this.fetchData();
  }

  enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    }, mediaCondition);
  };

  fetchData = () => {
    this.props.updateBindingData('tableData', {
      params: this.queryCache,
    });
  };
  pic = (value, index, record) => {
    return (
      <div style={styles.titleWrapper}>
        <div>
          <IceImg src={record.pic} width={48} height={48} />
        </div>
        <span style={styles.title}>{record.title}</span>
      </div>
    );
  };
  productStatus = (value, index, record) => {
    return (
      <div style={styles.titleWrapper}>
        <div>
          {record.publishStatus === 1 ? <IceLabel inverse={false} status="success">上 架</IceLabel> :
          <IceLabel inverse={false} status="info">下 架</IceLabel>}
          {record.deleteStatus === 1 ? <IceLabel inverse={false} status="danger">已删除</IceLabel> :
          <IceLabel inverse={false} status="info">正 常</IceLabel>}
          {record.newStatus === 1 ? <IceLabel inverse={false} status="info">新 品</IceLabel> :
          <IceLabel inverse={false} status="info">非新品</IceLabel>}
          {record.verifyStatus === 1 ? <IceLabel inverse={false} status="success">通 过</IceLabel> :
          <IceLabel inverse={false} status="warning">不通过</IceLabel>}
          {record.recommandStatus === 1 ? <IceLabel inverse={false} status="success">推 荐</IceLabel> :
          <IceLabel inverse={false} status="info">不推荐</IceLabel>}
        </div>
      </div>
    );
  };
  editItem = (record, e) => {
    e.preventDefault();
    // TODO: record 为该行所对应的数据，可自定义操作行为
  };

  renderOperations = (value, index, record) => {
    return (
      <div style={styles.complexTabTableOperation}>
        <a
          href="#"
          style={styles.operation}
          target="_blank"
          onClick={this.editItem.bind(this, record)}
        >
          解决
        </a>
        <a href="#" style={styles.operation} target="_blank">
          详情
        </a>
        <a href="#" style={styles.operation} target="_blank">
          分类
        </a>
      </div>
    );
  };

  renderStatus = (value) => {
    return (
      <IceLabel inverse={false} status="default">
        {value}
      </IceLabel>
    );
  };

  changePage = (currpage) => {
    this.queryCache.page = currpage;
    this.fetchData();
  };

  onTabChange = (tabKey) => {
    const firstTabCatId = this.state.tabList.find((item) => {
      return item.type === tabKey;
    }).subCategories[0].id;

    this.setState({
      currentTab: tabKey,
      currentCategory: firstTabCatId,
    });
    this.queryCache.catId = firstTabCatId;
    this.fetchData();
  };

  onSubCategoryClick = (catId) => {
    this.setState({
      currentCategory: catId,
    });
    this.queryCache.catId = catId;
    this.fetchData();
  };

  renderTabBarExtraContent = () => {
    return (
      <div style={styles.tabExtra}>
        <Search
          style={styles.search}
          type="secondary"
          placeholder="搜索"
          searchText=""
          onSearch={this.onSearch}
        />
      </div>
    );
  };

  render() {
    const tableData = this.props.bindingData.tableData;
    const { tabList } = this.state;

    return (
      <div className="complex-tab-table">
        <IceContainer>
          <Tab
            onChange={this.onTabChange}
            type="bar"
            currentTab={this.state.currentTab}
            contentStyle={{
              padding: 0,
            }}
            tabBarExtraContent={
              !this.state.isMobile ? this.renderTabBarExtraContent() : null
            }
          >
            {tabList && tabList.length > 0
              ? tabList.map((tab) => {
                return (
                  <Tab.TabPane
                    key={tab.type}
                    tab={
                      <span>
                        {tab.text}
                        <span style={styles.tabCount}>{tab.count}</span>
                      </span>
                    }
                  >
                    {tab.subCategories && tab.subCategories.length > 0
                      ? tab.subCategories.map((catItem, index) => {
                        return (
                          <SubCategoryItem
                            {...catItem}
                            isCurrent={
                              catItem.id === this.state.currentCategory
                            }
                            onItemClick={this.onSubCategoryClick}
                            key={index}
                          />
                        );
                      })
                      : null}
                  </Tab.TabPane>
                );
              })
              : null}
          </Tab>
        </IceContainer>
        <IceContainer>
          <Table
            dataSource={tableData.list}
            isLoading={tableData.__loading}
            className="basic-table"
            style={styles.basicTable}
            hasBorder={false}
          >
            <Table.Column
              title="商品图片"
              cell={this.pic}
              width={150}
            />
            <Table.Column
              title="商品名称"
              dataIndex="name"
              cell={this.name}
              width={150}
            />
            <Table.Column
              title="商品SN码"
              dataIndex="productSn"
              cell={this.productSn}
              width={150}
            />
            <Table.Column
              title="赠送的成长值"
              dataIndex="giftGrowth"
              cell={this.giftGrowth}
              width={120}
            />
            <Table.Column
              title="赠送的积分"
              dataIndex="giftPoint"
              cell={this.giftPoint}
              width={100}
            />
            <Table.Column title="商品种类" dataIndex="productCategoryName" width={85} />
            <Table.Column
              title="状态"
              width={100}
              cell={this.productStatus}
            />
            <Table.Column
              title="市场价"
              dataIndex="originalPrice"
              cell={this.originalPrice}
              width={100}
            />
            <Table.Column
              title="促销价"
              dataIndex="promotionPrice"
              cell={this.promotionPrice}
              width={100}
            />
            <Table.Column
              title="库存"
              dataIndex="stock"
              cell={this.stock}
              width={100}
            />
            <Table.Column
              title="操作"
              dataIndex="operation"
              width={150}
              cell={this.renderOperations}
            />
          </Table>
          <div style={styles.pagination}>
            <Pagination
              current={tableData.currPage}
              totalpage={tableData.totalPage}
              pageSize={tableData.pageSize}
              total={tableData.totalCount}
              pageSizeList={[5, 10, 20]}
              onChange={this.changePage}
            />
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  complexTabTableOperation: {
    lineHeight: '28px',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  title: {
    marginLeft: '10px',
    lineHeight: '20px',
  },
  operation: {
    marginRight: '12px',
    textDecoration: 'none',
  },
  tabExtra: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    marginLeft: 10,
  },
  tabCount: {
    marginLeft: '5px',
    color: '#3080FE',
  },
  pagination: {
    textAlign: 'right',
    paddingTop: '26px',
  },
};
