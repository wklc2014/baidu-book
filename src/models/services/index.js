import * as APIS from '../../utils/api.js';
import request from '../../utils/request.js';

export function getCateData(params) {
  return request(APIS.getCateData, params, { method: 'get' });
};

export function getCateDetail(params) {
  return request(APIS.getCateDetail, params, { method: 'get' });
};

export function getRankData(params) {
  return request(APIS.getRankData, params, { method: 'get' });
};

export function getRankDetailData(params) {
  return request(APIS.getRankDetailData, params, { method: 'get' });
};

export function getBagData(params) {
  return request(APIS.getBagData, params, { method: 'get' });
};

export function getSearchData(params) {
  return request(APIS.getSearchData, params, { method: 'get' });
};

export function getSearchResultData(params) {
  return request(APIS.getSearchResultData, params, { method: 'get' });
};

export function getChoiceData(params) {
  return request(APIS.getChoiceData, params, { method: 'get' });
};
