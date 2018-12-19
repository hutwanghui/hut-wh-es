import server from '../server';
import url from '../serverConfig';

export function POST_addBrand(data) {
  return server({
    url: url.POST_addBrand,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_deleteBrandBeatch(data) {
  return server({
    url: url.POST_deleteBrandBeatch,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_deleteBrandById(data) {
  return server({
    url: url.GET_deleteBrandById,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_getPageBrandListByParams(data) {
  return server({
    url: url.GET_getPageBrandListByParams,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_getBrandById(data) {
  return server({
    url: url.GET_getBrandById,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_getBrandListAll(data) {
  return server({
    url: url.GET_getBrandListAll,
    method: 'get',
    dataType: 'json',
    contentType: 'application/json',
    data,
  });
}
export function POST_updateBeatchWithFactoryStatus(data) {
  return server({
    url: url.POST_updateBeatchWithFactoryStatus,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateBeatchWithShowStatus(data) {
  return server({
    url: url.POST_updateBeatchWithShowStatus,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateBrandById(data) {
  return server({
    url: url.POST_updateBrandById,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_addProductAttributeCategory(data) {
  return server({
    url: url.GET_addProductAttributeCategory,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_deleteProductAttributeCategoryById(data) {
  return server({
    url: url.POST_deleteProductAttributeCategoryById,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_getPageProductAttributeCategoryListByParams(data) {
  return server({
    url: url.POST_getPageProductAttributeCategoryListByParams,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_getProductAttributeCategoryAll(data) {
  return server({
    url: url.GET_getProductAttributeCategoryAll,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_getProductAttribute_CategoryById(data) {
  return server({
    url: url.POST_getProductAttribute_CategoryById,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_updateProductAttributeCategoryById(data) {
  return server({
    url: url.GET_updateProductAttributeCategoryById,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_addProductCategory(data) {
  return server({
    url: url.POST_addProductCategory,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_deleteProductCategoryById(data) {
  return server({
    url: url.POST_deleteProductCategoryById,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_getProductCategoryListWithChildren(data) {
  return server({
    url: url.GET_getProductCategoryListWithChildren,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_getPageroductCategoryByParentId(data) {
  return server({
    url: url.GET_getPageroductCategoryByParentId,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_getProductCategoryById(data) {
  return server({
    url: url.GET_getProductCategoryById,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateProductCategoryNavStatus(data) {
  return server({
    url: url.POST_updateProductCategoryNavStatus,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateProductCategoryShowStatus(data) {
  return server({
    url: url.POST_updateProductCategoryShowStatus,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateProductCategoryBy_Id(data) {
  return server({
    url: url.POST_updateProductCategoryBy_Id,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_addProduct(data) {
  return server({
    url: url.POST_addProduct,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_getPageProductByParams(data) {
  return server({
    url: url.GET_getPageProductByParams,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateProductStatusDeleteBeatch(data) {
  return server({
    url: url.POST_updateProductStatusDeleteBeatch,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateProductStatusNewBeatch(data) {
  return server({
    url: url.POST_updateProductStatusNewBeatch,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateProductStatusPublicBeatch(data) {
  return server({
    url: url.POST_updateProductStatusPublicBeatch,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateProductStatusRecommendBeatch(data) {
  return server({
    url: url.POST_updateProductStatusRecommendBeatch,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateProductStatusVerifyBeatch(data) {
  return server({
    url: url.POST_updateProductStatusVerifyBeatch,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateProductById(data) {
  return server({
    url: url.POST_updateProductById,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_getProductById(data) {
  return server({
    url: url.GET_getProductById,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function POST_updateSkuBeatch(data) {
  return server({
    url: url.POST_updateSkuBeatch,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
export function GET_getSkuByProductId(data) {
  return server({
    url: url.GET_getSkuByProductId,
    method: 'post',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
    data,
  });
}
