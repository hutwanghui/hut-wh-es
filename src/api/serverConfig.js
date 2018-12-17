/** *
 *
 *统一定义接口，有利于维护
 *
 * */
// const BASEURL_SERVER_USER = 'http://172.27.128.17:8561/';
const BASEURL_SERVER_PRODUCT = 'http://172.27.128.17:8562';
const URL = {
  histOpen: `${BASEURL_SERVER_PRODUCT}type/pagelist`, // 接口1
  histdata: `${BASEURL_SERVER_PRODUCT}type/pagedata`, // 接口2
  // 商品品牌管理
  POST_addBrand: `${BASEURL_SERVER_PRODUCT}/api/v1/brand/create`, // 添加品牌
  POST_deleteBrandBeatch: `${BASEURL_SERVER_PRODUCT}/api/v1/brand/delete/batch`, // 批量删除品牌
  GET_deleteBrandById: `${BASEURL_SERVER_PRODUCT}/api/v1/brand/delete/{id}`, // 删除品牌
  GET_getPageBrandListByParams: `${BASEURL_SERVER_PRODUCT}/api/v1/brand/list`, // 根据品牌名称分页获取品牌列表-兼容MB和MB-PLUS
  GET_getBrandById: `${BASEURL_SERVER_PRODUCT}/api/v1/brand/{id}`, // 根据编号查询品牌信息
  GET_getBrandListAll: `${BASEURL_SERVER_PRODUCT}/api/v1/brand/listAll`, // 获取全部品牌列表
  POST_updateBeatchWithFactoryStatus: `${BASEURL_SERVER_PRODUCT}/api/v1/brand/update/factoryStatus`, // 批量更新厂家制造商状态
  POST_updateBeatchWithShowStatus: `${BASEURL_SERVER_PRODUCT}/api/v1/brand/update/showStatus`, // 批量更新显示状态
  POST_updateBrandById: `${BASEURL_SERVER_PRODUCT}/api/v1/brand/update/{id}`, // 更新品牌
  // 商品属性分类管理
  GET_addProductAttributeCategory: `${BASEURL_SERVER_PRODUCT}api/v1/productAttribute/category/create`, // 添加商品属性分类
  POST_deleteProductAttributeCategoryById: `${BASEURL_SERVER_PRODUCT}/api/v1/productAttribute/category/delete/{id}`, // 删除单个商品属性分类
  POST_getPageProductAttributeCategoryListByParams: `${BASEURL_SERVER_PRODUCT}/api/v1/productAttribute/category/list`, // 分页获取所有商品属性分类
  GET_getProductAttributeCategoryAll: `${BASEURL_SERVER_PRODUCT}/api/v1/productAttribute/category/list/withAttr`, // 获取所有商品属性分类及其下属性
  POST_getProductAttribute_CategoryById: `${BASEURL_SERVER_PRODUCT}/api/v1/productAttribute/category/{id}`, // 获取单个商品属性分类信息,
  GET_updateProductAttributeCategoryById: `${BASEURL_SERVER_PRODUCT}/api/v1/productAttribute/category/update/{id}`, // 修改商品属性分类
  // 商品属性管理
  POST_addProductCategory: `${BASEURL_SERVER_PRODUCT}/api/v1/productCategory/create`, // 添加产品分类
  POST_deleteProductCategoryById: `${BASEURL_SERVER_PRODUCT}/api/v1/productCategory/delete/{id}`, // 删除商品分类
  GET_getProductCategoryListWithChildren: `${BASEURL_SERVER_PRODUCT}/api/v1/productCategory/list/withChildren`, // 查询所有一级分类及子分类
  GET_getPageroductCategoryByParentId: `${BASEURL_SERVER_PRODUCT}/api/v1/productCategory/list/{parentId}`, // 分页查询商品分类
  GET_getProductCategoryById: `${BASEURL_SERVER_PRODUCT}/api/v1/productCategory/{id}`, // 根据id获取商品分类
  POST_updateProductCategoryNavStatus: `${BASEURL_SERVER_PRODUCT}/api/v1/productCategory/update/navStatus`, // 修改导航栏显示状态
  POST_updateProductCategoryShowStatus: `${BASEURL_SERVER_PRODUCT}/api/v1/productCategory/update/showStatus`, // 修改显示状态
  POST_updateProductCategoryBy_Id: `${BASEURL_SERVER_PRODUCT}/api/v1/productCategory/update/{id}`, // 修改商品分类
  // 商品管理
  POST_addProduct: `${BASEURL_SERVER_PRODUCT}/api/v1/product/create`, // 创建商品
  GET_getPageProductByParams: `${BASEURL_SERVER_PRODUCT}/api/v1/product/list`, // 查询商品
  POST_updateProductStatusDeleteBeatch: `${BASEURL_SERVER_PRODUCT}/api/v1/product/update/deleteStatus`, // 批量修改删除状态
  POST_updateProductStatusNewBeatch: `${BASEURL_SERVER_PRODUCT}/api/v1/product/update/newStatus`, // 批量设为新品
  POST_updateProductStatusPublicBeatch: `${BASEURL_SERVER_PRODUCT}/api/v1/product/update/publishStatus`, // 批量上下架
  POST_updateProductStatusRecommendBeatch: `${BASEURL_SERVER_PRODUCT}/api/v1/product/update/recommendStatus`, // 批量推荐商品
  POST_updateProductStatusVerifyBeatch: `${BASEURL_SERVER_PRODUCT}/api/v1/product/update/verifyStatus`, // 批量修改审核状态
  POST_updateProductById: `${BASEURL_SERVER_PRODUCT}/api/v1/product/update/{id}`, // 更新商
  GET_getProductById: `${BASEURL_SERVER_PRODUCT}/api/v1/product/updateInfo/{id}`, // 根据商品id获取商品编辑信
  // sku商品库存管理
  POST_updateSkuBeatch: `${BASEURL_SERVER_PRODUCT}/api/v1/sku/update/{pid}`, // 批量更新库存信息
  GET_getSkuByProductId: `${BASEURL_SERVER_PRODUCT}/api/v1/sku/{pid}`, // 根据商品编号及编号模糊搜索sku库
};
export default URL;
_
